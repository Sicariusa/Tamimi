import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Leaf } from 'lucide-react';
import Section from '../ui/Section';
import StatCounter from '../ui/StatCounter';

const Vision2030: React.FC = () => {
  const kpis = [
    {
      value: 75,
      label: 'Saudization Rate',
      description: 'Saudi nationals in workforce',
      suffix: '%',
      icon: Users
    },
    {
      value: 30,
      label: 'CO₂ Reduction',
      description: 'Environmental impact decrease',
      suffix: '%',
      icon: Leaf
    },
    {
      value: 15,
      label: 'Revenue Growth',
      description: 'Annual growth rate',
      suffix: '%',
      icon: TrendingUp
    },
    {
      value: 25,
      label: 'New Projects',
      description: 'Vision 2030 initiatives',
      suffix: '+',
      icon: Target
    }
  ];

  return (
    <Section background="default" padding="xl" id="vision2030">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Vision 2030 Alignment
          <span className="block text-gold">Building Tomorrow's Kingdom</span>
        </h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
          As a strategic partner in Saudi Arabia's transformation, we're committed 
          to supporting the Kingdom's ambitious goals through sustainable practices, 
          innovation, and community development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {kpis.map((kpi, index) => (
          <StatCounter
            key={kpi.label}
            value={kpi.value}
            label={kpi.label}
            description={kpi.description}
            suffix={kpi.suffix}
            icon={kpi.icon}
            size="lg"
          />
        ))}
      </div>

      {/* Vision 2030 Initiatives */}
      <motion.div
        className="glass backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-line"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center mb-8">
          <h3 className="font-heading font-bold text-2xl lg:text-3xl text-ivory mb-4">
            Our Vision 2030 Commitments
          </h3>
          <p className="text-steel leading-relaxed max-w-2xl mx-auto">
            Actively contributing to the Kingdom's transformation through strategic initiatives 
            and sustainable business practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <Users className="text-gold" size={32} />
            </div>
            <h4 className="font-heading font-bold text-ivory text-lg mb-2">
              Human Capital Development
            </h4>
            <p className="text-steel text-sm">
              Training and developing Saudi talent across all business divisions
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <Leaf className="text-gold" size={32} />
            </div>
            <h4 className="font-heading font-bold text-ivory text-lg mb-2">
              Environmental Sustainability
            </h4>
            <p className="text-steel text-sm">
              Implementing green technologies and sustainable practices
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <Target className="text-gold" size={32} />
            </div>
            <h4 className="font-heading font-bold text-ivory text-lg mb-2">
              Economic Diversification
            </h4>
            <p className="text-steel text-sm">
              Supporting non-oil sector growth through innovative services
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Vision2030;