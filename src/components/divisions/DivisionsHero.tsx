import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const DivisionsHero: React.FC = () => {
  return (
    <Section background="default" padding="xl" className="pt-32">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-heading font-black text-5xl lg:text-7xl text-ivory mb-6">
          Business Divisions
          <span className="block text-gold">Excellence Across Sectors</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-steel leading-relaxed">
          Discover our comprehensive portfolio of business divisions, each delivering 
          specialized expertise and exceptional service across diverse industries 
          throughout the Kingdom and beyond.
        </p>
      </motion.div>
    </Section>
  );
};

export default DivisionsHero;