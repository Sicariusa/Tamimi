import React from 'react';
import Section from '../ui/Section';

const MarketsInfoGraphics: React.FC = () => {
  return (
    <Section background="secondary" padding="xl">
      <div className="text-center">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Our Impact
          <span className="block text-gold">In Communities</span>
        </h2>
        <div className="glass backdrop-blur-xl rounded-2xl p-8 border border-line">
          <p className="text-steel">Interactive infographics coming soon...</p>
        </div>
      </div>
    </Section>
  );
};

export default MarketsInfoGraphics;