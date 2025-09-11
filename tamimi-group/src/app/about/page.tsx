import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Lightbulb, Shield, Heart, Linkedin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { values, leadership } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Us | Tamimi Group',
  description: 'Learn about Tamimi Group\'s 80-year legacy of excellence, our values, leadership team, and commitment to Vision 2030.',
};

const timeline = [
  {
    decade: '1940s',
    year: '1945',
    title: 'Foundation',
    description: 'Tamimi Group founded with a vision to serve the emerging Gulf region',
    image: '/media/timeline/1945.jpg'
  },
  {
    decade: '1970s',
    year: '1975',
    title: 'Expansion',
    description: 'Expanded operations across Saudi Arabia and established key partnerships',
    image: '/media/timeline/1975.jpg'
  },
  {
    decade: '2000s',
    year: '2005',
    title: 'Regional Growth',
    description: 'Extended presence to Bahrain, Qatar, and Kuwait, becoming truly regional',
    image: '/media/timeline/2005.jpg'
  },
  {
    decade: 'Today',
    year: '2025',
    title: 'Modern Excellence',
    description: 'Leading multinational conglomerate with 21,000+ employees across 4 countries',
    image: '/media/timeline/2025.jpg'
  }
];

const iconMap = {
  Award,
  Lightbulb,
  Shield,
  Heart,
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Excellence Since 1945"
        subtitle="Our Story"
        description="From humble beginnings to regional leadership, Tamimi Group has been at the forefront of Gulf development for eight decades."
        backgroundImage="/media/about-hero.jpg"
        height="lg"
      />

      {/* Legacy to Vision Split */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                {/* Heritage photo placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">Heritage Photo (1945)</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-xl shadow-card p-4">
                <div className="w-full h-full bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-2xl">1945</span>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <h2 className="text-display font-bold text-brand-ink mb-6">
              Built on Tradition, Driven by Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              What began as a small family business in 1945 has grown into one of the Gulf's most trusted conglomerates. Our journey reflects the transformation of the region itself – from emerging markets to global powerhouses.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we serve the region's most ambitious projects and prestigious clients, from ARAMCO's industrial facilities to NEOM's futuristic developments, always maintaining the values that built our foundation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-brand-sand rounded-xl">
                <div className="text-3xl font-bold text-brand-gold mb-2">80+</div>
                <div className="text-sm text-brand-ink font-medium">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-brand-sand rounded-xl">
                <div className="text-3xl font-bold text-brand-gold mb-2">4</div>
                <div className="text-sm text-brand-ink font-medium">Gulf Countries</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="fog" padding="xl" id="timeline">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Eight Decades of Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Our journey through the decades, growing alongside the Gulf region's remarkable transformation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-gold/30 hidden lg:block"></div>

          <div className="space-y-16">
            {timeline.map((period, index) => (
              <div key={period.year} className="relative">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`reveal ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="inline-block bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {period.decade}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-ink mb-3">
                      {period.year} - {period.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {period.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`reveal ${index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'}`}>
                    <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-600 font-medium">{period.year} Image</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-gold rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Grid */}
      <Section background="white" padding="xl" id="values">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            The principles that guide every decision and define our culture across all business divisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];
            return (
              <div key={value.name} className="text-center reveal">
                <div className="w-20 h-20 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group hover:bg-brand-gold hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-brand-ink mb-3">
                  {value.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section background="sand" padding="xl" id="leadership">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Experienced leaders driving our vision forward and shaping the future of Gulf services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <div key={leader.name} className="text-center reveal">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden bg-gray-100">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <Link
                  href={leader.linkedin}
                  className="absolute bottom-2 right-2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white hover:bg-brand-gold/90 transition-colors duration-200"
                  aria-label={`${leader.name} LinkedIn profile`}
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-2">
                {leader.name}
              </h3>
              <p className="text-brand-gold font-medium mb-4">
                {leader.role}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vision 2030 Alignment */}
      <Section background="ink" padding="xl" id="vision">
        <div className="text-center">
          <h2 className="text-display font-bold text-white mb-6 reveal">
            Aligned with Vision 2030
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto reveal">
            As a proud Saudi company, we actively contribute to the Kingdom's Vision 2030 through job creation, 
            economic diversification, and sustainable business practices
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center reveal">
              <div className="text-4xl font-bold text-brand-gold mb-2">70%</div>
              <div className="text-white font-medium">Saudi Nationals Employed</div>
            </div>
            <div className="text-center reveal">
              <div className="text-4xl font-bold text-brand-gold mb-2">500+</div>
              <div className="text-white font-medium">Scholarships Provided</div>
            </div>
            <div className="text-center reveal">
              <div className="text-4xl font-bold text-brand-gold mb-2">30%</div>
              <div className="text-white font-medium">Carbon Footprint Reduction</div>
            </div>
          </div>

          <Link
            href="/csr"
            className="inline-flex items-center space-x-2 bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 reveal"
          >
            <span>Learn About Our CSR Initiatives</span>
            <Award className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}