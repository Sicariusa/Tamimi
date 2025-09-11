import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, MapPin, TrendingUp, Award } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import StatCounter from '@/components/StatCounter';
import { divisions, Division } from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return divisions.map((division) => ({
    slug: division.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const division = divisions.find((d) => d.slug === slug);

  if (!division) {
    return {
      title: 'Division Not Found | Tamimi Group',
    };
  }

  return {
    title: `${division.name} | Tamimi Group`,
    description: division.description,
  };
}

export default async function DivisionPage({ params }: Props) {
  const { slug } = await params;
  const division = divisions.find((d) => d.slug === slug);

  if (!division) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={division.name}
        subtitle={division.shortName}
        description={division.description}
        backgroundImage={division.hero}
        height="lg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/divisions"
            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
          >
            View All Divisions
          </Link>
        </div>
      </PageHero>

      {/* KPI Strip */}
      <Section background="sand" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {division.kpis.map((kpi, index) => (
            <StatCounter
              key={kpi.label}
              value={parseInt(kpi.value)}
              label={kpi.label}
              suffix={kpi.suffix || ''}
              className="reveal"
            />
          ))}
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Comprehensive solutions designed to meet the most demanding requirements of our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {division.services.map((service, index) => (
            <Card
              key={service}
              title={service}
              description={`Professional ${service.toLowerCase()} services delivered with excellence and reliability.`}
              variant={index === Math.floor(division.services.length / 2) ? 'featured' : 'default'}
              className="reveal"
            >
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-600">24/7 Support Available</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Studies / Flagship Clients */}
      <Section background="fog" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Flagship Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Delivering excellence for the region's most prestigious organizations and ambitious projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {division.clients.map((client, index) => (
            <div key={client} className="reveal">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-ink mb-3">
                      {client}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Providing comprehensive {division.shortName.toLowerCase()} solutions that support critical operations and enhance operational efficiency.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Multi-year partnership</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>Proven results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Features */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Why Choose Our {division.shortName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Advanced capabilities and proven methodologies that set us apart in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {division.features.map((feature, index) => (
            <div key={feature} className="text-center reveal">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-semibold text-brand-ink mb-2">{feature}</h3>
              <p className="text-gray-600 text-sm">
                Industry-leading standards and practices ensuring optimal outcomes
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Overview */}
      <Section background="sand" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            A systematic methodology that ensures consistent quality and exceeds expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Assessment', desc: 'Comprehensive evaluation of your requirements and site conditions' },
            { step: '02', title: 'Planning', desc: 'Detailed project planning with clear timelines and deliverables' },
            { step: '03', title: 'Implementation', desc: 'Professional execution with continuous monitoring and quality control' },
            { step: '04', title: 'Optimization', desc: 'Ongoing improvement and optimization for maximum efficiency' }
          ].map((phase, index) => (
            <div key={phase.step} className="text-center reveal">
              <div className="w-16 h-16 bg-brand-gold text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {phase.step}
              </div>
              <h3 className="font-semibold text-brand-ink mb-3">{phase.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="ink" padding="lg">
        <div className="text-center">
          <h2 className="text-heading font-bold text-white mb-6 reveal">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
            Let our {division.shortName.toLowerCase()} experts help you achieve operational excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Link
              href="/contact"
              className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/divisions"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
            >
              Explore Other Divisions
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}