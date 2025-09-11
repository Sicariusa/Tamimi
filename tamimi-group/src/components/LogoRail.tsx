'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Partner {
  name: string;
  sector: string;
  logo: string;
}

interface LogoRailProps {
  partners: Partner[];
  speed?: number;
  className?: string;
}

export default function LogoRail({ 
  partners, 
  speed = 30,
  className = '' 
}: LogoRailProps) {
  const [isPaused, setIsPaused] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updateSpeed = () => {
      rail.style.animationDuration = isPaused ? 'paused' : `${speed}s`;
      rail.style.animationPlayState = isPaused ? 'paused' : 'running';
    };

    updateSpeed();
  }, [isPaused, speed]);

  return (
    <div 
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={railRef}
        className="flex space-x-12 animate-marquee"
        style={{
          width: 'fit-content',
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 group"
          >
            <div className="w-32 h-16 bg-white rounded-lg shadow-soft flex items-center justify-center p-4 group-hover:shadow-card transition-shadow duration-300">
              {/* Placeholder for logo - in production, use actual logos */}
              <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600 text-center">
                  {partner.name}
                </span>
              </div>
              
              {/* If you have actual logos, uncomment and use this:
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
              */}
            </div>
            
            {/* Tooltip on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 text-center">
              <div className="text-sm font-medium text-brand-ink">{partner.name}</div>
              <div className="text-xs text-gray-500">{partner.sector}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}