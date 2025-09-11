import React from 'react';
import Section from '../ui/Section';

const JobBoard: React.FC = () => {
  return (
    <Section background="default" padding="xl">
      <div className="text-center">
        <h2 className="font-heading font-bold text-4xl text-ivory mb-6">Open Positions</h2>
        <p className="text-steel">Job board coming soon...</p>
      </div>
    </Section>
  );
};

export default JobBoard;