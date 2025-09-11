import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      year: '1940s',
      title: 'Foundation',
      description: 'Tamimi Group established, beginning our journey of service and excellence.',
      color: '#C9A227'
    },
    {
      year: '1960s',
      title: 'Expansion',
      description: 'Diversified into catering services and facility management.',
      color: '#2563EB'
    },
    {
      year: '1980s',
      title: 'Growth',
      description: 'Expanded operations across the Kingdom with multiple business divisions.',
      color: '#059669'
    },
    {
      year: '2000s',
      title: 'Modernization',
      description: 'Embraced technology and modern business practices.',
      color: '#DC2626'
    },
    {
      year: 'Today',
      title: 'Innovation',
      description: 'Leading the way in Vision 2030 initiatives and digital transformation.',
      color: '#7C3AED'
    }
  ];

  return (
    <Section background="secondary" padding="xl" id="timeline">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Our Journey
          <span className="block text-gold">Through the Decades</span>
        </h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
          Eight decades of continuous growth, adaptation, and excellence in serving the Kingdom.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-line" />
        
        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="luxury-card p-6">
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-3"
                    style={{ backgroundColor: `${event.color}20`, color: event.color }}
                  >
                    {event.year}
                  </div>
                  <h3 className="font-heading font-bold text-ivory text-xl mb-3">
                    {event.title}
                  </h3>
                  <p className="text-steel leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div className="relative z-10">
                <div 
                  className="w-6 h-6 rounded-full border-4 border-ink"
                  style={{ backgroundColor: event.color }}
                />
              </div>
              
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;