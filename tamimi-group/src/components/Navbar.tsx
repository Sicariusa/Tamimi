'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
  },
  {
    name: 'Business Divisions',
    href: '/divisions',
    children: [
      { name: 'Overview', href: '/divisions' },
      { name: 'Catering Services', href: '/divisions/catering' },
      { name: 'Facility Management', href: '/divisions/facility-management' },
      { name: 'Board & Lodging', href: '/divisions/board-lodging' },
    ],
  },
  { name: 'Tamimi Markets', href: '/markets' },
  { name: 'CSR', href: '/csr' },
  { name: 'News & Investors', href: '/news' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-brand-ink">
                Tamimi Group
              </div>
              <div className="text-xs text-gray-500 -mt-1">
                Excellence Since 1945
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-brand-gold bg-brand-gold/10'
                      : 'text-brand-ink hover:text-brand-gold hover:bg-brand-gold/5'
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-card border border-gray-100 py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            isActive(child.href)
                              ? 'text-brand-gold bg-brand-gold/10'
                              : 'text-gray-700 hover:text-brand-gold hover:bg-brand-gold/5'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-brand-gold text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-ink hover:bg-brand-gold/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 rounded-b-2xl shadow-card overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-6 py-3 text-base font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-brand-gold bg-brand-gold/10'
                          : 'text-brand-ink hover:text-brand-gold hover:bg-brand-gold/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-6 py-2 text-sm transition-colors duration-200 ${
                              isActive(child.href)
                                ? 'text-brand-gold bg-brand-gold/10'
                                : 'text-gray-600 hover:text-brand-gold hover:bg-brand-gold/5'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-6 pt-4">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-brand-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-gold/90 transition-colors duration-200"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}