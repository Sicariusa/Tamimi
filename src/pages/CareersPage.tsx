import React from 'react';
import { motion } from 'framer-motion';
import CareersHero from '../components/careers/CareersHero';
import WhyTamimi from '../components/careers/WhyTamimi';
import JobBoard from '../components/careers/JobBoard';
import CareersTestimonials from '../components/careers/CareersTestimonials';
import ApplyCTA from '../components/careers/ApplyCTA';

const CareersPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <CareersHero />
      <WhyTamimi />
      <JobBoard />
      <CareersTestimonials />
      <ApplyCTA />
    </motion.div>
  );
};

export default CareersPage;