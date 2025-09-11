import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Phone, Clock, Filter } from 'lucide-react';
import MapboxMap from './MapboxMap';

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  coordinates: [number, number];
  phone: string;
  hours: string;
  services: string[];
  type: 'supermarket' | 'hypermarket' | 'express';
}

interface StoreLocatorProps {
  stores: Store[];
  className?: string;
}

const StoreLocator: React.FC<StoreLocatorProps> = ({ stores, className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [filteredStores, setFilteredStores] = useState<Store[]>(stores);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  // Get unique cities and types
  const cities = Array.from(new Set(stores.map(store => store.city))).sort();
  const types = Array.from(new Set(stores.map(store => store.type))).sort();

  // Filter stores based on search criteria
  useEffect(() => {
    let filtered = stores;

    if (searchTerm) {
      filtered = filtered.filter(store =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCity) {
      filtered = filtered.filter(store => store.city === selectedCity);
    }

    if (selectedType) {
      filtered = filtered.filter(store => store.type === selectedType);
    }

    setFilteredStores(filtered);
  }, [searchTerm, selectedCity, selectedType, stores]);

  const handleMarkerClick = (marker: any) => {
    const store = stores.find(s => s.id === marker.id);
    if (store) {
      setSelectedStore(store);
    }
  };

  const mapMarkers = filteredStores.map(store => ({
    id: store.id,
    coordinates: store.coordinates,
    title: store.name,
    description: `${store.address} • ${store.phone}`,
    type: 'store' as const,
    color: store.type === 'hypermarket' ? '#C9A227' : store.type === 'supermarket' ? '#2563EB' : '#059669'
  }));

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedType('');
  };

  return (
    <div className={`${className}`}>
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-steel" size={20} />
            <input
              type="text"
              placeholder="Search by store name, address, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface-secondary border border-line rounded-lg text-ivory placeholder-steel focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* City Filter */}
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-3 bg-surface-secondary border border-line rounded-lg text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-3 bg-surface-secondary border border-line rounded-lg text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>

          {/* Clear Filters */}
          {(searchTerm || selectedCity || selectedType) && (
            <button
              onClick={clearFilters}
              className="px-4 py-3 bg-gold text-ink rounded-lg font-semibold hover:bg-gold-hover transition-colors duration-300"
            >
              Clear
            </button>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                viewMode === 'map' 
                  ? 'bg-gold text-ink' 
                  : 'text-steel hover:text-ivory'
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-gold text-ink' 
                  : 'text-steel hover:text-ivory'
              }`}
            >
              List View
            </button>
          </div>

          <div className="text-steel text-sm">
            {filteredStores.length} of {stores.length} stores
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map */}
        <AnimatePresence mode="wait">
          {viewMode === 'map' && (
            <motion.div
              key="map"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2"
            >
              <MapboxMap
                markers={mapMarkers}
                height="500px"
                onMarkerClick={handleMarkerClick}
                cluster={filteredStores.length > 20}
                className="w-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Store List */}
        <motion.div
          className={viewMode === 'list' ? 'lg:col-span-2' : ''}
          layout
        >
          <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gold scrollbar-track-surface-secondary">
            <AnimatePresence>
              {filteredStores.map((store, index) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`luxury-card p-6 cursor-pointer transition-all duration-300 ${
                    selectedStore?.id === store.id ? 'ring-2 ring-gold' : ''
                  }`}
                  onClick={() => setSelectedStore(store)}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-ivory text-lg mb-1">
                        {store.name}
                      </h3>
                      <div className="flex items-center text-steel text-sm mb-2">
                        <MapPin size={14} className="mr-1" />
                        {store.address}, {store.city}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      store.type === 'hypermarket' 
                        ? 'bg-gold/20 text-gold'
                        : store.type === 'supermarket'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      {store.type.charAt(0).toUpperCase() + store.type.slice(1)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-steel">
                      <Phone size={14} className="mr-2 text-gold" />
                      {store.phone}
                    </div>
                    <div className="flex items-center text-steel">
                      <Clock size={14} className="mr-2 text-gold" />
                      {store.hours}
                    </div>
                  </div>

                  {store.services.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-line">
                      <div className="flex flex-wrap gap-2">
                        {store.services.slice(0, 3).map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="px-2 py-1 bg-surface-tertiary text-steel text-xs rounded"
                          >
                            {service}
                          </span>
                        ))}
                        {store.services.length > 3 && (
                          <span className="px-2 py-1 bg-surface-tertiary text-steel text-xs rounded">
                            +{store.services.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredStores.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-steel text-lg mb-2">No stores found</div>
              <p className="text-steel/60">Try adjusting your search criteria</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default StoreLocator;