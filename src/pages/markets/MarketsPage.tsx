import React from 'react';
import { motion } from 'framer-motion';
import MarketsHero from '../../components/markets/MarketsHero';
import MarketsStats from '../../components/markets/MarketsStats';
import StoreLocator from '../../components/markets/StoreLocator';
import MarketsInfoGraphics from '../../components/markets/MarketsInfoGraphics';

const MarketsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <MarketsHero />
      <MarketsStats />
      <StoreLocator />
      <MarketsInfoGraphics />
    </motion.div>
  );
};

export default MarketsPage;