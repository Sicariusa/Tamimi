import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Section from '../ui/Section';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: 'Abdullah Al-Tamimi',
      position: 'Chairman & CEO',
      bio: 'Leading Tamimi Group with over 30 years of experience in business development and strategic planning.',
      image: '/media/images/leadership/chairman.jpg'
    },
    {
      name: 'Sarah Al-Tamimi',
      position: 'Chief Operating Officer',
      bio: 'Overseeing operational excellence across all business divisions with focus on innovation and efficiency.',
      image: '/media/images/leadership/coo.jpg'
    },
    {
      name: 'Mohammed Al-Rashid',
      position: 'Chief Financial Officer',
      bio: 'Managing financial strategy and investor relations with expertise in corporate finance and growth planning.',
      image: '/media/images/leadership/cfo.jpg'
    },
    {
      name: 'Fatima Al-Zahra',
      position: 'Chief Human Resources Officer',
      bio: 'Leading talent development and organizational culture initiatives across our 21,000+ employee base.',
      image: '/media/images/leadership/chro.jpg'
    }
  ];

  return (
    <Section background="secondary" padding="xl" id="leadership">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Leadership Team
          <span className="block text-gold">Driving Our Vision</span>
        </h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
          Meet the experienced leaders who guide our strategic direction 
          and ensure our continued success across all business sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.name}
            className="luxury-card p-6 text-center group hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-surface-tertiary border border-line overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gold/20 to-surface-tertiary flex items-center justify-center">
                <div className="text-gold text-4xl">👤</div>
              </div>
            </div>

            <h3 className="font-heading font-bold text-ivory text-xl mb-2 group-hover:text-gold transition-colors duration-300">
              {leader.name}
            </h3>
            
            <div className="text-gold font-semibold mb-4">
              {leader.position}
            </div>
            
            <p className="text-steel text-sm leading-relaxed mb-6">
              {leader.bio}
            </p>

            {/* LinkedIn Icon */}
            <button className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center text-steel hover:text-gold hover:bg-gold/20 transition-all duration-300 mx-auto">
              <Linkedin size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Leadership;