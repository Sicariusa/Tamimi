import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set Mapbox access token (you'll need to add this to your .env file)
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoidGFtaW1pZ3JvdXAiLCJhIjoiY2x3eHl6YWJiMDFvMDJqbzJsYnQ5Z2FvMCJ9.example';

interface MapMarker {
  id: string;
  coordinates: [number, number]; // [lng, lat]
  title: string;
  description?: string;
  type?: 'office' | 'store' | 'project';
  color?: string;
}

interface MapboxMapProps {
  markers?: MapMarker[];
  center?: [number, number];
  zoom?: number;
  style?: string;
  height?: string;
  className?: string;
  showControls?: boolean;
  onMarkerClick?: (marker: MapMarker) => void;
  cluster?: boolean;
}

const MapboxMap: React.FC<MapboxMapProps> = ({
  markers = [],
  center = [46.6753, 24.7136], // Riyadh coordinates
  zoom = 6,
  style = 'mapbox://styles/mapbox/dark-v11',
  height = '400px',
  className = '',
  showControls = true,
  onMarkerClick,
  cluster = false
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style,
      center,
      zoom,
      attributionControl: false,
    });

    // Add controls
    if (showControls) {
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.current.addControl(
        new mapboxgl.AttributionControl({
          compact: true,
        }),
        'bottom-left'
      );
    }

    // Handle map load
    map.current.on('load', () => {
      setIsLoaded(true);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current || !isLoaded) return;

    // Clear existing markers
    const existingMarkers = document.querySelectorAll('.mapbox-marker');
    existingMarkers.forEach(marker => marker.remove());

    // Add markers
    markers.forEach((marker) => {
      // Create custom marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'mapbox-marker';
      markerElement.style.cssText = `
        width: 24px;
        height: 24px;
        background-color: ${marker.color || '#C9A227'};
        border: 3px solid white;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
      `;

      // Add hover effects
      markerElement.addEventListener('mouseenter', () => {
        markerElement.style.transform = 'scale(1.2)';
        markerElement.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
      });

      markerElement.addEventListener('mouseleave', () => {
        markerElement.style.transform = 'scale(1)';
        markerElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
      });

      // Create popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false,
        className: 'mapbox-popup-custom',
      }).setHTML(`
        <div class="p-4">
          <h3 class="font-bold text-ivory text-lg mb-2">${marker.title}</h3>
          ${marker.description ? `<p class="text-steel text-sm">${marker.description}</p>` : ''}
        </div>
      `);

      // Create marker and add to map
      const mapboxMarker = new mapboxgl.Marker(markerElement)
        .setLngLat(marker.coordinates)
        .setPopup(popup)
        .addTo(map.current!);

      // Handle marker click
      markerElement.addEventListener('click', () => {
        if (onMarkerClick) {
          onMarkerClick(marker);
        }
      });
    });

    // Fit map to markers if multiple markers exist
    if (markers.length > 1) {
      const bounds = new mapboxgl.LngLatBounds();
      markers.forEach(marker => bounds.extend(marker.coordinates));
      map.current.fitBounds(bounds, { padding: 50 });
    }
  }, [markers, isLoaded, onMarkerClick]);

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <div
        ref={mapContainer}
        style={{ height }}
        className="w-full"
      />
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-surface-secondary flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mb-4 mx-auto" />
            <p className="text-steel">Loading map...</p>
          </div>
        </div>
      )}

      {/* Custom CSS for popup styling */}
      <style jsx>{`
        :global(.mapbox-popup-custom .mapboxgl-popup-content) {
          background: #141414 !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 12px !important;
          box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.4) !important;
        }
        
        :global(.mapbox-popup-custom .mapboxgl-popup-tip) {
          border-top-color: #141414 !important;
        }
        
        :global(.mapbox-popup-custom .mapboxgl-popup-close-button) {
          color: #C9A227 !important;
          font-size: 18px !important;
          padding: 8px !important;
        }
      `}</style>
    </div>
  );
};

export default MapboxMap;