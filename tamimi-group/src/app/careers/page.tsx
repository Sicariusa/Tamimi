import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Users, Award, TrendingUp, Heart } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { jobs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Careers | Tamimi Group',
  description: 'Join Tamimi Group and build your career with the Gulf region\'s leading service conglomerate. Explore opportunities across our business divisions.',
};

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Market-leading salaries with performance bonuses and comprehensive benefits package',
    icon: Award
  },
  {
    title: 'Career Growth',
    description: 'Clear advancement paths with leadership development and international opportunities',
    icon: TrendingUp
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements with generous vacation and family support policies',
    icon: Heart
  },
  {
    title: 'Learning & Development',
    description: 'Continuous training programs, certifications, and educational support',
    icon: Users
  }
];

export default function Careers() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Build Your Future With Us"
        subtitle="Careers at Tamimi Group"
        description="Join 21,000+ professionals who are shaping the future of Gulf services. Discover opportunities to grow, innovate, and make a meaningful impact."
        backgroundImage="/media/careers-hero.jpg"
        height="lg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#jobs"
            className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>View Open Positions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
          >
            General Inquiries
          </Link>
        </div>
      </PageHero>

      {/* Why Tamimi */}
      <Section background="sand" padding="xl" id="why-tamimi">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Why Choose Tamimi Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Be part of a legacy company that values excellence, innovation, and the growth of every team member
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center reveal">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-bold text-brand-ink mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section background="white" padding="xl" id="jobs">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Current Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Explore career opportunities across our business divisions and regional offices
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={job.id} className="bg-brand-fog p-6 rounded-2xl hover:shadow-card transition-shadow duration-300 reveal">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-brand-ink mb-1">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <span>•</span>
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.level === 'Senior' ? 'bg-purple-100 text-purple-700' :
                        job.level === 'Mid' ? 'bg-blue-100 text-blue-700' :
                        job.level === 'Executive' ? 'bg-red-100 text-red-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {job.level} Level
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-brand-ink mb-2">Key Requirements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {job.requirements.slice(0, 4).map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-6">
                  <button className="bg-brand-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-white border border-gray-200 text-brand-ink px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see the perfect role? We're always looking for exceptional talent.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-brand-ink text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-ink/90 transition-colors duration-200"
          >
            <span>Submit General Application</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>

      {/* Employee Testimonials */}
      <Section background="fog" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            What Our Team Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Hear from our employees about their experience working at Tamimi Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Al-Mahmoud',
              role: 'Senior Operations Manager',
              department: 'Facility Management',
              quote: 'The growth opportunities here are incredible. I started as a coordinator and now lead a team of 50+ professionals across multiple sites.',
              years: '8 years'
            },
            {
              name: 'Ahmed Al-Rashid',
              role: 'Executive Chef',
              department: 'Catering Services',
              quote: 'Working with world-class facilities and serving prestigious clients like ARAMCO has elevated my culinary career beyond expectations.',
              years: '6 years'
            },
            {
              name: 'Fatima Al-Zahra',
              role: 'Regional HR Director',
              department: 'Human Resources',
              quote: 'The company truly invests in its people. The leadership development programs have prepared me for challenges I never imagined.',
              years: '12 years'
            }
          ].map((testimonial, index) => (
            <Card
              key={testimonial.name}
              title={testimonial.name}
              description={`"${testimonial.quote}"`}
              className="reveal"
              variant={index === 1 ? 'featured' : 'default'}
            >
              <div className="space-y-2">
                <div className={`font-semibold ${index === 1 ? 'text-white' : 'text-brand-gold'}`}>
                  {testimonial.role}
                </div>
                <div className={`text-sm ${index === 1 ? 'text-white/80' : 'text-gray-500'}`}>
                  {testimonial.department} • {testimonial.years}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Application Process */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Our Hiring Process
          </h2>
          <p className="text-xl text-gray-600 reveal">
            A transparent, fair process designed to find the best fit for both you and our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { step: '01', title: 'Application', desc: 'Submit your application and resume through our portal' },
            { step: '02', title: 'Review', desc: 'Our HR team reviews your qualifications and experience' },
            { step: '03', title: 'Interview', desc: 'Meet with hiring managers and potential team members' },
            { step: '04', title: 'Offer', desc: 'Receive your offer and begin your Tamimi journey' }
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
    </>
  );
}