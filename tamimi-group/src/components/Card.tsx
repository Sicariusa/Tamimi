'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { createHoverAnimation } from '@/lib/animation';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: LucideIcon;
  image?: string;
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'featured' | 'minimal';
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  href,
  icon: Icon,
  image,
  className = '',
  children,
  variant = 'default',
  onClick,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      createHoverAnimation(cardRef.current, {
        scale: 1.02,
        y: -4,
        rotation: 0.5,
      });
    }
  }, []);

  const cardContent = (
    <div
      ref={cardRef}
      className={`
        group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer
        ${variant === 'featured' 
          ? 'bg-gradient-to-br from-brand-gold to-brand-goldSoft text-white shadow-gold' 
          : variant === 'minimal'
          ? 'bg-white/50 hover:bg-white border border-gray-100 shadow-soft hover:shadow-card'
          : 'bg-white shadow-soft hover:shadow-card border border-gray-50'
        }
        ${className}
      `}
      onClick={onClick}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className={`relative p-6 ${image ? 'text-white' : ''}`}>
        {/* Icon */}
        {Icon && (
          <div className={`
            w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300
            ${variant === 'featured' 
              ? 'bg-white/20 text-white' 
              : 'bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-white'
            }
          `}>
            <Icon className="w-6 h-6" />
          </div>
        )}

        {/* Title */}
        <h3 className={`
          font-semibold text-xl mb-3 transition-colors duration-300
          ${variant === 'featured' || image 
            ? 'text-white' 
            : 'text-brand-ink group-hover:text-brand-gold'
          }
        `}>
          {title}
        </h3>

        {/* Description */}
        <p className={`
          leading-relaxed mb-4
          ${variant === 'featured' || image 
            ? 'text-white/90' 
            : 'text-gray-600'
          }
        `}>
          {description}
        </p>

        {/* Children */}
        {children && (
          <div className="mb-4">
            {children}
          </div>
        )}

        {/* Arrow/CTA */}
        {(href || onClick) && (
          <div className="flex items-center justify-between">
            <div className={`
              flex items-center space-x-2 text-sm font-medium transition-all duration-300
              ${variant === 'featured' || image 
                ? 'text-white' 
                : 'text-brand-gold group-hover:text-brand-ink'
              }
            `}>
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}