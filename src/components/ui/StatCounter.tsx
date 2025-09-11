import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
  value: number;
  label: string;
  description?: string;
  suffix?: string;
  prefix?: string;
  icon?: LucideIcon;
  iconColor?: string;
  duration?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  description,
  suffix = '',
  prefix = '',
  icon: Icon,
  iconColor = '#C9A227',
  duration = 1.2,
  className = '',
  size = 'md'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  const sizeClasses = {
    sm: {
      container: 'text-center p-4',
      value: 'text-2xl',
      label: 'text-sm',
      description: 'text-xs',
      icon: 20
    },
    md: {
      container: 'text-center p-6',
      value: 'text-4xl',
      label: 'text-base',
      description: 'text-sm',
      icon: 24
    },
    lg: {
      container: 'text-center p-8',
      value: 'text-6xl',
      label: 'text-lg',
      description: 'text-base',
      icon: 32
    }
  };

  useEffect(() => {
    if (!valueRef.current || !isInView) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const counter = { value: 0 };
    
    const tween = gsap.to(counter, {
      value,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(Math.floor(counter.value));
      },
      scrollTrigger: {
        trigger: valueRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      }
    });

    return () => {
      tween.kill();
    };
  }, [isInView, value, duration]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      className={`${sizeClasses[size].container} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        delay: Math.random() * 0.2 // Slight random delay for stagger effect
      }}
    >
      {/* Icon */}
      {Icon && (
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
        >
          <div className="w-16 h-16 rounded-2xl bg-surface-elevated flex items-center justify-center">
            <Icon size={sizeClasses[size].icon} style={{ color: iconColor }} />
          </div>
        </motion.div>
      )}

      {/* Counter Value */}
      <div 
        ref={valueRef}
        className={`font-heading font-black text-gold ${sizeClasses[size].value} mb-2 tabular-nums`}
      >
        {prefix}
        {isInView ? (
          value > 100 ? formatNumber(displayValue) : displayValue
        ) : 0}
        {suffix}
      </div>

      {/* Label */}
      <div className={`font-semibold text-ivory ${sizeClasses[size].label} mb-2`}>
        {label}
      </div>

      {/* Description */}
      {description && (
        <div className={`text-steel ${sizeClasses[size].description} leading-relaxed`}>
          {description}
        </div>
      )}

      {/* Animated underline */}
      <motion.div
        className="w-12 h-0.5 bg-gold rounded-full mx-auto mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }}
      />
    </motion.div>
  );
};

export default StatCounter;