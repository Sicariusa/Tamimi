import React from 'react';
import { motion } from 'framer-motion';
import { Division } from '../../content/divisions';
import Section from '../ui/Section';

interface DivisionClientsProps {
  division: Division;
}

const DivisionClients: React.FC<DivisionClientsProps> = ({ division }) => {
  return (
    <Section background="secondary" padding="xl">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Trusted by
          <span className="block text-gold">Industry Leaders</span>
        </h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
          We're proud to serve some of the Kingdom's most prestigious organizations 
          and global enterprises.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {division.clients.map((client, index) => (
          <motion.div
            key={client}
            className="luxury-card p-6 text-center group hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-ivory font-semibold group-hover:text-gold transition-colors duration-300">
              {client}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default DivisionClients;