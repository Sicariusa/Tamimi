import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Users, Leaf, Award, TrendingUp, Heart } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import StatCounter from '@/components/StatCounter';
import StoreLocator from '@/components/StoreLocator';
import { stores } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Tamimi Markets | Premium Retail Experience',
  description: 'Discover Tamimi Markets - the Gulf\'s premier retail destination with 110+ stores across Saudi Arabia, Bahrain, Qatar, and Kuwait.',
};

const marketStats = [
  { label: 'Stores', value: 110, suffix: '+' },
  { label: 'Daily Customers', value: 50000, suffix: '+' },
  { label: 'Product Lines', value: 25000, suffix: '+' },
  { label: 'Years Serving Gulf', value: 30, suffix: '+' },
];

const commitments = [
  {
    icon: Leaf,
    title: 'Fresh & Quality',
    description: 'Daily fresh produce sourced from local farms and international suppliers',
    metric: '99% Freshness Guarantee'
  },
  {
    icon: Users,
    title: 'Local Partnerships',
    description: 'Supporting local suppliers and farmers across the Gulf region',
    metric: '500+ Local Suppliers'
  },
  {
    icon: Award,
    title: 'Customer Satisfaction',
    description: 'Consistently rated as the region\'s most trusted retail brand',
    metric: '4.8/5 Customer Rating'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Leading digital transformation in Gulf retail with modern technology',
    metric: 'Mobile App & E-commerce'
  }
];

const achievements = [
  {
    title: '#1 Retail Chain',
    description: 'Leading retail chain in the Gulf region by customer satisfaction',
    icon: Award
  },
  {
    title: 'PIF Partnership',
    description: '30% strategic partnership with Public Investment Fund',
    icon: TrendingUp
  },
  {
    title: 'Sustainability Leader',
    description: 'First Gulf retailer to achieve carbon-neutral operations',
    icon: Leaf
  },
  {
    title: 'Community Impact',
    description: '15,000+ jobs created across our retail operations',
    icon: Heart
  }
];

export default function Markets() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="The Gulf's Premier Retail Destination"
        subtitle="Tamimi Markets"
        description="Serving millions of customers across 110+ stores with fresh, quality products and exceptional service since 1995."
        backgroundImage="/media/markets-hero.jpg"
        height="lg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#store-locator"
            className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Find a Store</span>
            <ShoppingCart className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
          >
            Business Inquiries
          </Link>
        </div>
      </PageHero>

      {/* Proof Metrics */}
      <Section background="sand" padding="md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {marketStats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              className="reveal"
            />
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Market Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Recognized achievements that demonstrate our commitment to excellence and innovation in Gulf retail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={achievement.title} className="text-center p-6 bg-brand-fog rounded-2xl reveal">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-bold text-brand-ink mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Store Locator */}
      <Section background="fog" padding="xl" id="store-locator">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Find Your Nearest Store
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Conveniently located across the Gulf region to serve you better
          </p>
        </div>

        <div className="reveal">
          <StoreLocator stores={stores} />
        </div>
      </Section>

      {/* Commitments */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Our Commitments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Values that drive everything we do, from sourcing to customer service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => (
            <div key={commitment.title} className="reveal">
              <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <commitment.icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-ink mb-3">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {commitment.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full">
                      {commitment.metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Customer Experience */}
      <Section background="sand" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-display font-bold text-brand-ink mb-6">
              Exceptional Shopping Experience
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              From spacious aisles and modern refrigeration to knowledgeable staff and convenient parking, 
              every Tamimi Markets store is designed with your comfort and convenience in mind.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-brand-gold mb-1">25,000+</div>
                <div className="text-sm text-gray-600">Product Lines</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-gold mb-1">24/7</div>
                <div className="text-sm text-gray-600">Select Locations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-gold mb-1">Free</div>
                <div className="text-sm text-gray-600">Parking Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-gold mb-1">Mobile</div>
                <div className="text-sm text-gray-600">App & Delivery</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-brand-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-gold/90 transition-colors duration-200"
            >
              <span>Business Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="reveal">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-600 font-medium">Store Interior</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sustainability & Community */}
      <Section background="ink" padding="lg">
        <div className="text-center">
          <h2 className="text-heading font-bold text-white mb-6 reveal">
            Committed to Our Communities
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
            Supporting local communities, reducing environmental impact, and creating opportunities for Gulf nationals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center reveal">
              <div className="text-4xl font-bold text-brand-gold mb-2">15,000+</div>
              <div className="text-white font-medium">Jobs Created</div>
            </div>
            <div className="text-center reveal">
              <div className="text-4xl font-bold text-brand-gold mb-2">500+</div>
              <div className="text-white font-medium">Local Suppliers</div>
            </div>
            <div className="text-center reveal">
              <div className="text-4xl font-bold text-brand-gold mb-2">Carbon</div>
              <div className="text-white font-medium">Neutral Operations</div>
            </div>
          </div>

          <Link
            href="/csr"
            className="inline-flex items-center space-x-2 bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 reveal"
          >
            <span>Our Sustainability Efforts</span>
            <Leaf className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}