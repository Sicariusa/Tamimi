import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Store, Users, MapPin, TrendingUp, Leaf, Heart, Award, ShoppingCart } from 'lucide-react';
import siteData from '../../content/data';

// Import luxury components
import HeroSection from '../../components/ui/HeroSection';
import StatCounter from '../../components/ui/StatCounter';
import StoreLocator from '../../components/ui/StoreLocator';
import CardGrid from '../../components/ui/CardGrid';
import Card from '../../components/ui/Card';
import Section from '../../components/ui/Section';

const MarketsPage: React.FC = () => {
  // Apply SEO for markets page
  useSEO('markets');

  // Markets-specific stats
  const marketStats = [
    siteData.stats.find(s => s.id === 'stores'),
    siteData.stats.find(s => s.id === 'customers'),
    siteData.stats.find(s => s.id === 'pifShare'),
    {
      id: 'market-position',
      value: 1,
      suffix: '',
      label: '#1 Position',
      description: 'Market leadership in KSA',
      icon: 'Award'
    }
  ].filter(Boolean);

  // Generate dummy store data for the store locator
  const dummyStores = [
    {
      id: 'riyadh-olaya',
      name: 'Tamimi Markets - Olaya',
      address: 'Olaya Street, Al Olaya District',
      city: 'Riyadh',
      coordinates: [46.6753, 24.7136] as [number, number],
      phone: '+966 11 234 5678',
      hours: '7:00 AM - 12:00 AM',
      services: ['Fresh Produce', 'Bakery', 'Pharmacy', 'Home Delivery'],
      type: 'hypermarket' as const
    },
    {
      id: 'jeddah-corniche',
      name: 'Tamimi Markets - Corniche',
      address: 'Corniche Road, Al Hamra District',
      city: 'Jeddah',
      coordinates: [39.1728, 21.5433] as [number, number],
      phone: '+966 12 345 6789',
      hours: '6:00 AM - 1:00 AM',
      services: ['Fresh Produce', 'Seafood', 'Deli', 'Catering'],
      type: 'supermarket' as const
    },
    {
      id: 'dammam-central',
      name: 'Tamimi Markets - Central Dammam',
      address: 'King Saud Road, City Center',
      city: 'Dammam',
      coordinates: [50.0888, 26.4207] as [number, number],
      phone: '+966 13 456 7890',
      hours: '6:30 AM - 12:30 AM',
      services: ['Fresh Produce', 'Electronics', 'Clothing'],
      type: 'hypermarket' as const
    }
  ];

  const infographics = [
    {
      id: 'freshness',
      title: 'Farm to Shelf Freshness',
      description: 'Direct partnerships with local farms ensure the freshest produce reaches our customers daily.',
      icon: Leaf,
      color: '#059669',
      stats: [
        { label: 'Local Suppliers', value: '200+' },
        { label: 'Daily Deliveries', value: '50+' }
      ]
    },
    {
      id: 'sustainability',
      title: 'Environmental Commitment',
      description: 'Reducing environmental impact through sustainable practices and green initiatives.',
      icon: Heart,
      color: '#2563EB',
      stats: [
        { label: 'Waste Reduction', value: '40%' },
        { label: 'Energy Savings', value: '25%' }
      ]
    },
    {
      id: 'community',
      title: 'Community Impact',
      description: 'Creating jobs and supporting local communities across the Kingdom.',
      icon: Users,
      color: '#C9A227',
      stats: [
        { label: 'Jobs Created', value: '15K+' },
        { label: 'Communities Served', value: '50+' }
      ]
    },
    {
      id: 'innovation',
      title: 'Retail Innovation',
      description: 'Leading the way in modern retail technology and customer experience.',
      icon: ShoppingCart,
      color: '#7C3AED',
      stats: [
        { label: 'Digital Services', value: '10+' },
        { label: 'Mobile App Users', value: '500K+' }
      ]
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
        mediaUrl={siteData.media.marketsHero.url}
        mediaType="video"
        poster={siteData.media.marketsHero.poster}
        title="Tamimi Markets|Leading Retail Excellence"
        subtitle="Premium Supermarket Chain"
        description="The Kingdom's premier supermarket chain serving millions of customers with fresh products, exceptional service, and innovative retail experiences across 110+ locations nationwide."
        buttons={[
          {
            text: 'Find a Store',
            variant: 'primary',
            icon: 'arrow',
            onClick: () => document.getElementById('store-locator')?.scrollIntoView({ behavior: 'smooth' })
          }
        ]}
        height="large"
        textPosition="center"
      />

      {/* Market Stats */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Market Leadership
            <span className="block text-gold">By the Numbers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketStats.map((stat) => {
            const IconComponent = stat.icon === 'Store' ? Store : 
                               stat.icon === 'Users' ? Users : 
                               stat.icon === 'TrendingUp' ? TrendingUp : Award;
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

      {/* Store Locator */}
      <Section background="default" padding="xl" id="store-locator">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Find a Store
            <span className="block text-gold">Near You</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Locate the nearest Tamimi Markets store and discover our comprehensive 
            range of services and amenities.
          </motion.p>
        </div>

        <StoreLocator stores={dummyStores} />
      </Section>

      {/* Impact Infographics */}
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
            <span className="block text-gold">In Communities</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Beyond retail excellence, we're committed to creating positive impact 
            through sustainable practices, community support, and innovation.
          </motion.p>
        </div>

        <CardGrid columns={4} gap="lg">
          {infographics.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconColor={item.color}
              variant="luxury"
              className="text-center"
              stats={item.stats}
            />
          ))}
        </CardGrid>
      </Section>
    </motion.div>
  );
};

export default MarketsPage;