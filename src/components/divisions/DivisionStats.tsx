import React from 'react';
import { Division } from '../../content/divisions';
import Section from '../ui/Section';
import StatCounter from '../ui/StatCounter';

interface DivisionStatsProps {
  division: Division;
}

const DivisionStats: React.FC<DivisionStatsProps> = ({ division }) => {
  return (
    <Section background="default" padding="xl">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Key Performance
          <span className="block text-gold">Indicators</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {division.keyStats.map((stat, index) => (
          <StatCounter
            key={stat.label}
            value={parseInt(stat.value.replace(/[^0-9]/g, ''))}
            label={stat.label}
            description={stat.description}
            suffix={stat.value.replace(/[0-9]/g, '')}
            size="lg"
          />
        ))}
      </div>
    </Section>
  );
};

export default DivisionStats;