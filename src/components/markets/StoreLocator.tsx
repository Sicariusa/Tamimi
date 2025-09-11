import React from 'react';
import Section from '../ui/Section';

const StoreLocator: React.FC = () => {
  return (
    <Section background="default" padding="xl">
      <div className="text-center">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Store Locator
          <span className="block text-gold">Find Us Near You</span>
        </h2>
        <div className="glass backdrop-blur-xl rounded-2xl p-8 border border-line">
          <p className="text-steel">Store locator with Mapbox integration coming soon...</p>
        </div>
      </div>
    </Section>
  );
};

export default StoreLocator;