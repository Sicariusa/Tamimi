import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Division } from '../../content/divisions';
import Section from '../ui/Section';

interface DivisionServicesProps {
  division: Division;
}

const DivisionServices: React.FC<DivisionServicesProps> = ({ division }) => {
  return (
    <Section background="secondary" padding="xl">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Our Services
        </h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
          Comprehensive solutions tailored to meet the unique needs of our clients 
          across diverse industries and sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {division.services.map((service, index) => (
          <motion.div
            key={service}
            className="flex items-center space-x-3 luxury-card p-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Check size={14} className="text-gold" />
            </div>
            <span className="text-ivory font-medium">{service}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default DivisionServices;