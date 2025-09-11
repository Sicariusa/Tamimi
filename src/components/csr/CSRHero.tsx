import React from 'react';
import Section from '../ui/Section';

const CSRHero: React.FC = () => {
  return (
    <Section background="default" padding="xl" className="pt-32">
      <div className="text-center">
        <h1 className="font-heading font-black text-5xl lg:text-7xl text-ivory mb-6">
          Corporate Social
          <span className="block text-gold">Responsibility</span>
        </h1>
        <p className="text-xl text-steel">Building stronger communities for a better tomorrow</p>
      </div>
    </Section>
  );
};

export default CSRHero;