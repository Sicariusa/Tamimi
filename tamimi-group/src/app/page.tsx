import Link from 'next/link';
import { ArrowRight, Globe, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import StatCounter from '@/components/StatCounter';
import LogoRail from '@/components/LogoRail';
import Card from '@/components/Card';
import MapboxMap from '@/components/MapboxMap';
import { partners, stats, offices, news } from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Shaping the Future of Gulf Services"
        subtitle="Excellence Since 1945"
        description="A leading multinational conglomerate providing premium services across catering, facility management, board & lodging, and retail operations throughout the Gulf region."
        backgroundImage="/media/hero-video.jpg"
        height="full"
        showScrollIndicator
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/divisions"
            className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
          >
            Partner With Us
          </Link>
        </div>
      </PageHero>

      {/* Stats Strip */}
      <Section background="sand" padding="md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
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

      {/* Strategic Partners */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Partnering with the region's most prestigious organizations and government entities
          </p>
        </div>
        <LogoRail partners={partners} className="reveal" />
      </Section>

      {/* Business Snapshot */}
      <Section background="fog" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Excellence Across Every Sector
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            From industrial catering to premium retail, we deliver world-class services that power the Gulf's growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Business Divisions"
            description="Comprehensive services across catering, facility management, and board & lodging for major industrial and infrastructure projects."
            href="/divisions"
            variant="default"
            className="reveal"
          >
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>3 Divisions</span>
              <span>•</span>
              <span>120+ Sites</span>
            </div>
          </Card>

          <Card
            title="Tamimi Markets"
            description="The Gulf's premier retail destination with 110+ stores, serving millions of customers with fresh, quality products."
            href="/markets"
            variant="featured"
            className="reveal"
          >
            <div className="flex items-center space-x-4 text-sm text-white/80">
              <span>110+ Stores</span>
              <span>•</span>
              <span>4 Countries</span>
            </div>
          </Card>

          <Card
            title="Corporate Social Responsibility"
            description="Committed to sustainable development, education, healthcare, and community empowerment across the region."
            href="/csr"
            variant="default"
            className="reveal"
          >
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>500+ Scholarships</span>
              <span>•</span>
              <span>Vision 2030</span>
            </div>
          </Card>
        </div>
      </Section>

      {/* Global Presence Map */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Regional Presence, Global Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Strategically positioned across the Gulf region to serve major markets and emerging opportunities
          </p>
        </div>
        
        <div className="reveal">
          <MapboxMap
            markers={offices}
            fitBoundsOnLoad
            height="500px"
            className="mb-8"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {offices.map((office, index) => (
            <div key={`${office.country}-${office.city}`} className="text-center reveal">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-semibold text-brand-ink mb-1">
                {office.city}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{office.country}</p>
              {office.employees && (
                <p className="text-xs text-brand-gold font-medium">
                  {office.employees.toLocaleString()} employees
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Latest News & Updates */}
      <Section background="sand" padding="xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600 reveal">
              Stay informed about our latest developments and achievements
            </p>
          </div>
          <Link
            href="/news"
            className="hidden md:flex items-center space-x-2 text-brand-gold hover:text-brand-gold/80 font-medium reveal"
          >
            <span>View All News</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.slice(0, 3).map((item, index) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.excerpt}
              href={item.url}
              className="reveal"
              variant={item.featured ? 'featured' : 'default'}
            >
              <div className="flex items-center justify-between text-sm">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${item.category === 'News' ? 'bg-blue-100 text-blue-700' : 
                    item.category === 'Press Release' ? 'bg-green-100 text-green-700' : 
                    'bg-purple-100 text-purple-700'}
                `}>
                  {item.category}
                </span>
                <span className="text-gray-500">
                  {new Date(item.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric' 
                  })}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-brand-gold/80 font-medium"
          >
            <span>View All News</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* CTA Bar */}
      <Section background="ink" padding="lg">
        <div className="text-center">
          <h2 className="text-heading font-bold text-white mb-6 reveal">
            Ready to Partner with Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
            Join the region's most trusted organizations who rely on Tamimi Group for their critical operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Link
              href="/contact"
              className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Start a Partnership</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/careers"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Explore Careers</span>
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}