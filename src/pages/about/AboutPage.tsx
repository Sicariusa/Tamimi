import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Award, Lightbulb, Shield, Heart, Linkedin } from 'lucide-react';
import siteData from '../../content/data';

// Import luxury components
import HeroSection from '../../components/ui/HeroSection';
import Timeline from '../../components/ui/Timeline';
import CardGrid from '../../components/ui/CardGrid';
import Card from '../../components/ui/Card';
import Carousel from '../../components/ui/Carousel';
import Section from '../../components/ui/Section';
import StatCounter from '../../components/ui/StatCounter';

const AboutPage: React.FC = () => {
  // Apply SEO for about page
  useSEO('about');

  const iconMap = {
    Award,
    Lightbulb,
    Shield,
    Heart
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
        mediaUrl={siteData.media.aboutHero.url}
        mediaType="video"
        poster={siteData.media.aboutHero.poster}
        title="Our Story|Since 1940"
        subtitle="About Tamimi Group"
        description="From humble beginnings to becoming one of Saudi Arabia's most trusted business groups, our journey spans over eight decades of innovation, growth, and unwavering commitment to excellence."
        buttons={[
          {
            text: 'Our Leadership',
            variant: 'primary',
            icon: 'arrow',
            onClick: () => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })
          }
        ]}
        height="large"
        textPosition="center"
      />

      {/* Timeline Section */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Journey
            <span className="block text-gold">Through the Decades</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Eight decades of continuous growth, adaptation, and excellence in serving the Kingdom.
          </motion.p>
        </div>

        <Timeline events={siteData.timeline} />
      </Section>

      {/* Values Section */}
      <Section background="default" padding="xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Core Values
            <span className="block text-gold">Guiding Our Success</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            These fundamental principles shape our culture, guide our decisions, 
            and define our commitment to stakeholders and communities.
          </motion.p>
        </div>

        <CardGrid columns={4} gap="lg">
          {siteData.values.map((value) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];
            return (
              <Card
                key={value.id}
                title={value.title}
                description={value.description}
                icon={IconComponent}
                iconColor={value.color}
                variant="luxury"
                className="text-center"
              />
            );
          })}
        </CardGrid>
      </Section>

      {/* Leadership Section */}
      <Section background="secondary" padding="xl" id="leadership">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Leadership Team
            <span className="block text-gold">Driving Our Vision</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Meet the experienced leaders who guide our strategic direction 
            and ensure our continued success across all business sectors.
          </motion.p>
        </div>

        <CardGrid columns={4} gap="lg">
          {siteData.leadership.map((leader) => (
            <Card
              key={leader.id}
              title={leader.name}
              description={leader.bio}
              variant="luxury"
              className="text-center"
            >
              {/* Profile Image Placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-surface-tertiary border border-line overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-surface-tertiary flex items-center justify-center">
                  <div className="text-gold text-2xl">👤</div>
                </div>
              </div>

              <div className="text-gold font-semibold mb-2">
                {leader.position}
              </div>

              <div className="text-steel text-sm mb-4">
                {leader.experience} years experience
              </div>

              <div className="space-y-1 text-steel text-xs mb-4">
                {leader.education.map((edu, index) => (
                  <div key={index}>{edu}</div>
                ))}
              </div>

              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-surface-elevated rounded-lg text-steel hover:text-gold hover:bg-gold/20 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </Card>
          ))}
        </CardGrid>
      </Section>

      {/* Vision 2030 Section */}
      <Section background="default" padding="xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Vision 2030 Alignment
            <span className="block text-gold">Building Tomorrow's Kingdom</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            As a strategic partner in Saudi Arabia's transformation, we're committed 
            to supporting the Kingdom's ambitious goals through sustainable practices, 
            innovation, and community development.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <StatCounter
            value={75}
            suffix="%"
            label="Saudization Rate"
            description="Saudi nationals in workforce"
            icon={Award}
            size="lg"
          />
          <StatCounter
            value={30}
            suffix="%"
            label="CO₂ Reduction"
            description="Environmental impact decrease"
            icon={Lightbulb}
            size="lg"
          />
          <StatCounter
            value={15}
            suffix="%"
            label="Revenue Growth"
            description="Annual growth rate"
            icon={Shield}
            size="lg"
          />
          <StatCounter
            value={25}
            suffix="+"
            label="New Projects"
            description="Vision 2030 initiatives"
            icon={Heart}
            size="lg"
          />
        </div>

        <motion.div
          className="glass backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-line"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-ivory mb-4">
              Our Vision 2030 Commitments
            </h3>
            <p className="text-steel leading-relaxed max-w-2xl mx-auto">
              Actively contributing to the Kingdom's transformation through strategic initiatives 
              and sustainable business practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Award className="text-gold" size={32} />
              </div>
              <h4 className="font-heading font-bold text-ivory text-lg mb-2">
                Human Capital Development
              </h4>
              <p className="text-steel text-sm">
                Training and developing Saudi talent across all business divisions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="text-gold" size={32} />
              </div>
              <h4 className="font-heading font-bold text-ivory text-lg mb-2">
                Environmental Sustainability
              </h4>
              <p className="text-steel text-sm">
                Implementing green technologies and sustainable practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-gold" size={32} />
              </div>
              <h4 className="font-heading font-bold text-ivory text-lg mb-2">
                Economic Diversification
              </h4>
              <p className="text-steel text-sm">
                Supporting non-oil sector growth through innovative services
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default AboutPage;