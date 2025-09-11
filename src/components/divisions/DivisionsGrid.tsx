import React from 'react';
import { motion } from 'framer-motion';
import { divisions } from '../../content/divisions';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { UtensilsCrossed, Settings, Building2, HardHat, Cog, Truck } from 'lucide-react';

const DivisionsGrid: React.FC = () => {
  const iconMap = {
    UtensilsCrossed,
    Settings,
    Building2,
    HardHat,
    Cog,
    Truck
  };

  return (
    <Section background="secondary" padding="xl">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {divisions.map((division, index) => {
          const IconComponent = iconMap[division.icon as keyof typeof iconMap] || Building2;
          
          return (
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card
                title={division.name}
                description={division.shortDescription}
                icon={IconComponent}
                iconColor={division.color}
                href={`/divisions/${division.slug}`}
                variant="luxury"
                className="h-full"
              >
                <div className="mt-4 pt-4 border-t border-line">
                  <div className="text-gold font-semibold text-sm">
                    Established {division.established}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default DivisionsGrid;