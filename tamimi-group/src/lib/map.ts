import mapboxgl from 'mapbox-gl';

// Mapbox configuration
export const MAPBOX_CONFIG = {
  style: 'mapbox://styles/mapbox/light-v11',
  darkStyle: 'mapbox://styles/mapbox/dark-v11',
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '',
};

// Map styles for different use cases
export const MAP_STYLES = {
  light: 'mapbox://styles/mapbox/light-v11',
  dark: 'mapbox://styles/mapbox/dark-v11',
  satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
  navigation: 'mapbox://styles/mapbox/navigation-day-v1',
};

// Default map center (Gulf region)
export const DEFAULT_CENTER: [number, number] = [50.5, 26.0];
export const DEFAULT_ZOOM = 5;

// Create a marker element
export const createMarkerElement = (
  type: 'office' | 'store' = 'office',
  isActive = false
) => {
  const el = document.createElement('div');
  el.className = `marker marker-${type} ${isActive ? 'marker-active' : ''}`;
  
  if (type === 'office') {
    el.innerHTML = `
      <div class="marker-inner bg-brand-gold border-2 border-white shadow-gold rounded-full w-4 h-4 ${
        isActive ? 'animate-pulse-gold' : ''
      }">
        <div class="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-75"></div>
      </div>
    `;
  } else {
    el.innerHTML = `
      <div class="marker-inner bg-blue-500 border-2 border-white shadow-lg rounded-full w-3 h-3">
        <div class="absolute inset-0 bg-blue-500 rounded-full"></div>
      </div>
    `;
  }
  
  el.style.width = type === 'office' ? '20px' : '16px';
  el.style.height = type === 'office' ? '20px' : '16px';
  el.style.cursor = 'pointer';
  
  return el;
};

// Create popup content
export const createPopupContent = (data: {
  name?: string;
  city?: string;
  country?: string;
  address?: string;
  phone?: string;
  employees?: number;
  type?: string;
  services?: string[];
}) => {
  const {
    name,
    city,
    country,
    address,
    phone,
    employees,
    type,
    services,
  } = data;

  return `
    <div class="p-4 min-w-[200px]">
      <div class="flex items-start justify-between mb-2">
        <h3 class="font-semibold text-brand-ink text-lg">
          ${name || `${city}, ${country}`}
        </h3>
        ${type === 'HQ' ? '<span class="bg-brand-gold text-white text-xs px-2 py-1 rounded-full">HQ</span>' : ''}
      </div>
      
      ${address ? `<p class="text-gray-600 text-sm mb-2">${address}</p>` : ''}
      ${phone ? `<p class="text-gray-600 text-sm mb-2">📞 ${phone}</p>` : ''}
      ${employees ? `<p class="text-gray-600 text-sm mb-2">👥 ${employees.toLocaleString()} employees</p>` : ''}
      
      ${services && services.length > 0 ? `
        <div class="mt-3 pt-3 border-t border-gray-200">
          <p class="text-xs text-gray-500 mb-1">Services:</p>
          <div class="flex flex-wrap gap-1">
            ${services.slice(0, 3).map(service => 
              `<span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">${service}</span>`
            ).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
};

// Fit bounds to markers
export const fitBoundsToMarkers = (
  map: mapboxgl.Map,
  coordinates: [number, number][],
  padding = 50
) => {
  if (coordinates.length === 0) return;

  if (coordinates.length === 1) {
    map.flyTo({
      center: coordinates[0],
      zoom: 10,
      duration: 1000,
    });
    return;
  }

  const bounds = new mapboxgl.LngLatBounds();
  coordinates.forEach((coord) => bounds.extend(coord));

  map.fitBounds(bounds, {
    padding,
    duration: 1000,
    maxZoom: 12,
  });
};

// Add clustering for stores
export const addClusterLayer = (map: mapboxgl.Map, sourceId: string) => {
  // Add cluster layer
  map.addLayer({
    id: `${sourceId}-clusters`,
    type: 'circle',
    source: sourceId,
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': [
        'step',
        ['get', 'point_count'],
        '#3B82F6',
        10,
        '#EF4444',
        30,
        '#DC2626'
      ],
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        20,
        10,
        30,
        30,
        40
      ],
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });

  // Add cluster count layer
  map.addLayer({
    id: `${sourceId}-cluster-count`,
    type: 'symbol',
    source: sourceId,
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['Inter Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    },
    paint: {
      'text-color': '#ffffff'
    }
  });

  // Add unclustered points layer
  map.addLayer({
    id: `${sourceId}-unclustered-point`,
    type: 'circle',
    source: sourceId,
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#3B82F6',
      'circle-radius': 8,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });
};

// Handle cluster click
export const handleClusterClick = (
  map: mapboxgl.Map,
  e: mapboxgl.MapMouseEvent,
  sourceId: string
) => {
  const features = map.queryRenderedFeatures(e.point, {
    layers: [`${sourceId}-clusters`]
  });

  if (!features.length) return;

  const clusterId = features[0].properties?.cluster_id;
  const source = map.getSource(sourceId) as mapboxgl.GeoJSONSource;

  source.getClusterExpansionZoom(clusterId, (err, zoom) => {
    if (err) return;

    map.easeTo({
      center: (features[0].geometry as any).coordinates,
      zoom: zoom || 10,
      duration: 500
    });
  });
};

// Create GeoJSON from locations
export const createGeoJSON = (locations: Array<{
  lat: number;
  lng: number;
  [key: string]: any;
}>) => {
  return {
    type: 'FeatureCollection' as const,
    features: locations.map((location, index) => ({
      type: 'Feature' as const,
      properties: {
        id: index,
        ...location,
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [location.lng, location.lat],
      },
    })),
  };
};

// Map themes
export const getMapTheme = (theme: 'light' | 'dark' = 'light') => {
  return {
    style: theme === 'dark' ? MAP_STYLES.dark : MAP_STYLES.light,
    backgroundColor: theme === 'dark' ? '#0D0D0D' : '#F7F7F8',
  };
};

// Custom map controls
export const addCustomControls = (map: mapboxgl.Map) => {
  // Add navigation controls
  const nav = new mapboxgl.NavigationControl({
    showCompass: false,
    showZoom: true,
  });
  map.addControl(nav, 'top-right');

  // Add geolocate control (mobile)
  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: false,
    showUserHeading: false,
  });

  // Only add geolocate on mobile
  if (window.innerWidth <= 768) {
    map.addControl(geolocate, 'top-right');
  }

  // Add fullscreen control
  const fullscreen = new mapboxgl.FullscreenControl();
  map.addControl(fullscreen, 'top-right');

  return { nav, geolocate, fullscreen };
};