'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { 
  MAPBOX_CONFIG, 
  DEFAULT_CENTER, 
  DEFAULT_ZOOM,
  createMarkerElement,
  createPopupContent,
  fitBoundsToMarkers,
  addCustomControls,
  createGeoJSON,
  addClusterLayer,
  handleClusterClick
} from '@/lib/map';

interface MapboxMapProps {
  center?: [number, number];
  zoom?: number;
  markers?: Array<{
    lat: number;
    lng: number;
    [key: string]: any;
  }>;
  cluster?: boolean;
  fitBoundsOnLoad?: boolean;
  height?: string;
  className?: string;
  style?: 'light' | 'dark' | 'satellite';
  onMarkerClick?: (marker: any) => void;
  interactive?: boolean;
}

// Fallback component when no Mapbox token is provided
function MapFallback({ height, className, markers }: { height: string; className: string; markers: any[] }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div
        style={{ height }}
        className="w-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-gray-600 border-2 border-dashed border-gray-300"
      >
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-700 mb-2">Interactive Map</h3>
          <p className="text-sm text-gray-500 mb-4">Map unavailable (Mapbox token required)</p>
          {markers.length > 0 && (
            <div className="text-xs text-gray-400">
              {markers.length} location{markers.length !== 1 ? 's' : ''} available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MapboxMap({
  center = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM,
  markers = [],
  cluster = false,
  fitBoundsOnLoad = false,
  height = '400px',
  className = '',
  style = 'light',
  onMarkerClick,
  interactive = true,
}: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Safe fallback when no Mapbox token is provided
  if (!MAPBOX_CONFIG.accessToken) {
    return <MapFallback height={height} className={className} markers={markers} />;
  }

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = MAPBOX_CONFIG.accessToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: style === 'dark' ? MAPBOX_CONFIG.darkStyle : MAPBOX_CONFIG.style,
      center,
      zoom,
      interactive,
      attributionControl: false,
    });

    // Add controls
    if (interactive) {
      addCustomControls(map.current);
    }

    map.current.on('load', () => {
      setIsLoaded(true);
      
      // Handle markers
      if (markers.length > 0) {
        if (cluster) {
          addClusteredMarkers();
        } else {
          addIndividualMarkers();
        }

        // Fit bounds if requested
        if (fitBoundsOnLoad) {
          const coordinates = markers.map(marker => [marker.lng, marker.lat] as [number, number]);
          fitBoundsToMarkers(map.current!, coordinates);
        }
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  // Update markers when props change
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    if (markers.length > 0) {
      if (cluster) {
        addClusteredMarkers();
      } else {
        addIndividualMarkers();
      }
    }
  }, [markers, cluster, isLoaded]);

  const addIndividualMarkers = () => {
    if (!map.current) return;

    markers.forEach((markerData, index) => {
      const markerElement = createMarkerElement(
        markerData.type === 'HQ' ? 'office' : 'store'
      );

      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([markerData.lng, markerData.lat]);

      // Add popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false,
      }).setHTML(createPopupContent(markerData as any));

      marker.setPopup(popup);

      // Add click handler
      markerElement.addEventListener('click', () => {
        if (onMarkerClick) {
          onMarkerClick(markerData);
        }
      });

      marker.addTo(map.current!);
      markersRef.current.push(marker);
    });
  };

  const addClusteredMarkers = () => {
    if (!map.current) return;

    const geojson = createGeoJSON(markers);
    const sourceId = 'markers';

    // Add source
    if (map.current.getSource(sourceId)) {
      (map.current.getSource(sourceId) as mapboxgl.GeoJSONSource).setData(geojson);
    } else {
      map.current.addSource(sourceId, {
        type: 'geojson',
        data: geojson,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      // Add cluster layers
      addClusterLayer(map.current, sourceId);

      // Add click handlers
      map.current.on('click', `${sourceId}-clusters`, (e) => {
        handleClusterClick(map.current!, e, sourceId);
      });

      map.current.on('click', `${sourceId}-unclustered-point`, (e) => {
        const coordinates = (e.features![0].geometry as any).coordinates.slice();
        const properties = e.features![0].properties;

        // Find the original marker data
        const markerData = markers.find((_, index) => index === properties?.id);
        
        if (markerData) {
          // Show popup
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(createPopupContent(markerData as any))
            .addTo(map.current!);

          if (onMarkerClick) {
            onMarkerClick(markerData);
          }
        }
      });

      // Change cursor on hover
      map.current.on('mouseenter', `${sourceId}-clusters`, () => {
        map.current!.getCanvas().style.cursor = 'pointer';
      });
      map.current.on('mouseleave', `${sourceId}-clusters`, () => {
        map.current!.getCanvas().style.cursor = '';
      });
      map.current.on('mouseenter', `${sourceId}-unclustered-point`, () => {
        map.current!.getCanvas().style.cursor = 'pointer';
      });
      map.current.on('mouseleave', `${sourceId}-unclustered-point`, () => {
        map.current!.getCanvas().style.cursor = '';
      });
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div
        ref={mapContainer}
        style={{ height }}
        className="w-full"
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-brand-gold rounded-full animate-pulse"></div>
            <span className="text-gray-600">Loading map...</span>
          </div>
        </div>
      )}

    </div>
  );
}