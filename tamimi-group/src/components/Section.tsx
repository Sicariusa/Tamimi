'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { animateReveal } from '@/lib/animation';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'sand' | 'fog' | 'ink';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  animate?: boolean;
  id?: string;
}

const backgroundClasses = {
  white: 'bg-white',
  sand: 'bg-brand-sand',
  fog: 'bg-brand-fog',
  ink: 'bg-brand-ink text-white',
};

const paddingClasses = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24',
};

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-none',
};

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  maxWidth = 'xl',
  animate = true,
  id,
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (animate && sectionRef.current) {
      animateReveal('.reveal', { delay: 0.1 });
    }
  }, [animate]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className={`container mx-auto px-4 lg:px-8 ${maxWidthClasses[maxWidth]}`}>
        {children}
      </div>
    </section>
  );
}