import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getFeaturedPartners } from '../../content/partners';
import Section from '../ui/Section';

const PartnersMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const featuredPartners = getFeaturedPartners();
  
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...featuredPartners, ...featuredPartners];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let startTime: number;
    const duration = 30000; // 30 seconds for full loop

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      
      // Move from 0% to -50% (since we have duplicated content)
      const translateX = -progress * 50;
      marquee.style.transform = `translateX(${translateX}%)`;
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseLeave = () => {
      startTime = performance.now();
      animationId = requestAnimationFrame(animate);
    };

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Section background="default" padding="lg" id="partners">
      <div className="text-center mb-12">
        <motion.h2 
          className="font-heading font-bold text-3xl lg:text-4xl text-ivory mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p 
          className="text-lg text-steel max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Partnering with the Kingdom's most prestigious organizations and global enterprises
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Content */}
        <motion.div
          ref={marqueeRef}
          className="flex items-center space-x-16 py-8"
          style={{ width: '200%' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 group cursor-pointer"
              title={partner.name}
            >
              <div className="w-32 h-20 bg-surface-secondary rounded-xl border border-line flex items-center justify-center p-4 group-hover:border-gold/30 group-hover:bg-surface-elevated transition-all duration-300">
                {/* Placeholder for logo - in real implementation, use actual logos */}
                <div className="text-ivory/60 group-hover:text-gold transition-colors duration-300 text-center">
                  <div className="font-semibold text-sm leading-tight">
                    {partner.name.split(' ').map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Partnership Stats */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center space-x-8 glass backdrop-blur-xl rounded-2xl px-8 py-6 border border-line">
          <div className="text-center">
            <div className="text-2xl font-black text-gold tabular-nums">100+</div>
            <div className="text-steel text-sm">Active Partners</div>
          </div>
          <div className="w-px h-8 bg-line" />
          <div className="text-center">
            <div className="text-2xl font-black text-gold tabular-nums">25+</div>
            <div className="text-steel text-sm">Industries</div>
          </div>
          <div className="w-px h-8 bg-line" />
          <div className="text-center">
            <div className="text-2xl font-black text-gold tabular-nums">80+</div>
            <div className="text-steel text-sm">Years Experience</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default PartnersMarquee;