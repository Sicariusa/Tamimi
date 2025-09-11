/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury color palette
        ink: '#0D0D0D',
        jet: '#141414',
        gold: '#C9A227',
        'gold-hover': '#B8911F',
        'gold-active': '#A6801C',
        ivory: '#F5F1E8',
        mist: '#F7F7F8',
        steel: '#5E646E',
        line: 'rgba(255,255,255,0.08)',
        
        // Surface variations
        surface: {
          primary: '#0D0D0D',
          secondary: '#141414',
          tertiary: '#1A1A1A',
          elevated: '#202020',
          glass: 'rgba(20, 20, 20, 0.8)',
        },
        
        // Text colors
        text: {
          primary: '#F5F1E8',
          secondary: '#B8B8B8',
          tertiary: '#5E646E',
          inverse: '#0D0D0D',
        }
      },
      
      fontFamily: {
        'heading': ['"IBM Plex Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
        'mono': ['"IBM Plex Mono"', '"SF Mono"', 'Monaco', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      
      boxShadow: {
        'luxury': '0 32px 64px -12px rgba(0, 0, 0, 0.4), 0 8px 16px -4px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 0 1px rgba(201, 162, 39, 0.1), 0 4px 16px rgba(201, 162, 39, 0.15)',
        'glow-lg': '0 0 0 1px rgba(201, 162, 39, 0.15), 0 8px 32px rgba(201, 162, 39, 0.25)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      maxWidth: {
        'content': '1200px',
        'content-lg': '1320px',
      },
      
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      }
    },
  },
  plugins: [],
};
