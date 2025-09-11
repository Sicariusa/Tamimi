import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { AnimationUtils } from '../utils/animations';
import Hero from '../components/home/Hero';
import ExecutiveMetrics from '../components/home/ExecutiveMetrics';
import PartnersMarquee from '../components/home/PartnersMarquee';
import DivisionsSnapshot from '../components/home/DivisionsSnapshot';
import GlobalPresence from '../components/home/GlobalPresence';
import LatestNews from '../components/home/LatestNews';
import CTAStrip from '../components/home/CTAStrip';

const HomePage: React.FC = () => {
  // Apply SEO for home page
  useSEO('home');

  useEffect(() => {
    // Initialize animations
    AnimationUtils.init();

    // Apply reduced motion settings if preferred
    AnimationUtils.applyReducedMotion();

    // Reveal sections on scroll
    AnimationUtils.revealElements('.reveal-section', {
      stagger: 0.2,
      duration: 0.8,
      y: 40
    });

    return () => {
      // Cleanup animations on unmount
      AnimationUtils.cleanup();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Hero />
      <div className="reveal-section">
        <ExecutiveMetrics />
      </div>
      <div className="reveal-section">
        <PartnersMarquee />
      </div>
      <div className="reveal-section">
        <DivisionsSnapshot />
      </div>
      <div className="reveal-section">
        <GlobalPresence />
      </div>
      <div className="reveal-section">
        <LatestNews />
      </div>
      <div className="reveal-section">
        <CTAStrip />
      </div>
    </motion.div>
  );
};

export default HomePage;