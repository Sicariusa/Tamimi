import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'secondary' | 'tertiary' | 'mist';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'default',
  padding = 'lg',
  id
}) => {
  const backgroundClasses = {
    default: 'bg-ink',
    secondary: 'bg-jet',
    tertiary: 'bg-surface-tertiary',
    mist: 'bg-mist text-ink'
  };

  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16', 
    lg: 'py-20',
    xl: 'py-24'
  };

  return (
    <motion.section
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-luxury">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;