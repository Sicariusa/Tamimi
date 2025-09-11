import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import AboutHero from '../../components/about/AboutHero';
import Timeline from '../../components/about/Timeline';
import Values from '../../components/about/Values';
import Leadership from '../../components/about/Leadership';
import Vision2030 from '../../components/about/Vision2030';

const AboutPage: React.FC = () => {
  // Apply SEO for about page
  useSEO('about');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <AboutHero />
      <Timeline />
      <Values />
      <Leadership />
      <Vision2030 />
    </motion.div>
  );
};

export default AboutPage;