import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Business Divisions', href: '#divisions' },
    { name: 'Tamimi Markets', href: '#markets' },
    { name: 'Careers', href: '#careers' },
  ];

  const services = [
    { name: 'Retail Operations', href: '#' },
    { name: 'Contracting & Infrastructure', href: '#' },
    { name: 'Industrial Services', href: '#' },
    { name: 'Facility Management', href: '#' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Code of Conduct', href: '#' },
    { name: 'Compliance', href: '#' },
  ];

  return (
    <footer className="bg-[#12110e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="/TamimiGroup.png"
              alt="Tamimi Group"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Since the early 1940s, Tamimi Group has been a cornerstone of Saudi Arabia's
              economic development, operating across multiple sectors with a commitment
              to excellence, innovation, and community service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/tafgajeddah/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-[#e9ce8c] hover:text-[#12110e] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-lg hover:bg-[#e9ce8c] hover:text-[#12110e] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-lg hover:bg-[#e9ce8c] hover:text-[#12110e] transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#e9ce8c]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#e9ce8c] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#e9ce8c]">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-[#e9ce8c] transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#e9ce8c]">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[#e9ce8c] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Tamimi Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO 9001:2015 Certified</span>
              <span>•</span>
              <span>Vision 2030 Partner</span>
              <span>•</span>
              <span>Saudi Arabia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;