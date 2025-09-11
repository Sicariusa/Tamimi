import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { Users, Heart, TrendingUp, Award, GraduationCap, ArrowRight } from 'lucide-react';
import siteData from '../content/data';

// Import luxury components
import HeroSection from '../components/ui/HeroSection';
import CardGrid from '../components/ui/CardGrid';
import Card from '../components/ui/Card';
import JobBoard from '../components/ui/JobBoard';
import Testimonials from '../components/ui/Testimonials';
import Section from '../components/ui/Section';

const CareersPage: React.FC = () => {
  // Apply SEO for careers page
  useSEO('careers');

  const benefits = [
    {
      id: 'competitive-salary',
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance-based bonuses and comprehensive benefits.',
      icon: TrendingUp,
      color: '#C9A227'
    },
    {
      id: 'health-benefits',
      title: 'Health & Wellness',
      description: 'Complete health insurance coverage for employees and their families.',
      icon: Heart,
      color: '#059669'
    },
    {
      id: 'career-development',
      title: 'Career Development',
      description: 'Continuous learning opportunities, training programs, and clear advancement paths.',
      icon: GraduationCap,
      color: '#2563EB'
    },
    {
      id: 'work-culture',
      title: 'Inclusive Culture',
      description: 'Diverse, inclusive workplace that values innovation, collaboration, and excellence.',
      icon: Users,
      color: '#7C3AED'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero Section */}
      <HeroSection
        mediaUrl={siteData.media.careersHero.url}
        mediaType="video"
        poster={siteData.media.careersHero.poster}
        title="Build Your Career|With Excellence"
        subtitle="Join Our Team"
        description="Be part of Saudi Arabia's leading business group. Join 21,000+ professionals who are shaping the Kingdom's future across diverse industries and making a meaningful impact every day."
        buttons={[
          {
            text: 'View Open Positions',
            variant: 'primary',
            icon: 'arrow',
            onClick: () => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })
          },
          {
            text: 'Learn About Benefits',
            variant: 'secondary',
            icon: 'arrow',
            onClick: () => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })
          }
        ]}
        height="large"
        textPosition="center"
      />

      {/* Why Tamimi Section */}
      <Section background="secondary" padding="xl" id="benefits">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Why Choose
            <span className="block text-gold">Tamimi Group?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            We believe our people are our greatest asset. That's why we provide 
            comprehensive benefits, growth opportunities, and a supportive environment 
            where you can thrive and make a meaningful impact.
          </motion.p>
        </div>

        <CardGrid columns={4} gap="lg" className="mb-16">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              iconColor={benefit.color}
              variant="luxury"
              className="text-center"
            />
          ))}
        </CardGrid>

        {/* Growth Path Diagram */}
        <motion.div
          className="glass backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-line"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-ivory mb-4">
              Your Growth Path
            </h3>
            <p className="text-steel leading-relaxed max-w-2xl mx-auto">
              We believe in nurturing talent and providing clear pathways for career advancement 
              across all our business divisions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {['Entry Level', 'Specialist', 'Manager', 'Executive'].map((level, index) => (
              <div key={level} className="relative">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-gold font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="font-heading font-bold text-ivory mb-2">{level}</h4>
                <p className="text-steel text-sm">
                  {index === 0 && 'Start your journey with comprehensive onboarding and mentorship'}
                  {index === 1 && 'Develop specialized skills and take on increased responsibilities'}
                  {index === 2 && 'Lead teams and drive strategic initiatives'}
                  {index === 3 && 'Shape organizational direction and industry leadership'}
                </p>
                
                {/* Arrow */}
                {index < 3 && (
                  <ArrowRight className="absolute top-8 -right-4 text-gold hidden md:block" size={24} />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Job Board Section */}
      <Section background="default" padding="xl" id="jobs">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Open Positions
            <span className="block text-gold">Join Our Team</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Discover exciting opportunities across our diverse business portfolio. 
            From entry-level positions to executive roles, find your perfect fit.
          </motion.p>
        </div>

        <JobBoard jobs={siteData.jobs} showFilters={true} />
      </Section>

      {/* Testimonials Section */}
      <Section background="secondary" padding="xl">
        <Testimonials
          testimonials={siteData.testimonials}
          title="Employee Stories|Voices of Excellence"
          subtitle="Hear from our team members about their experiences and growth at Tamimi Group"
          autoPlay={true}
        />
      </Section>

      {/* Apply CTA Section */}
      <Section background="default" padding="xl">
        <motion.div
          className="glass backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-line text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
            Ready to Start
            <span className="block text-gold">Your Journey?</span>
          </h2>
          
          <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed mb-12">
            Take the first step towards an exciting career with one of Saudi Arabia's 
            most respected business groups. We're always looking for talented individuals 
            who share our commitment to excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#jobs"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-ink px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Browse Positions</span>
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-gold text-gold hover:bg-gold hover:text-ink px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact HR</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-line">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-steel">
              <div className="flex items-center space-x-2">
                <span className="font-medium">HR Department:</span>
                <a 
                  href="tel:+966114640100"
                  className="text-gold hover:text-gold-hover transition-colors duration-300"
                >
                  +966 11 464 0100
                </a>
              </div>
              
              <div className="hidden md:block w-px h-4 bg-line" />
              
              <div className="flex items-center space-x-2">
                <span className="font-medium">Email:</span>
                <a 
                  href="mailto:careers@tamimigroup.com"
                  className="text-gold hover:text-gold-hover transition-colors duration-300"
                >
                  careers@tamimigroup.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default CareersPage;