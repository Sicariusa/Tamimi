import React from 'react';
import { motion } from 'framer-motion';
import CSRHero from '../../components/csr/CSRHero';
import CSRStoryPanels from '../../components/csr/CSRStoryPanels';
import CSRImpactCounters from '../../components/csr/CSRImpactCounters';
import CSRHighlights from '../../components/csr/CSRHighlights';

const CSRPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <CSRHero />
      <CSRStoryPanels />
      <CSRImpactCounters />
      <CSRHighlights />
    </motion.div>
  );
};

export default CSRPage;