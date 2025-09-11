import React from 'react';
import Section from '../ui/Section';

const ContactHero: React.FC = () => {
  return (
    <Section background="default" padding="xl" className="pt-32">
      <div className="text-center">
        <h1 className="font-heading font-black text-5xl lg:text-7xl text-ivory mb-6">
          Get in Touch
          <span className="block text-gold">Let's Connect</span>
        </h1>
      </div>
    </Section>
  );
};

export default ContactHero;