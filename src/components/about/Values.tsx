import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Shield, Heart } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Values: React.FC = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, delivering exceptional quality and service.',
      icon: Award,
      color: '#C9A227'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to drive progress and efficiency.',
      icon: Lightbulb,
      color: '#2563EB'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our relationships.',
      icon: Shield,
      color: '#059669'
    },
    {
      title: 'Community',
      description: 'We are committed to contributing to the development and prosperity of our communities.',
      icon: Heart,
      color: '#DC2626'
    }
  ];

  return (
    <Section background="default" padding="xl" id="values">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Our Core Values
          <span className="block text-gold">Guiding Our Success</span>
        </h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
          These fundamental principles shape our culture, guide our decisions, 
          and define our commitment to stakeholders and communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              title={value.title}
              description={value.description}
              icon={value.icon}
              iconColor={value.color}
              variant="luxury"
              className="h-full text-center"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Values;