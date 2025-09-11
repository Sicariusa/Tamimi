import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  iconColor?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'luxury' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  iconColor = '#C9A227',
  href,
  onClick,
  className = '',
  variant = 'default',
  size = 'md',
  children
}) => {
  const variantClasses = {
    default: 'bg-jet border border-line hover:border-gold/30',
    luxury: 'luxury-card',
    glass: 'glass'
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const Component = href ? motion.a : motion.div;
  const componentProps = href 
    ? { href, className: 'block' }
    : onClick 
    ? { onClick, className: 'cursor-pointer' }
    : {};

  return (
    <Component
      className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-2xl transition-all duration-300 group ${className}`}
      whileHover={{ 
        y: -6,
        rotateX: 2,
        rotateY: 1,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      {...componentProps}
    >
      {/* Icon */}
      {Icon && (
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} style={{ color: iconColor }} />
          </div>
        </div>
      )}

      {/* Content */}
      <div>
        <h3 className="font-heading font-bold text-ivory text-xl mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-steel leading-relaxed mb-4">
          {description}
        </p>

        {children}

        {/* Hover Arrow */}
        {(href || onClick) && (
          <div className="flex items-center text-gold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
            <span className="text-sm font-medium mr-2">Learn more</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M8 3l5 5-5 5M13 8H3" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </Component>
  );
};

export default Card;