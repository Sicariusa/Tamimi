import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation utility class
export class AnimationUtils {
  private static isInitialized = false;

  static init() {
    if (this.isInitialized) return;
    
    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
      markers: false, // Set to true for debugging
    });

    // Refresh ScrollTrigger on window resize
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    this.isInitialized = true;
  }

  // Reveal animation for elements coming into view
  static revealElements(selector: string, options?: {
    delay?: number;
    duration?: number;
    stagger?: number;
    y?: number;
    scale?: number;
  }) {
    const defaults = {
      delay: 0,
      duration: 0.6,
      stagger: 0.1,
      y: 24,
      scale: 1,
    };
    
    const config = { ...defaults, ...options };

    gsap.fromTo(selector, 
      { 
        opacity: 0, 
        y: config.y, 
        scale: config.scale === 1 ? undefined : 0.95 
      },
      {
        opacity: 1,
        y: 0,
        scale: config.scale,
        duration: config.duration,
        delay: config.delay,
        stagger: config.stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // Parallax effect for background elements
  static parallaxElement(selector: string, speed: number = 0.5) {
    gsap.to(selector, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: selector,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // Counter animation
  static animateCounter(
    element: HTMLElement, 
    start: number = 0, 
    end: number, 
    duration: number = 1.2,
    suffix: string = ''
  ) {
    const counter = { value: start };
    
    gsap.to(counter, {
      value: end,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        const value = Math.floor(counter.value);
        const formattedValue = value >= 1000 ? 
          (value / 1000).toFixed(value >= 10000 ? 0 : 1) + 'K' : 
          value.toString();
        element.textContent = formattedValue + suffix;
      },
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Staggered fade in for lists/grids
  static staggerFadeIn(selector: string, options?: {
    stagger?: number;
    duration?: number;
    y?: number;
  }) {
    const defaults = {
      stagger: 0.1,
      duration: 0.6,
      y: 30,
    };
    
    const config = { ...defaults, ...options };

    gsap.fromTo(`${selector} > *`, 
      { opacity: 0, y: config.y },
      {
        opacity: 1,
        y: 0,
        duration: config.duration,
        stagger: config.stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // Pinned horizontal scroll section
  static createHorizontalScroll(
    container: string,
    sections: string,
    options?: {
      scrub?: boolean | number;
      snap?: boolean;
    }
  ) {
    const defaults = {
      scrub: 1,
      snap: false,
    };
    
    const config = { ...defaults, ...options };
    
    const sectionsElement = document.querySelector(sections);
    if (!sectionsElement) return;

    gsap.to(sections, {
      xPercent: -100 * (sectionsElement.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: config.scrub,
        snap: config.snap ? 1 / (sectionsElement.children.length - 1) : false,
        end: () => `+=${sectionsElement.scrollWidth - window.innerWidth}`
      }
    });
  }

  // Magnetic hover effect
  static magneticHover(selector: string, strength: number = 0.3) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
      const el = element as HTMLElement;
      
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(el, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });
  }

  // Morphing shapes animation
  static morphingShape(selector: string) {
    gsap.to(selector, {
      morphSVG: "M0,0 L100,0 L100,100 L0,100 Z",
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });
  }

  // Text reveal animation (word by word)
  static revealText(selector: string, options?: {
    duration?: number;
    stagger?: number;
    delay?: number;
  }) {
    const defaults = {
      duration: 0.8,
      stagger: 0.1,
      delay: 0,
    };
    
    const config = { ...defaults, ...options };
    
    // Split text into words and wrap each in a span
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
      const text = element.textContent || '';
      const words = text.split(' ');
      
      element.innerHTML = words
        .map(word => `<span class="word">${word}</span>`)
        .join(' ');
      
      gsap.fromTo(`${selector} .word`, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: config.duration,
          stagger: config.stagger,
          delay: config.delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }

  // Cleanup function
  static cleanup() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.globalTimeline.clear();
  }

  // Refresh ScrollTrigger (useful after dynamic content changes)
  static refresh() {
    ScrollTrigger.refresh();
  }

  // Check if reduced motion is preferred
  static respectsReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Apply reduced motion settings
  static applyReducedMotion() {
    if (this.respectsReducedMotion()) {
      gsap.globalTimeline.timeScale(100); // Speed up animations
      ScrollTrigger.batch("*", {
        onEnter: (elements) => gsap.set(elements, { opacity: 1 }),
        onLeave: (elements) => gsap.set(elements, { opacity: 1 }),
      });
    }
  }
}

// Framer Motion variants for common animations
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Stagger container variants
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

export default AnimationUtils;