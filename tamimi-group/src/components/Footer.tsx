'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Our Values', href: '/about#values' },
    { name: 'Vision 2030', href: '/about#vision' },
  ],
  services: [
    { name: 'Catering Services', href: '/divisions/catering' },
    { name: 'Facility Management', href: '/divisions/facility-management' },
    { name: 'Board & Lodging', href: '/divisions/board-lodging' },
    { name: 'Tamimi Markets', href: '/markets' },
  ],
  resources: [
    { name: 'News', href: '/news' },
    { name: 'Investors', href: '/news?filter=investor' },
    { name: 'CSR Reports', href: '/csr' },
    { name: 'Media Kit', href: '/news#media-kit' },
  ],
  careers: [
    { name: 'Job Opportunities', href: '/careers' },
    { name: 'Why Tamimi', href: '/careers#why-tamimi' },
    { name: 'Benefits', href: '/careers#benefits' },
    { name: 'Apply Now', href: '/careers#apply' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
];

const offices = [
  {
    country: 'Saudi Arabia',
    city: 'Dhahran (HQ)',
    address: 'Al Khobar - Dhahran Highway, Dhahran 34457',
    phone: '+966 13 891 2345',
  },
  {
    country: 'Bahrain',
    city: 'Manama',
    address: 'Diplomatic Area, Manama 317',
    phone: '+973 1723 4567',
  },
  {
    country: 'Qatar',
    city: 'Doha',
    address: 'West Bay, Doha 23456',
    phone: '+974 4489 1234',
  },
  {
    country: 'Kuwait',
    city: 'Kuwait City',
    address: 'Salmiya, Kuwait City 13009',
    phone: '+965 2573 8901',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <div>
                <div className="font-bold text-2xl text-white">
                  Tamimi Group
                </div>
                <div className="text-sm text-gray-400">
                  Excellence Since 1945
                </div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              A leading multinational conglomerate providing premium services across 
              catering, facility management, board & lodging, and retail operations 
              throughout the Gulf region.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
                />
                <button className="bg-brand-gold hover:bg-brand-gold/90 px-6 py-2 rounded-r-lg font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-brand-gold rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-6 text-brand-gold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-6 text-brand-gold">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-6 text-brand-gold">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-6 text-brand-gold">Careers</h4>
            <ul className="space-y-3">
              {footerLinks.careers.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regional Offices */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="font-semibold text-xl mb-8 text-center">Our Regional Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div
                key={`${office.country}-${office.city}`}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">
                      {office.city}
                    </h4>
                    <p className="text-sm text-gray-400">{office.country}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                  {office.address}
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>{office.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Map Placeholder */}
        <div className="mt-12 bg-white/5 rounded-2xl p-8 text-center">
          <div className="w-full h-32 bg-gradient-to-r from-brand-gold/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
            <MapPin className="w-12 h-12 text-brand-gold" />
          </div>
          <p className="text-gray-300 mb-4">
            Serving clients across 4 countries in the Gulf region
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-brand-goldSoft transition-colors duration-200"
          >
            <span>View All Locations</span>
            <MapPin className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© {currentYear} Tamimi Group. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="hover:text-brand-gold transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-brand-gold transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="hover:text-brand-gold transition-colors duration-200">
                  Sitemap
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:info@tamimigroup.com"
                className="hover:text-brand-gold transition-colors duration-200"
              >
                info@tamimigroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}