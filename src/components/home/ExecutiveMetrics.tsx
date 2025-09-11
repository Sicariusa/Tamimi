import React from 'react';
import { Building2, Users, Globe, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import StatCounter from '../ui/StatCounter';

const ExecutiveMetrics: React.FC = () => {
  const metrics = [
    {
      value: 30,
      label: 'Companies',
      description: 'Diverse business portfolio',
      suffix: '+',
      icon: Building2,
    },
    {
      value: 21000,
      label: 'Employees',
      description: 'Dedicated professionals',
      suffix: '+',
      icon: Users,
    },
    {
      value: 80,
      label: 'Years',
      description: 'Of excellence and growth',
      suffix: '+',
      icon: TrendingUp,
    },
    {
      value: 4,
      label: 'Countries',
      description: 'Regional presence',
      icon: Globe,
    },
  ];

  return (
    <Section background="secondary" padding="xl" id="metrics">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Driving Excellence
          <span className="block text-gold">Across the Kingdom</span>
        </h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
          Our numbers tell the story of sustained growth, unwavering commitment, 
          and the trust placed in us by partners across diverse industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <StatCounter
            key={metric.label}
            value={metric.value}
            label={metric.label}
            description={metric.description}
            suffix={metric.suffix}
            icon={metric.icon}
            size="lg"
            className="group hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Additional Context */}
      <div className="mt-20 text-center">
        <div className="glass backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-line max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-2xl lg:text-3xl text-ivory mb-6">
            A Legacy of Trust and Innovation
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-gold mb-2 tabular-nums">98%</div>
              <div className="text-ivory font-semibold mb-1">Client Satisfaction</div>
              <div className="text-steel text-sm">Consistent excellence</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gold mb-2 tabular-nums">50M+</div>
              <div className="text-ivory font-semibold mb-1">Meals Served</div>
              <div className="text-steel text-sm">Annual catering volume</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gold mb-2 tabular-nums">99.2%</div>
              <div className="text-ivory font-semibold mb-1">Uptime</div>
              <div className="text-steel text-sm">Facility management</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExecutiveMetrics;