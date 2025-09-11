import React from 'react';
import { motion } from 'framer-motion';
import { Division } from '../../content/divisions';
import Section from '../ui/Section';

interface DivisionHeroProps {
  division: Division;
}

const DivisionHero: React.FC<DivisionHeroProps> = ({ division }) => {
  return (
    <Section background="default" padding="xl" className="pt-32">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div 
          className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
          style={{ backgroundColor: `${division.color}20`, color: division.color }}
        >
          Established {division.established}
        </div>
        
        <h1 className="font-heading font-black text-5xl lg:text-7xl text-ivory mb-6">
          {division.name}
        </h1>
        
        <p className="text-xl lg:text-2xl text-steel leading-relaxed">
          {division.description}
        </p>
      </motion.div>
    </Section>
  );
};

export default DivisionHero;