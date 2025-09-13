import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-surface-primary text-text-primary">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 bg-gold text-ink px-4 py-2 rounded font-semibold z-50"
      >
        Skip to main content
      </a>
      
      <ScrollToTop />
      <Navbar />
      
      <main id="main-content" role="main" className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;