import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getDivisionBySlug } from '../../content/divisions';
import DivisionHero from '../../components/divisions/DivisionHero';
import DivisionServices from '../../components/divisions/DivisionServices';
import DivisionStats from '../../components/divisions/DivisionStats';
import DivisionClients from '../../components/divisions/DivisionClients';
import DivisionCTA from '../../components/divisions/DivisionCTA';

const DivisionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/divisions" replace />;
  }

  const division = getDivisionBySlug(slug);

  if (!division) {
    return <Navigate to="/divisions" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <DivisionHero division={division} />
      <DivisionServices division={division} />
      <DivisionStats division={division} />
      <DivisionClients division={division} />
      <DivisionCTA division={division} />
    </motion.div>
  );
};

export default DivisionDetailPage;