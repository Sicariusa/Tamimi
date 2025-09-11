import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import MapboxMap from '@/components/MapboxMap';
import ContactForm from '@/components/ContactForm';
import { offices } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact Us | Tamimi Group',
  description: 'Get in touch with Tamimi Group. Find our regional offices, contact information, and send us a message about your business needs.',
};

const regionalOffices = [
  {
    region: 'Saudi Arabia (Headquarters)',
    offices: [
      {
        city: 'Dhahran',
        address: 'Al Khobar - Dhahran Highway, Dhahran 34457, Saudi Arabia',
        phone: '+966 13 891 2345',
        email: 'info@tamimigroup.com',
        hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
        departments: ['Executive Office', 'Business Development', 'HR', 'Finance']
      },
      {
        city: 'Riyadh',
        address: 'King Fahd Road, Olaya District, Riyadh 11372, Saudi Arabia',
        phone: '+966 11 234 5678',
        email: 'riyadh@tamimigroup.com',
        hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
        departments: ['Government Relations', 'Catering Operations', 'Facility Management']
      }
    ]
  },
  {
    region: 'Bahrain',
    offices: [
      {
        city: 'Manama',
        address: 'Diplomatic Area, Building 123, Manama 317, Bahrain',
        phone: '+973 1723 4567',
        email: 'bahrain@tamimigroup.com',
        hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
        departments: ['Regional Operations', 'Business Development']
      }
    ]
  },
  {
    region: 'Qatar',
    offices: [
      {
        city: 'Doha',
        address: 'West Bay, Tower 456, Doha 23456, Qatar',
        phone: '+974 4489 1234',
        email: 'qatar@tamimigroup.com',
        hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
        departments: ['Regional Operations', 'Project Management']
      }
    ]
  },
  {
    region: 'Kuwait',
    offices: [
      {
        city: 'Kuwait City',
        address: 'Salmiya, Commercial Complex 789, Kuwait City 13009, Kuwait',
        phone: '+965 2573 8901',
        email: 'kuwait@tamimigroup.com',
        hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
        departments: ['Regional Operations', 'Facility Management']
      }
    ]
  }
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Get in Touch"
        subtitle="Contact Us"
        description="Ready to discuss your project or partnership opportunities? Our regional teams are here to help you achieve operational excellence."
        backgroundImage="/media/contact-hero.jpg"
        height="md"
      />

      {/* Contact Form and Quick Info */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="mb-8 reveal">
              <h2 className="text-display font-bold text-brand-ink mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="text-xl font-bold text-brand-ink mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-brand-gold mt-1" />
                  <div>
                    <p className="font-medium text-brand-ink">Main Line</p>
                    <a
                      href="tel:+966138912345"
                      className="text-gray-600 hover:text-brand-gold transition-colors"
                    >
                      +966 13 891 2345
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-brand-gold mt-1" />
                  <div>
                    <p className="font-medium text-brand-ink">General Inquiries</p>
                    <a
                      href="mailto:info@tamimigroup.com"
                      className="text-gray-600 hover:text-brand-gold transition-colors"
                    >
                      info@tamimigroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-gold mt-1" />
                  <div>
                    <p className="font-medium text-brand-ink">Headquarters</p>
                    <p className="text-gray-600">
                      Al Khobar - Dhahran Highway<br />
                      Dhahran 34457, Saudi Arabia
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-gold mt-1" />
                  <div>
                    <p className="font-medium text-brand-ink">Business Hours</p>
                    <p className="text-gray-600">
                      Sunday - Thursday<br />
                      8:00 AM - 5:00 PM (AST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-brand-sand p-6 rounded-2xl reveal">
              <h4 className="font-bold text-brand-ink mb-3">
                24/7 Emergency Support
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                For urgent operational matters or emergencies at our managed facilities:
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+966138912300"
                  className="flex items-center space-x-2 text-brand-gold font-medium hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>+966 13 891 2300</span>
                </a>
                <a
                  href="mailto:emergency@tamimigroup.com"
                  className="flex items-center space-x-2 text-brand-gold font-medium hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>emergency@tamimigroup.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Regional Offices Map */}
      <Section background="fog" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Our Regional Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Strategically located across the Gulf region to serve you better
          </p>
        </div>

        <div className="reveal mb-12">
          <MapboxMap
            markers={offices}
            fitBoundsOnLoad
            height="500px"
            className="rounded-2xl shadow-card"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((office, index) => (
            <div key={`${office.country}-${office.city}`} className="bg-white p-6 rounded-xl shadow-card reveal">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-brand-ink">
                    {office.city}, {office.country}
                  </h3>
                  {office.type === 'HQ' && (
                    <span className="inline-block bg-brand-gold text-white text-xs px-2 py-1 rounded-full mt-1">
                      Headquarters
                    </span>
                  )}
                </div>
                <MapPin className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">{office.address}</p>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span className="text-gray-600">{office.phone}</span>
                </div>
                {office.employees && (
                  <p className="text-brand-gold font-medium">
                    {office.employees.toLocaleString()} employees
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Regional Directory */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Regional Directory
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Detailed contact information for all our regional offices and departments
          </p>
        </div>

        <div className="space-y-6">
          {regionalOffices.map((region, index) => (
            <details key={region.region} className="group bg-brand-fog rounded-2xl reveal">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-brand-sand transition-colors duration-200">
                <h3 className="text-xl font-bold text-brand-ink">{region.region}</h3>
                <ChevronDown className="w-5 h-5 text-brand-gold group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {region.offices.map((office, officeIndex) => (
                    <div key={office.city} className="bg-white p-6 rounded-xl shadow-soft">
                      <h4 className="font-bold text-brand-ink mb-4">{office.city} Office</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                          <p className="text-gray-600 text-sm">{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-brand-gold" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-gray-600 text-sm hover:text-brand-gold transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-brand-gold" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-gray-600 text-sm hover:text-brand-gold transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-brand-gold mt-1" />
                          <p className="text-gray-600 text-sm">{office.hours}</p>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-brand-ink mb-2">Departments:</p>
                          <div className="flex flex-wrap gap-1">
                            {office.departments.map((dept) => (
                              <span
                                key={dept}
                                className="px-2 py-1 bg-brand-gold/10 text-brand-gold text-xs rounded-full"
                              >
                                {dept}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}