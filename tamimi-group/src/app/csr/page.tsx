import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Heart, Leaf, Users, Award, Download } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import StatCounter from '@/components/StatCounter';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Corporate Social Responsibility | Tamimi Group',
  description: 'Discover Tamimi Group\'s commitment to sustainable development, education, healthcare, and community empowerment across the Gulf region.',
};

const csrStats = [
  { label: 'Scholarships Awarded', value: 500, suffix: '+' },
  { label: 'Healthcare Clinics Supported', value: 25, suffix: '+' },
  { label: 'CO₂ Reduction', value: 30, suffix: '%' },
  { label: 'Local Jobs Created', value: 15000, suffix: '+' },
];

const initiatives = [
  {
    title: 'Education Excellence',
    description: 'Supporting Gulf youth through scholarships, vocational training, and educational infrastructure development.',
    icon: GraduationCap,
    achievements: ['500+ Scholarships', 'Technical Training Centers', 'University Partnerships'],
    color: 'blue'
  },
  {
    title: 'Healthcare Support',
    description: 'Enhancing healthcare accessibility and quality across underserved communities in the Gulf region.',
    icon: Heart,
    achievements: ['25+ Clinics Supported', 'Medical Equipment Donations', 'Health Awareness Programs'],
    color: 'red'
  },
  {
    title: 'Environmental Sustainability',
    description: 'Leading the way in sustainable business practices and environmental conservation efforts.',
    icon: Leaf,
    achievements: ['30% Carbon Reduction', 'Renewable Energy Projects', 'Waste Management Programs'],
    color: 'green'
  },
  {
    title: 'Community Development',
    description: 'Empowering local communities through job creation, skills development, and social programs.',
    icon: Users,
    achievements: ['15,000+ Jobs Created', 'Skills Development Programs', 'Community Centers'],
    color: 'purple'
  }
];

const vision2030Alignment = [
  {
    pillar: 'Human Capital Development',
    description: 'Supporting Saudi Vision 2030 through education and skills development',
    impact: '70% Saudi National Employment Rate'
  },
  {
    pillar: 'Economic Diversification',
    description: 'Contributing to non-oil economic growth through service excellence',
    impact: 'Multi-billion SAR Annual Revenue'
  },
  {
    pillar: 'Environmental Sustainability',
    description: 'Leading sustainable practices in the service industry',
    impact: 'Carbon Neutral Operations by 2030'
  }
];

export default function CSR() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Building a Better Tomorrow"
        subtitle="Corporate Social Responsibility"
        description="Our commitment to sustainable development, community empowerment, and positive social impact across the Gulf region."
        backgroundImage="/media/csr-hero.jpg"
        height="lg"
      />

      {/* Impact Metrics */}
      <Section background="sand" padding="md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {csrStats.map((stat, index) => (
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

      {/* Our Initiatives */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Our Impact Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Focused initiatives that create lasting positive change in education, healthcare, environment, and community development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <Card
              key={initiative.title}
              title={initiative.title}
              description={initiative.description}
              className="reveal h-full"
              variant={index % 2 === 1 ? 'featured' : 'default'}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <initiative.icon className={`w-6 h-6 ${
                    index % 2 === 1 ? 'text-white' : 'text-brand-gold'
                  }`} />
                  <span className={`font-semibold ${
                    index % 2 === 1 ? 'text-white' : 'text-brand-ink'
                  }`}>
                    Key Achievements
                  </span>
                </div>
                <div className="space-y-2">
                  {initiative.achievements.map((achievement) => (
                    <div key={achievement} className={`flex items-center space-x-2 text-sm ${
                      index % 2 === 1 ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      <Award className="w-4 h-4" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Vision 2030 Alignment */}
      <Section background="fog" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Aligned with Saudi Vision 2030
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Contributing to the Kingdom's transformation through strategic initiatives that support national development goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vision2030Alignment.map((pillar, index) => (
            <div key={pillar.pillar} className="bg-white p-8 rounded-2xl shadow-card reveal">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-ink mb-4">
                  {pillar.pillar}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="bg-brand-sand px-4 py-2 rounded-lg">
                  <p className="text-brand-gold font-semibold text-sm">
                    {pillar.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sustainability Report */}
      <Section background="white" padding="lg">
        <div className="text-center">
          <h2 className="text-display font-bold text-brand-ink mb-6 reveal">
            Transparency in Action
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto reveal">
            Download our comprehensive sustainability report to learn more about our environmental and social impact initiatives
          </p>
          
          <div className="bg-brand-fog p-8 rounded-2xl max-w-2xl mx-auto reveal">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <h3 className="font-bold text-brand-ink mb-2">
                  2024 Sustainability Report
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive ESG performance metrics and future commitments
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500 mt-2">
                  <span>PDF Format</span>
                  <span>•</span>
                  <span>3.2 MB</span>
                  <span>•</span>
                  <span>48 pages</span>
                </div>
              </div>
              <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                <Download className="w-8 h-8 text-brand-gold" />
              </div>
            </div>
            
            <button className="w-full bg-brand-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Report</span>
            </button>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="ink" padding="lg">
        <div className="text-center">
          <h2 className="text-heading font-bold text-white mb-6 reveal">
            Join Our Impact Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
            Partner with us to create positive change and build a sustainable future for the Gulf region
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Link
              href="/contact"
              className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Partnership Opportunities</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/careers"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
            >
              Join Our Mission
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}