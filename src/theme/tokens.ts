// Luxury Design System Tokens for Tamimi Group
// Executive, multinational-grade visual language

export const colors = {
  // Primary Palette - Executive Dark Theme
  ink: '#0D0D0D',      // primary background
  jet: '#141414',      // surfaces, cards
  gold: '#C9A227',     // brand accent, CTAs
  ivory: '#F5F1E8',    // text alt, section breaks
  mist: '#F7F7F8',     // light backgrounds
  steel: '#5E646E',    // secondary text
  line: 'rgba(255,255,255,0.08)', // hairline borders
  
  // Semantic Colors
  text: {
    primary: '#F5F1E8',
    secondary: '#B8B8B8',
    tertiary: '#5E646E',
    inverse: '#0D0D0D',
  },
  
  // Interactive States
  interactive: {
    default: '#C9A227',
    hover: '#B8911F',
    active: '#A6801C',
    disabled: '#3A3A3A',
  },
  
  // Status Colors
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  
  // Surface Variations
  surface: {
    primary: '#0D0D0D',
    secondary: '#141414',
    tertiary: '#1A1A1A',
    elevated: '#202020',
    glass: 'rgba(20, 20, 20, 0.8)',
  }
} as const;

export const typography = {
  // Font Families
  fonts: {
    heading: '"IBM Plex Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    mono: '"IBM Plex Mono", "SF Mono", Monaco, monospace',
  },
  
  // Font Weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
  },
  
  // Font Sizes (rem-based for scalability)
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem',    // 96px
  },
  
  // Line Heights
  leading: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter Spacing
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export const spacing = {
  // Base spacing scale (rem-based)
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

export const shadows = {
  // Luxury shadow system - soft, large-blur shadows
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  
  // Luxury-specific shadows
  luxury: '0 32px 64px -12px rgba(0, 0, 0, 0.4), 0 8px 16px -4px rgba(0, 0, 0, 0.1)',
  glow: '0 0 0 1px rgba(201, 162, 39, 0.1), 0 4px 16px rgba(201, 162, 39, 0.15)',
  'glow-lg': '0 0 0 1px rgba(201, 162, 39, 0.15), 0 8px 32px rgba(201, 162, 39, 0.25)',
} as const;

export const motion = {
  // Luxury easing curves
  ease: [0.16, 1, 0.3, 1] as const,        // Primary luxury ease
  easeInOut: [0.4, 0, 0.2, 1] as const,    // Standard ease-in-out
  easeOut: [0, 0, 0.2, 1] as const,        // Ease out
  easeIn: [0.4, 0, 1, 1] as const,         // Ease in
  spring: {
    type: 'spring',
    damping: 25,
    stiffness: 120,
  },
  
  // Duration scales
  duration: {
    fast: 0.2,
    base: 0.3,
    medium: 0.5,
    slow: 0.8,
    slower: 1.2,
  },
  
  // Stagger timing
  stagger: 0.06,
  
  // Reduced motion preferences
  reducedMotion: {
    duration: 0.01,
    ease: 'linear' as const,
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  
  // Content max-widths
  content: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1320px',
  },
} as const;

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Animation presets for common interactions
export const animations = {
  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
    transition: { duration: motion.duration.medium, ease: motion.ease },
  },
  
  // Scroll reveals
  reveal: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: motion.duration.base, ease: motion.ease },
  },
  
  // Card hover effects
  cardHover: {
    rest: { 
      scale: 1, 
      y: 0, 
      rotateX: 0, 
      rotateY: 0,
      boxShadow: shadows.lg,
    },
    hover: { 
      scale: 1.02, 
      y: -6, 
      rotateX: 2, 
      rotateY: 1,
      boxShadow: shadows.luxury,
    },
    transition: { duration: motion.duration.base, ease: motion.ease },
  },
  
  // Button interactions
  buttonTap: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: motion.duration.fast, ease: motion.ease },
  },
  
  // Counter animations
  counter: {
    duration: 1.2,
    ease: 'easeOutExpo' as const,
  },
} as const;

// Media queries for responsive design
export const media = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
  
  // Reduced motion preference
  reducedMotion: '(prefers-reduced-motion: reduce)',
  
  // Dark mode (for future expansion)
  dark: '(prefers-color-scheme: dark)',
} as const;

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  motion,
  breakpoints,
  zIndex,
  animations,
  media,
};