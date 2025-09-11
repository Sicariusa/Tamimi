import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { GraduationCap, Heart, Leaf, Users, Target, Award } from 'lucide-react';
import siteData from '../../content/data';

// Import luxury components
import HeroSection from '../../components/ui/HeroSection';
import CardGrid from '../../components/ui/CardGrid';
import Card from '../../components/ui/Card';
import StatCounter from '../../components/ui/StatCounter';
import Section from '../../components/ui/Section';

const CSRPage: React.FC = () => {
  // Apply SEO for CSR page
  useSEO('csr');

  const csrInitiatives = [
    {
      id: 'education',
      title: 'Education & Scholarships',
      description: 'Providing educational opportunities and scholarships to empower the next generation of Saudi leaders.',
      icon: GraduationCap,
      color: '#2563EB',
      image: '/media/images/csr-education.jpg',
      stats: [
        { label: 'Scholarships', value: '500+' },
        { label: 'Universities', value: '15' }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare Support',
      description: 'Supporting community health initiatives and medical facilities across the Kingdom.',
      icon: Heart,
      color: '#DC2626',
      image: '/media/images/csr-healthcare.jpg',
      stats: [
        { label: 'Clinics Supported', value: '25' },
        { label: 'Beneficiaries', value: '10K+' }
      ]
    },
    {
      id: 'sustainability',
      title: 'Environmental Sustainability',
      description: 'Leading environmental conservation efforts and sustainable business practices.',
      icon: Leaf,
      color: '#059669',
      image: '/media/images/csr-environment.jpg',
      stats: [
        { label: 'CO₂ Reduced', value: '30%' },
        { label: 'Green Projects', value: '20+' }
      ]
    },
    {
      id: 'community',
      title: 'Community Development',
      description: 'Investing in local communities through job creation and social programs.',
      icon: Users,
      color: '#7C3AED',
      image: '/media/images/csr-community.jpg',
      stats: [
        { label: 'Jobs Created', value: '15K+' },
        { label: 'Programs', value: '50+' }
      ]
    },
    {
      id: 'vision2030',
      title: 'Vision 2030 Support',
      description: 'Actively contributing to Saudi Arabia\'s transformation and diversification goals.',
      icon: Target,
      color: '#C9A227',
      image: '/media/images/csr-vision2030.jpg',
      stats: [
        { label: 'Initiatives', value: '25+' },
        { label: 'Investment', value: '$50M+' }
      ]
    }
  ];

  const iconMap = {
    GraduationCap,
    Heart,
    Leaf,
    Users
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero Section */}
      <HeroSection
        mediaUrl={siteData.media.csrHero.url}
        mediaType="video"
        poster={siteData.media.csrHero.poster}
        title="Corporate Social|Responsibility"
        subtitle="Building Communities"
        description="We believe in giving back to the communities that have supported our growth. Through education, healthcare, sustainability, and community development initiatives, we're building a better tomorrow."
        buttons={[
          {
            text: 'Our Initiatives',
            variant: 'primary',
            icon: 'arrow',
            onClick: () => document.getElementById('initiatives')?.scrollIntoView({ behavior: 'smooth' })
          }
        ]}
        height="large"
        textPosition="center"
      />

      {/* Impact Counters */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Impact
            <span className="block text-gold">By the Numbers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.csrStats.map((stat) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Award;
            return (
              <StatCounter
                key={stat.id}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                suffix={stat.suffix}
                icon={IconComponent}
                size="lg"
              />
            );
          })}
        </div>
      </Section>

      {/* CSR Initiatives */}
      <Section background="default" padding="xl" id="initiatives">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Initiatives
            <span className="block text-gold">Making a Difference</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Our comprehensive CSR programs address key areas of community need 
            while supporting Saudi Arabia's Vision 2030 transformation goals.
          </motion.p>
        </div>

        <div className="space-y-16">
          {csrInitiatives.map((initiative, index) => {
            const IconComponent = iconMap[initiative.icon.name as keyof typeof iconMap] || Award;
            
            return (
              <motion.div
                key={initiative.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <div 
                      className="inline-block w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${initiative.color}20` }}
                    >
                      <IconComponent size={32} style={{ color: initiative.color }} />
                    </div>
                    <h3 className="font-heading font-bold text-3xl lg:text-4xl text-ivory mb-4">
                      {initiative.title}
                    </h3>
                    <p className="text-xl text-steel leading-relaxed mb-6">
                      {initiative.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    {initiative.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-3xl font-black text-gold mb-2 tabular-nums">
                          {stat.value}
                        </div>
                        <div className="text-ivory font-semibold mb-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-surface-tertiary border border-line">
                    <div className="w-full h-full bg-gradient-to-br from-gold/10 to-surface-tertiary flex items-center justify-center">
                      <div className="text-center text-gold/60">
                        <IconComponent size={64} className="mx-auto mb-4" />
                        <div className="text-sm">{initiative.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="secondary" padding="xl">
        <motion.div
          className="glass backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-line text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
            Join Our Mission
            <span className="block text-gold">Make a Difference</span>
          </h2>
          
          <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed mb-12">
            Partner with us in our commitment to building stronger communities 
            and supporting Saudi Arabia's transformation. Together, we can create 
            lasting positive impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-ink px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Partner with Us</span>
              <Heart size={20} />
            </motion.a>
            
            <motion.a
              href="/careers"
              className="inline-flex items-center space-x-2 border-2 border-gold text-gold hover:bg-gold hover:text-ink px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Our Team</span>
              <Users size={20} />
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default CSRPage;