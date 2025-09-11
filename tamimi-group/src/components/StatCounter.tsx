'use client';

import { useEffect, useRef } from 'react';
import { animateCounter } from '@/lib/animation';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function StatCounter({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 1.2,
  className = '',
}: StatCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (counterRef.current) {
      animateCounter(counterRef.current, value, {
        duration,
        suffix,
        prefix,
      });
    }
  }, [value, duration, suffix, prefix]);

  return (
    <div className={`text-center ${className}`}>
      <div className="font-bold text-4xl md:text-5xl text-brand-gold font-variant-numeric-tabular">
        <span ref={counterRef}>
          {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>
      <div className="text-brand-ink font-medium mt-2 text-lg">
        {label}
      </div>
    </div>
  );
}