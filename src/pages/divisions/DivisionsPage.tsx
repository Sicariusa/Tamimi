import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Building2, Users, MapPin, TrendingUp, UtensilsCrossed, Settings, HardHat } from 'lucide-react';
import siteData from '../../content/data';

// Import luxury components
import HeroSection from '../../components/ui/HeroSection';
import CardGrid from '../../components/ui/CardGrid';
import Card from '../../components/ui/Card';
import StatCounter from '../../components/ui/StatCounter';
import Section from '../../components/ui/Section';

const DivisionsPage: React.FC = () => {
  // Apply SEO for divisions page
  useSEO('divisions');

  const iconMap = {
    UtensilsCrossed,
    Settings,
    Building: Building2,
    HardHat,
    Cog: Settings,
    Truck: Building2
  };

  const divisionStats = [
    {
      value: siteData.divisions.length,
      suffix: '',
      label: 'Business Divisions',
      description: 'Specialized service areas',
      icon: Building2
    },
    {
      value: 21000,
      suffix: '+',
      label: 'Total Employees',
      description: 'Across all divisions',
      icon: Users
    },
    {
      value: 100,
      suffix: '+',
      label: 'Active Projects',
      description: 'Ongoing initiatives',
      icon: TrendingUp
    },
    {
      value: 4,
      suffix: '',
      label: 'Countries',
      description: 'Regional presence',
      icon: MapPin
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
        mediaUrl="/media/videos/business-divisions.mp4"
        mediaType="video"
        poster="/media/images/business-divisions-poster.jpg"
        title="Business Divisions|Excellence Across Sectors"
        subtitle="Our Portfolio"
        description="Discover our comprehensive portfolio of business divisions, each delivering specialized expertise and exceptional service across diverse industries throughout the Kingdom and beyond."
        buttons={[
          {
            text: 'Explore Services',
            variant: 'primary',
            icon: 'arrow',
            onClick: () => document.getElementById('divisions-grid')?.scrollIntoView({ behavior: 'smooth' })
          }
        ]}
        height="large"
        textPosition="center"
      />

      {/* Divisions Grid */}
      <Section background="secondary" padding="xl" id="divisions-grid">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Divisions
            <span className="block text-gold">Comprehensive Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Each division represents decades of expertise and commitment to excellence, 
            serving diverse clients across multiple industries.
          </motion.p>
        </div>

        <CardGrid columns={3} gap="lg">
          {siteData.divisions.map((division) => {
            const IconComponent = iconMap[division.icon as keyof typeof iconMap] || Building2;
            
            return (
              <Card
                key={division.id}
                title={division.name}
                description={division.description}
                icon={IconComponent}
                iconColor={division.color}
                href={`/divisions/${division.slug}`}
                variant="luxury"
                badge={`Est. ${division.established}`}
                stats={[
                  { label: 'Services', value: division.services.length.toString() },
                  { label: 'Clients', value: division.clients.length.toString() }
                ]}
              />
            );
          })}
        </CardGrid>
      </Section>

      {/* Division Stats */}
      <Section background="default" padding="xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Comprehensive Coverage
            <span className="block text-gold">Across Industries</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Our diverse business divisions work together to provide integrated solutions 
            and exceptional service delivery across multiple sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisionStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              suffix={stat.suffix}
              icon={stat.icon}
              size="lg"
            />
          ))}
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
            Partner with
            <span className="block text-gold">Industry Leaders</span>
          </h2>
          
          <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed mb-12">
            Ready to discuss how our expertise can help you achieve your goals? 
            Our team is standing by to provide customized solutions for your specific needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-ink px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Conversation</span>
              <Building2 size={20} />
            </motion.a>
            
            <motion.a
              href="/about"
              className="inline-flex items-center space-x-2 border-2 border-gold text-gold hover:bg-gold hover:text-ink px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn About Us</span>
              <Users size={20} />
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default DivisionsPage;