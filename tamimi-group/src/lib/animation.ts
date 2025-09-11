import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation configurations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    counter: 1.2,
  },
  ease: {
    power2: 'power2.out',
    expo: 'expo.out',
    back: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
  },
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
  },
};

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Reveal animation for elements
export const animateReveal = (
  elements: string | Element | Element[],
  options: {
    delay?: number;
    stagger?: number;
    y?: number;
    duration?: number;
    ease?: string;
  } = {}
) => {
  if (prefersReducedMotion()) return;

  const {
    delay = 0,
    stagger = ANIMATION_CONFIG.stagger.normal,
    y = 24,
    duration = ANIMATION_CONFIG.duration.normal,
    ease = ANIMATION_CONFIG.ease.power2,
  } = options;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      delay,
      stagger,
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Counter animation
export const animateCounter = (
  element: Element,
  target: number,
  options: {
    duration?: number;
    suffix?: string;
    prefix?: string;
    separator?: string;
  } = {}
) => {
  if (prefersReducedMotion()) {
    element.textContent = `${options.prefix || ''}${target.toLocaleString()}${options.suffix || ''}`;
    return;
  }

  const {
    duration = ANIMATION_CONFIG.duration.counter,
    suffix = '',
    prefix = '',
    separator = ',',
  } = options;

  const obj = { value: 0 };
  
  return gsap.to(obj, {
    value: target,
    duration,
    ease: ANIMATION_CONFIG.ease.expo,
    onUpdate: () => {
      const value = Math.floor(obj.value);
      const formatted = value.toLocaleString();
      element.textContent = `${prefix}${formatted}${suffix}`;
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
};

// Parallax effect
export const animateParallax = (
  element: string | Element,
  options: {
    yPercent?: number;
    scale?: number;
    scrub?: boolean | number;
  } = {}
) => {
  if (prefersReducedMotion()) return;

  const { yPercent = -50, scale, scrub = true } = options;

  const animation: any = {
    yPercent,
    ease: 'none',
  };

  if (scale) {
    animation.scale = scale;
  }

  return gsap.to(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub,
    },
  });
};

// Stagger animation for cards/items
export const animateStagger = (
  elements: string | Element[],
  options: {
    delay?: number;
    stagger?: number;
    y?: number;
    scale?: number;
    rotation?: number;
    duration?: number;
  } = {}
) => {
  if (prefersReducedMotion()) return;

  const {
    delay = 0,
    stagger = ANIMATION_CONFIG.stagger.normal,
    y = 20,
    scale = 0.95,
    rotation = 0,
    duration = ANIMATION_CONFIG.duration.normal,
  } = options;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y,
      scale,
      rotation,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration,
      ease: ANIMATION_CONFIG.ease.power2,
      delay,
      stagger,
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Timeline pinning animation
export const createPinnedTimeline = (
  container: string | Element,
  panels: string | Element[],
  options: {
    snap?: boolean;
    scrub?: boolean | number;
  } = {}
) => {
  if (prefersReducedMotion()) return;

  const { snap = true, scrub = 1 } = options;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: () => `+=${(panels as Element[]).length * 100}%`,
      scrub,
      pin: true,
      snap: snap ? 1 / ((panels as Element[]).length - 1) : undefined,
    },
  });

  (panels as Element[]).forEach((panel, index) => {
    if (index === 0) return;
    timeline.to(panels, {
      xPercent: -100 * index,
      ease: 'none',
    });
  });

  return timeline;
};

// Hover animations
export const createHoverAnimation = (
  element: Element,
  options: {
    scale?: number;
    y?: number;
    rotation?: number;
    duration?: number;
  } = {}
) => {
  if (prefersReducedMotion()) return;

  const {
    scale = 1.05,
    y = -2,
    rotation = 1,
    duration = ANIMATION_CONFIG.duration.fast,
  } = options;

  const hoverIn = gsap.to(element, {
    scale,
    y,
    rotation,
    duration,
    ease: ANIMATION_CONFIG.ease.power2,
    paused: true,
  });

  const hoverOut = gsap.to(element, {
    scale: 1,
    y: 0,
    rotation: 0,
    duration,
    ease: ANIMATION_CONFIG.ease.power2,
    paused: true,
  });

  element.addEventListener('mouseenter', () => hoverIn.play());
  element.addEventListener('mouseleave', () => hoverOut.play());

  return { hoverIn, hoverOut };
};

// Text reveal animation
export const animateTextReveal = (
  element: Element,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
  } = {}
) => {
  if (prefersReducedMotion()) return;

  const {
    delay = 0,
    duration = ANIMATION_CONFIG.duration.normal,
    stagger = 0.02,
  } = options;

  // Split text into spans for each character
  const text = element.textContent || '';
  const chars = text.split('').map((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    return span;
  });

  element.innerHTML = '';
  chars.forEach((char) => element.appendChild(char));

  return gsap.fromTo(
    chars,
    {
      opacity: 0,
      y: 20,
      rotationX: -90,
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration,
      ease: ANIMATION_CONFIG.ease.back,
      delay,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Cleanup function
export const cleanupAnimations = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.globalTimeline.clear();
  }
};