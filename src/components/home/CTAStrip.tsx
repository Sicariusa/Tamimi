import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';

const CTAStrip: React.FC = () => {
  return (
    <Section background="default" padding="xl" id="cta">
      <div className="relative">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5 rounded-3xl"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201,162,39,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <motion.div
          className="glass backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-line relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-2xl" />
          
          <div className="text-center relative z-10">
            <motion.h2 
              className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Ready to Partner
              <span className="block text-gold">with Excellence?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-steel max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Join the companies and organizations that trust Tamimi Group 
              to deliver exceptional results. Whether you're looking for 
              partnership opportunities or career growth, we're here to help.
            </motion.p>

            <motion.div 
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Partnership CTA */}
              <div className="bg-surface-secondary rounded-2xl p-8 border border-line group hover:border-gold/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={32} className="text-gold" />
                </div>
                
                <h3 className="font-heading font-bold text-ivory text-2xl mb-4">
                  Business Partnerships
                </h3>
                
                <p className="text-steel leading-relaxed mb-6">
                  Explore strategic partnership opportunities across our 
                  diverse business portfolio and expand your reach.
                </p>
                
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  href="/contact#partnerships"
                  className="w-full"
                >
                  Partner with Us
                </Button>
              </div>

              {/* Careers CTA */}
              <div className="bg-surface-secondary rounded-2xl p-8 border border-line group hover:border-gold/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} className="text-gold" />
                </div>
                
                <h3 className="font-heading font-bold text-ivory text-2xl mb-4">
                  Career Opportunities
                </h3>
                
                <p className="text-steel leading-relaxed mb-6">
                  Join our team of 21,000+ professionals and build your 
                  career with one of the Kingdom's leading groups.
                </p>
                
                <Button
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  href="/careers"
                  className="w-full"
                >
                  Explore Careers
                </Button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="mt-12 pt-8 border-t border-line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-steel">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Call us:</span>
                  <a 
                    href="tel:+966114640000"
                    className="text-gold hover:text-gold-hover transition-colors duration-300"
                  >
                    +966 11 464 0000
                  </a>
                </div>
                
                <div className="hidden md:block w-px h-4 bg-line" />
                
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Email us:</span>
                  <a 
                    href="mailto:info@tamimigroup.com"
                    className="text-gold hover:text-gold-hover transition-colors duration-300"
                  >
                    info@tamimigroup.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default CTAStrip;