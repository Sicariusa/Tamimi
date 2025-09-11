import React from 'react';
import { motion } from 'framer-motion';
import NewsHero from '../../components/news/NewsHero';
import NewsFilters from '../../components/news/NewsFilters';
import NewsGrid from '../../components/news/NewsGrid';
import InvestorSection from '../../components/news/InvestorSection';

const NewsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <NewsHero />
      <div className="container-luxury py-16">
        <NewsFilters />
        <NewsGrid />
      </div>
      <InvestorSection />
    </motion.div>
  );
};

export default NewsPage;