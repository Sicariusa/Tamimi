import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, MapPin, Award, TrendingUp } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import StatCounter from '@/components/StatCounter';
import { divisions } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Business Divisions | Tamimi Group',
  description: 'Explore our comprehensive business divisions: Catering Services, Facility Management, and Board & Lodging solutions across the Gulf region.',
};

const overallStats = [
  { label: 'Active Sites', value: 300, suffix: '+' },
  { label: 'Daily Meals Served', value: 250000, suffix: '' },
  { label: 'Assets Managed', value: 10000, suffix: '+' },
  { label: 'Bed Capacity', value: 50000, suffix: '+' },
];

const keyClients = [
  'Saudi Aramco',
  'NEOM',
  'Public Investment Fund',
  'King Fahd Medical City',
  'King Abdulaziz International Airport',
  'Red Sea Global',
  'SABIC',
  'Ministry of Health'
];

export default function Divisions() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Comprehensive Business Solutions"
        subtitle="Our Divisions"
        description="Three specialized divisions delivering world-class services to the Gulf region's most prestigious projects and organizations."
        backgroundImage="/media/divisions-hero.jpg"
        height="lg"
      />

      {/* Overview Stats */}
      <Section background="sand" padding="md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {overallStats.map((stat, index) => (
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

      {/* Divisions Grid */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Our Business Divisions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Each division represents decades of expertise and innovation, serving the unique needs of our diverse client base
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <Card
              key={division.slug}
              title={division.name}
              description={division.description}
              href={`/divisions/${division.slug}`}
              className="reveal h-full"
              variant={index === 1 ? 'featured' : 'default'}
            >
              <div className="space-y-4">
                {/* Services */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 opacity-75">Key Services</h4>
                  <div className="flex flex-wrap gap-1">
                    {division.services.slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full ${
                          index === 1 
                            ? 'bg-white/20 text-white' 
                            : 'bg-brand-gold/10 text-brand-gold'
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Clients */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 opacity-75">Notable Clients</h4>
                  <div className="text-sm opacity-90">
                    {division.clients.join(', ')}
                  </div>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-current/10">
                  {division.kpis.slice(0, 2).map((kpi, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`font-bold text-lg ${
                        index === 1 ? 'text-white' : 'text-brand-gold'
                      }`}>
                        {kpi.value}
                      </div>
                      <div className="text-xs opacity-75">{kpi.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Our Divisions */}
      <Section background="fog" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Why Choose Tamimi Group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Our comprehensive approach and proven track record make us the preferred partner for critical operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center reveal">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-semibold text-brand-ink mb-2">Proven Excellence</h3>
            <p className="text-gray-600 text-sm">80+ years of delivering exceptional service quality</p>
          </div>

          <div className="text-center reveal">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-semibold text-brand-ink mb-2">Regional Presence</h3>
            <p className="text-gray-600 text-sm">Operations across Saudi Arabia, Bahrain, Qatar, and Kuwait</p>
          </div>

          <div className="text-center reveal">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-semibold text-brand-ink mb-2">Skilled Workforce</h3>
            <p className="text-gray-600 text-sm">21,000+ trained professionals across all divisions</p>
          </div>

          <div className="text-center reveal">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-semibold text-brand-ink mb-2">Continuous Innovation</h3>
            <p className="text-gray-600 text-sm">Embracing technology and best practices for better outcomes</p>
          </div>
        </div>
      </Section>

      {/* Key Clients Showcase */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 reveal">
            Our divisions serve the region's most prestigious organizations and ambitious projects
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {keyClients.map((client, index) => (
            <div
              key={client}
              className="bg-white shadow-soft rounded-xl p-6 text-center hover:shadow-card transition-shadow duration-300 reveal"
            >
              <div className="w-full h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xs font-medium text-gray-600">{client}</span>
              </div>
              <p className="text-sm font-medium text-brand-ink">{client}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="ink" padding="lg">
        <div className="text-center">
          <h2 className="text-heading font-bold text-white mb-6 reveal">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
            Our division experts are ready to understand your requirements and deliver tailored solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Link
              href="/contact"
              className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/careers"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}