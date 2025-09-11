'use client';

import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { animateTextReveal, animateReveal } from '@/lib/animation';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  overlay?: 'light' | 'dark' | 'none';
  centered?: boolean;
  showScrollIndicator?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const heightClasses = {
  sm: 'h-[50vh] min-h-[400px]',
  md: 'h-[60vh] min-h-[500px]',
  lg: 'h-[70vh] min-h-[600px]',
  xl: 'h-[80vh] min-h-[700px]',
  full: 'h-screen',
};

export default function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  height = 'lg',
  overlay = 'dark',
  centered = true,
  showScrollIndicator = false,
  children,
  className = '',
}: PageHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate title with character reveal
    if (titleRef.current) {
      animateTextReveal(titleRef.current, { delay: 0.2 });
    }

    // Animate subtitle and description
    if (subtitleRef.current) {
      animateReveal(subtitleRef.current, { delay: 0.6, y: 20 });
    }

    if (descriptionRef.current) {
      animateReveal(descriptionRef.current, { delay: 0.8, y: 20 });
    }

    if (contentRef.current) {
      animateReveal(contentRef.current, { delay: 1.0, y: 20 });
    }
  }, []);

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden ${className}`}>
      {/* Background Media */}
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {backgroundVideo && !backgroundImage && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay !== 'none' && (
        <div
          className={`absolute inset-0 ${
            overlay === 'dark'
              ? 'bg-gradient-to-b from-black/50 via-black/30 to-black/60'
              : 'bg-gradient-to-b from-white/50 via-white/30 to-white/60'
          }`}
        />
      )}

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 lg:px-8 h-full">
          <div
            className={`h-full flex flex-col ${
              centered ? 'justify-center items-center text-center' : 'justify-center'
            }`}
          >
            <div className={`max-w-4xl ${centered ? 'mx-auto' : ''}`}>
              {/* Subtitle */}
              {subtitle && (
                <p
                  ref={subtitleRef}
                  className={`text-lg md:text-xl font-medium mb-4 ${
                    overlay === 'dark' || backgroundVideo || backgroundImage
                      ? 'text-brand-goldSoft'
                      : 'text-brand-gold'
                  }`}
                >
                  {subtitle}
                </p>
              )}

              {/* Title */}
              <h1
                ref={titleRef}
                className={`font-bold text-hero leading-tight mb-6 ${
                  overlay === 'dark' || backgroundVideo || backgroundImage
                    ? 'text-white'
                    : 'text-brand-ink'
                }`}
              >
                {title}
              </h1>

              {/* Description */}
              {description && (
                <p
                  ref={descriptionRef}
                  className={`text-xl md:text-2xl leading-relaxed mb-8 ${
                    overlay === 'dark' || backgroundVideo || backgroundImage
                      ? 'text-white/90'
                      : 'text-gray-600'
                  }`}
                >
                  {description}
                </p>
              )}

              {/* Children (CTAs, etc.) */}
              {children && (
                <div ref={contentRef} className="reveal">
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                overlay === 'dark' || backgroundVideo || backgroundImage
                  ? 'border-white/50 text-white/70'
                  : 'border-brand-ink/50 text-brand-ink/70'
              }`}
            >
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}