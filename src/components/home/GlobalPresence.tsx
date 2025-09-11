import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, Users, Globe } from 'lucide-react';
import Section from '../ui/Section';

const GlobalPresence: React.FC = () => {
  const locations = [
    { country: 'Saudi Arabia', offices: 8, employees: 19500, flag: '🇸🇦' },
    { country: 'Kuwait', offices: 1, employees: 400, flag: '🇰🇼' },
    { country: 'Bahrain', offices: 1, employees: 200, flag: '🇧🇭' },
    { country: 'Qatar', offices: 1, employees: 150, flag: '🇶🇦' },
  ];

  const totalStats = locations.reduce((acc, location) => ({
    offices: acc.offices + location.offices,
    employees: acc.employees + location.employees
  }), { offices: 0, employees: 0 });

  return (
    <Section background="default" padding="xl" id="global-presence">
      <div className="text-center mb-16">
        <motion.h2 
          className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Regional Presence
          <span className="block text-gold">Across the GCC</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          From our headquarters in Riyadh to strategic locations across the Gulf, 
          we're positioned to serve clients throughout the region.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Map Visualization */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass backdrop-blur-xl rounded-3xl p-8 border border-line">
            <h3 className="font-heading font-bold text-2xl text-ivory mb-8 text-center">
              Our Locations
            </h3>
            
            {/* Simplified Map Representation */}
            <div className="relative bg-surface-tertiary rounded-2xl p-8 h-80 overflow-hidden">
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201,162,39,0.5) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}
              />
              
              {/* Location Markers */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <div className="text-ivory font-semibold mb-2">GCC Region</div>
                  <div className="flex items-center justify-center space-x-2 text-2xl">
                    {locations.map((location) => (
                      <motion.span
                        key={location.country}
                        className="cursor-pointer hover:scale-125 transition-transform duration-300"
                        title={location.country}
                        whileHover={{ scale: 1.25 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {location.flag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Pulsing Animation for Active Locations */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-4 h-4 bg-gold rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0.3, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Details */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.country}
              className="luxury-card p-6 group hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{location.flag}</div>
                  <div>
                    <h4 className="font-heading font-bold text-ivory text-lg group-hover:text-gold transition-colors duration-300">
                      {location.country}
                    </h4>
                    <div className="flex items-center space-x-4 text-steel text-sm mt-1">
                      <div className="flex items-center space-x-1">
                        <Building size={14} />
                        <span>{location.offices} office{location.offices > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{location.employees.toLocaleString()} employees</span>
                      </div>
                    </div>
                  </div>
                </div>
                <MapPin className="text-gold" size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Summary Stats */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass backdrop-blur-xl rounded-3xl p-8 border border-line max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-gold mb-2 tabular-nums">4</div>
              <div className="text-ivory font-semibold mb-1">Countries</div>
              <div className="text-steel text-sm">Regional coverage</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gold mb-2 tabular-nums">{totalStats.offices}</div>
              <div className="text-ivory font-semibold mb-1">Offices</div>
              <div className="text-steel text-sm">Strategic locations</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gold mb-2 tabular-nums">{(totalStats.employees / 1000).toFixed(0)}K+</div>
              <div className="text-ivory font-semibold mb-1">Employees</div>
              <div className="text-steel text-sm">Regional workforce</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gold mb-2 tabular-nums">80+</div>
              <div className="text-ivory font-semibold mb-1">Years</div>
              <div className="text-steel text-sm">Regional experience</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default GlobalPresence;