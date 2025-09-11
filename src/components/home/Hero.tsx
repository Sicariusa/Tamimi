import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';
import { AnimationUtils } from '../../utils/animations';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1.08, 1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }

    // Initialize animations
    AnimationUtils.init();

    // Check for reduced motion preference
    if (AnimationUtils.respectsReducedMotion()) {
      // Show all elements immediately for reduced motion
      gsap.set(['.hero-headline', '.hero-subline', '.hero-cta'], { opacity: 1, y: 0 });
      return;
    }

    // Enhanced GSAP animations for text reveal
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Headline animation with luxury easing
    tl.fromTo('.hero-headline', 
      { opacity: 0, y: 60, rotationX: 15 }, 
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 1.2, 
        ease: "power3.out", 
        stagger: 0.15 
      }
    )
    // Subline with subtle slide up
    .fromTo('.hero-subline', 
      { opacity: 0, y: 40, scale: 0.95 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1, 
        ease: "power2.out" 
      }, 
      "-=0.6"
    )
    // CTAs with spring effect
    .fromTo('.hero-cta', 
      { opacity: 0, y: 30, scale: 0.9 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        ease: "back.out(1.7)", 
        stagger: 0.1 
      }, 
      "-=0.4"
    );

    // Add floating animation to Vision 2030 badge
    gsap.to('.vision-badge', {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale, y }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/media/images/hero-poster.jpg"
        >
          <source src="/media/videos/corporate-hero.mp4" type="video/mp4" />
          <source src="/media/videos/corporate-hero.webm" type="video/webm" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/60 via-ink/40 to-ink/70" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,162,39,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-luxury"
        style={{ opacity }}
      >
        <div className="max-w-5xl">
          {/* Headline */}
          <div className="mb-8">
            <motion.h1 
              className="hero-headline font-heading font-black text-6xl lg:text-8xl leading-none text-ivory mb-4"
              initial={{ opacity: 0 }}
            >
              <span className="block">Tamimi</span>
              <span className="block text-gradient-gold">Group</span>
            </motion.h1>
            
            <motion.div 
              className="hero-headline text-2xl lg:text-3xl font-light text-steel tracking-wide"
              initial={{ opacity: 0 }}
            >
              Building the Future of Saudi Arabia
            </motion.div>
          </div>

          {/* Subline */}
          <motion.p 
            className="hero-subline text-xl lg:text-2xl text-ivory/90 leading-relaxed mb-12 max-w-3xl"
            initial={{ opacity: 0 }}
          >
            Since 1940, we've been at the heart of the Kingdom's transformation. 
            With 30+ companies, 21,000+ employees, and 80+ years of excellence, 
            we continue to shape Saudi Arabia's future across diverse sectors.
          </motion.p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <motion.div className="hero-cta" initial={{ opacity: 0 }}>
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                href="/divisions"
                className="group"
              >
                Explore Our Companies
              </Button>
            </motion.div>
            
            <motion.div className="hero-cta" initial={{ opacity: 0 }}>
              <Button
                variant="outline"
                size="lg"
                icon={Play}
                onClick={() => {
                  // Video modal functionality would go here
                  console.log('Open video modal');
                }}
              >
                Watch Our Story
              </Button>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-gold mb-2 tabular-nums group-hover:scale-110 transition-transform duration-300">
                30+
              </div>
              <div className="text-ivory font-semibold mb-1">Companies</div>
              <div className="text-steel text-sm">Diverse Portfolio</div>
            </div>
            
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-gold mb-2 tabular-nums group-hover:scale-110 transition-transform duration-300">
                21K+
              </div>
              <div className="text-ivory font-semibold mb-1">Employees</div>
              <div className="text-steel text-sm">Dedicated Workforce</div>
            </div>
            
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-gold mb-2 tabular-nums group-hover:scale-110 transition-transform duration-300">
                80+
              </div>
              <div className="text-ivory font-semibold mb-1">Years</div>
              <div className="text-steel text-sm">Of Excellence</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gold rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Vision 2030 Badge */}
      <motion.div 
        className="absolute top-24 right-8 z-10 hidden lg:block vision-badge"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="glass backdrop-blur-xl rounded-2xl p-6 border border-line">
          <div className="text-gold font-bold text-lg mb-2">Vision 2030</div>
          <div className="text-ivory text-sm">Strategic Partner</div>
          <div className="w-full h-1 bg-surface-tertiary rounded-full mt-3">
            <motion.div 
              className="h-full bg-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 2, delay: 2 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;