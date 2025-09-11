import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Vision & Mission', href: '/about#vision' },
        { name: 'History', href: '/about#history' },
      ]
    },
    {
      title: 'Business',
      links: [
        { name: 'All Divisions', href: '/divisions' },
        { name: 'Catering Services', href: '/divisions/catering-services' },
        { name: 'Facility Management', href: '/divisions/facility-management' },
        { name: 'Tamimi Markets', href: '/markets' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'News & Updates', href: '/news' },
        { name: 'Investor Relations', href: '/news#investors' },
        { name: 'CSR Initiatives', href: '/csr' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Office Locations', href: '/contact' },
        { name: 'Get in Touch', href: '/contact#form' },
        { name: 'Partnership Opportunities', href: '/contact#partnerships' },
        { name: 'Media Inquiries', href: '/contact#media' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/tamimi-group' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/tamimigroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/c/tamimigroup' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <footer className="bg-jet border-t border-line">
      <div className="container-luxury">
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-6 gap-12 mb-16">
            {/* Company Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <Link to="/" className="inline-block mb-6">
                <img
                  src="/TamimiGroup.png"
                  alt="Tamimi Group"
                  className="h-16 w-auto"
                />
              </Link>
              
              <p className="text-steel text-lg leading-relaxed mb-8">
                Since 1940, Tamimi Group has been a cornerstone of Saudi Arabia's growth, 
                operating 30+ companies with over 21,000 employees across diverse sectors.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-steel">
                  <MapPin size={18} className="text-gold flex-shrink-0" />
                  <span>King Fahd Road, Al Olaya District, Riyadh 11564</span>
                </div>
                <div className="flex items-center space-x-3 text-steel">
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  <a 
                    href="tel:+966114640000" 
                    className="hover:text-gold transition-colors duration-300"
                  >
                    +966 11 464 0000
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-steel">
                  <Mail size={18} className="text-gold flex-shrink-0" />
                  <a 
                    href="mailto:info@tamimigroup.com" 
                    className="hover:text-gold transition-colors duration-300"
                  >
                    info@tamimigroup.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h3 className="font-heading font-bold text-ivory mb-6 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-steel hover:text-gold transition-colors duration-300 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight 
                          size={14} 
                          className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div 
            className="bg-surface-secondary rounded-2xl p-8 mb-12"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading font-bold text-ivory text-2xl mb-4">
                  Stay Updated
                </h3>
                <p className="text-steel text-lg">
                  Get the latest news, insights, and opportunities from Tamimi Group.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-surface-tertiary border border-line rounded-lg text-ivory placeholder-steel focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                  aria-label="Email address"
                />
                <button className="bg-gold hover:bg-gold-hover text-ink font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-line space-y-6 md:space-y-0"
            variants={itemVariants}
          >
            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-steel text-sm">
              <p>© {currentYear} Tamimi Group. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <Link 
                  to="/privacy" 
                  className="hover:text-gold transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="hover:text-gold transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/cookies" 
                  className="hover:text-gold transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-steel text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-secondary hover:bg-gold text-steel hover:text-ink transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;