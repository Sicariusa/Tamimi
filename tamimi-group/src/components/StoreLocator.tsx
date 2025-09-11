'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Clock, Filter } from 'lucide-react';
import MapboxMap from './MapboxMap';
import { Store } from '@/lib/content';

interface StoreLocatorProps {
  stores: Store[];
  className?: string;
}

export default function StoreLocator({ stores, className = '' }: StoreLocatorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  // Get unique cities
  const cities = useMemo(() => {
    const citySet = new Set(stores.map(store => store.city));
    return Array.from(citySet).sort();
  }, [stores]);

  // Filter stores based on search and city
  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           store.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = !selectedCity || store.city === selectedCity;
      
      return matchesSearch && matchesCity;
    });
  }, [stores, searchTerm, selectedCity]);

  const handleMarkerClick = (store: any) => {
    const storeData = stores.find(s => s.id === store.id);
    if (storeData) {
      setSelectedStore(storeData);
    }
  };

  const handleStoreSelect = (store: Store) => {
    setSelectedStore(store);
    // Scroll to map on mobile
    if (window.innerWidth < 768) {
      document.getElementById('store-map')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      {/* Store List */}
      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search stores by name, city, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCity('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                !selectedCity
                  ? 'bg-brand-gold text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Cities
            </button>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCity === city
                    ? 'bg-brand-gold text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-600">
          {filteredStores.length} store{filteredStores.length !== 1 ? 's' : ''} found
        </div>

        {/* Store List */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              onClick={() => handleStoreSelect(store)}
              className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-card ${
                selectedStore?.id === store.id
                  ? 'border-brand-gold bg-brand-gold/5'
                  : 'border-gray-200 hover:border-brand-gold/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-brand-ink">{store.name}</h3>
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" />
              </div>
              
              <p className="text-gray-600 text-sm mb-2">{store.address}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>{store.phone}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{store.hours}</span>
                </div>
              </div>

              {store.services && store.services.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {store.services.map((service) => (
                    <span
                      key={service}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {filteredStores.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No stores found matching your criteria.</p>
              <p className="text-sm mt-1">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="lg:sticky lg:top-24">
        <div id="store-map">
          <MapboxMap
            markers={filteredStores}
            cluster={filteredStores.length > 10}
            fitBoundsOnLoad={filteredStores.length > 0}
            height="600px"
            onMarkerClick={handleMarkerClick}
            className="rounded-xl shadow-card"
          />
        </div>

        {/* Selected Store Details */}
        {selectedStore && (
          <div className="mt-4 p-6 bg-white rounded-xl shadow-card">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-brand-ink">
                {selectedStore.name}
              </h3>
              <button
                onClick={() => setSelectedStore(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-brand-gold mt-0.5" />
                <span className="text-gray-600">{selectedStore.address}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-brand-gold" />
                <a
                  href={`tel:${selectedStore.phone}`}
                  className="text-brand-gold hover:underline"
                >
                  {selectedStore.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-brand-gold" />
                <span className="text-gray-600">{selectedStore.hours}</span>
              </div>
            </div>

            {selectedStore.services && selectedStore.services.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-brand-ink mb-2">Services Available</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStore.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}