import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationUtils } from '../utils/animations';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Custom hook for GSAP animations
export const useGSAP = () => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Initialize animations
    AnimationUtils.init();
    
    // Create GSAP context for cleanup
    contextRef.current = gsap.context(() => {});

    return () => {
      // Cleanup on unmount
      if (contextRef.current) {
        contextRef.current.revert();
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const createTimeline = useCallback((options?: gsap.TimelineVars) => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    timelineRef.current = gsap.timeline(options);
    return timelineRef.current;
  }, []);

  const animate = useCallback((target: gsap.TweenTarget, vars: gsap.TweenVars) => {
    return gsap.to(target, vars);
  }, []);

  const animateFrom = useCallback((target: gsap.TweenTarget, vars: gsap.TweenVars) => {
    return gsap.from(target, vars);
  }, []);

  const animateFromTo = useCallback((
    target: gsap.TweenTarget, 
    fromVars: gsap.TweenVars, 
    toVars: gsap.TweenVars
  ) => {
    return gsap.fromTo(target, fromVars, toVars);
  }, []);

  const set = useCallback((target: gsap.TweenTarget, vars: gsap.TweenVars) => {
    return gsap.set(target, vars);
  }, []);

  const killTweensOf = useCallback((target: gsap.TweenTarget) => {
    gsap.killTweensOf(target);
  }, []);

  return {
    timeline: timelineRef.current,
    createTimeline,
    animate,
    animateFrom,
    animateFromTo,
    set,
    killTweensOf,
    ScrollTrigger,
    context: contextRef.current,
  };
};

// Hook for scroll-triggered animations
export const useScrollTrigger = (
  trigger: string | Element,
  animation: () => gsap.core.Timeline | gsap.core.Tween,
  options?: ScrollTrigger.Vars
) => {
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);

  useEffect(() => {
    const defaultOptions: ScrollTrigger.Vars = {
      trigger,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...options,
    };

    // Create the animation
    animationRef.current = animation();

    // Create ScrollTrigger
    ScrollTrigger.create({
      ...defaultOptions,
      animation: animationRef.current,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === trigger) {
          trigger.kill();
        }
      });
    };
  }, [trigger, animation, options]);

  return animationRef.current;
};

// Hook for reveal animations on scroll
export const useRevealOnScroll = (
  selector: string,
  options?: {
    delay?: number;
    duration?: number;
    stagger?: number;
    y?: number;
  }
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const defaults = {
      delay: 0,
      duration: 0.6,
      stagger: 0.1,
      y: 24,
    };

    const config = { ...defaults, ...options };

    gsap.fromTo(elements,
      { opacity: 0, y: config.y },
      {
        opacity: 1,
        y: 0,
        duration: config.duration,
        delay: config.delay,
        stagger: config.stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elements[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      gsap.killTweensOf(elements);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === elements[0]) {
          trigger.kill();
        }
      });
    };
  }, [selector, options]);
};

// Hook for counter animations
export const useCounterAnimation = (
  ref: React.RefObject<HTMLElement>,
  endValue: number,
  options?: {
    startValue?: number;
    duration?: number;
    suffix?: string;
    formatter?: (value: number) => string;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;

    const defaults = {
      startValue: 0,
      duration: 1.2,
      suffix: '',
      formatter: (value: number) => {
        if (value >= 1000000) {
          return (value / 1000000).toFixed(1) + 'M';
        }
        if (value >= 1000) {
          return (value / 1000).toFixed(1) + 'K';
        }
        return Math.floor(value).toString();
      },
    };

    const config = { ...defaults, ...options };
    const element = ref.current;
    const counter = { value: config.startValue };

    const tween = gsap.to(counter, {
      value: endValue,
      duration: config.duration,
      ease: 'power2.out',
      onUpdate: () => {
        const formattedValue = config.formatter(counter.value);
        element.textContent = formattedValue + config.suffix;
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, endValue, options]);
};

// Hook for parallax effects
export const useParallax = (
  ref: React.RefObject<HTMLElement>,
  speed: number = 0.5
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const tween = gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, speed]);
};

// Hook for magnetic hover effects
export const useMagneticHover = (
  ref: React.RefObject<HTMLElement>,
  strength: number = 0.3
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, [ref, strength]);
};

export default useGSAP;