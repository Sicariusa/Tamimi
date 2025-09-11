import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const AboutHero: React.FC = () => {
  return (
    <Section background="default" padding="xl" className="pt-32">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-heading font-black text-5xl lg:text-7xl text-ivory mb-6">
          Our Story
          <span className="block text-gold">Since 1940</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-steel leading-relaxed mb-8">
          From humble beginnings to becoming one of Saudi Arabia's most trusted business groups, 
          our journey spans over eight decades of innovation, growth, and unwavering commitment 
          to excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Heritage Image Placeholder */}
          <div className="aspect-video bg-surface-secondary rounded-2xl border border-line overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-steel/20 to-surface-tertiary flex items-center justify-center">
              <div className="text-center text-steel">
                <div className="text-4xl mb-2">🏛️</div>
                <div className="text-sm">Heritage Building</div>
              </div>
            </div>
          </div>
          
          {/* Modern HQ Image Placeholder */}
          <div className="aspect-video bg-surface-secondary rounded-2xl border border-line overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gold/20 to-surface-tertiary flex items-center justify-center">
              <div className="text-center text-gold">
                <div className="text-4xl mb-2">🏢</div>
                <div className="text-sm">Modern Headquarters</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default AboutHero;