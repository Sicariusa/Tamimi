import React from 'react';
import { Store, Users, MapPin, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import StatCounter from '../ui/StatCounter';

const MarketsStats: React.FC = () => {
  const stats = [
    {
      value: 110,
      label: 'Stores',
      description: 'Across the Kingdom',
      suffix: '+',
      icon: Store
    },
    {
      value: 5000000,
      label: 'Customers',
      description: 'Served annually',
      suffix: '+',
      icon: Users
    },
    {
      value: 25,
      label: 'Cities',
      description: 'Nationwide presence',
      suffix: '+',
      icon: MapPin
    },
    {
      value: 30,
      label: 'PIF Ownership',
      description: 'Strategic partnership',
      suffix: '%',
      icon: TrendingUp
    }
  ];

  return (
    <Section background="secondary" padding="xl">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Market Leadership
          <span className="block text-gold">By the Numbers</span>
        </h2>
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

export default MarketsStats;