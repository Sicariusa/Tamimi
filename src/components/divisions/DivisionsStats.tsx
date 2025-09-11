import React from 'react';
import { Building2, Users, MapPin, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import StatCounter from '../ui/StatCounter';

const DivisionsStats: React.FC = () => {
  const stats = [
    {
      value: 6,
      label: 'Business Divisions',
      description: 'Specialized service areas',
      icon: Building2
    },
    {
      value: 21000,
      label: 'Total Employees',
      description: 'Across all divisions',
      suffix: '+',
      icon: Users
    },
    {
      value: 100,
      label: 'Active Projects',
      description: 'Ongoing initiatives',
      suffix: '+',
      icon: TrendingUp
    },
    {
      value: 4,
      label: 'Countries',
      description: 'Regional presence',
      icon: MapPin
    }
  ];

  return (
    <Section background="default" padding="xl">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Comprehensive Coverage
          <span className="block text-gold">Across Industries</span>
        </h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
          Our diverse business divisions work together to provide integrated solutions 
          and exceptional service delivery across multiple sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StatCounter
            key={stat.label}
            value={stat.value}
            label={stat.label}
            description={stat.description}
            suffix={stat.suffix}
            icon={stat.icon}
            size="lg"
          />
        ))}
      </div>
    </Section>
  );
};

export default DivisionsStats;