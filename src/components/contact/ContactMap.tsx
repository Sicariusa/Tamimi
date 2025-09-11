import React from 'react';
import Section from '../ui/Section';

const ContactMap: React.FC = () => {
  return (
    <Section background="secondary" padding="xl">
      <div className="text-center">
        <h2 className="font-heading font-bold text-4xl text-ivory mb-6">Our Locations</h2>
        <p className="text-steel">Interactive map coming soon...</p>
      </div>
    </Section>
  );
};

export default ContactMap;