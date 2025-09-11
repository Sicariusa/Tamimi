import React from 'react';
import { motion } from 'framer-motion';
import DivisionsHero from '../../components/divisions/DivisionsHero';
import DivisionsGrid from '../../components/divisions/DivisionsGrid';
import DivisionsStats from '../../components/divisions/DivisionsStats';

const DivisionsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <DivisionsHero />
      <DivisionsGrid />
      <DivisionsStats />
    </motion.div>
  );
};

export default DivisionsPage;