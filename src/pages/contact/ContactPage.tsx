import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import siteData from '../../content/data';

// Import luxury components
import HeroSection from '../../components/ui/HeroSection';
import MapboxMap from '../../components/ui/MapboxMap';
import ContactForm from '../../components/ui/ContactForm';
import Accordion from '../../components/ui/Accordion';
import Section from '../../components/ui/Section';

const ContactPage: React.FC = () => {
  // Apply SEO for contact page
  useSEO('contact');

  // Office markers for the map
  const officeMarkers = siteData.offices.map(office => ({
    id: office.id,
    coordinates: office.coordinates,
    title: office.name,
    description: `${office.address} • ${office.phone}`,
    type: 'office' as const,
    color: office.type === 'headquarters' ? '#C9A227' : '#2563EB'
  }));

  // Group offices by country for accordion
  const officesByCountry = siteData.offices.reduce((acc, office) => {
    if (!acc[office.country]) {
      acc[office.country] = [];
    }
    acc[office.country].push(office);
    return acc;
  }, {} as Record<string, typeof siteData.offices>);

  const accordionItems = Object.entries(officesByCountry).map(([country, offices]) => ({
    id: country.toLowerCase().replace(' ', '-'),
    title: country,
    badge: `${offices.length} office${offices.length > 1 ? 's' : ''}`,
    content: (
      <div className="grid gap-6">
        {offices.map((office) => (
          <div key={office.id} className="bg-surface-tertiary rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-heading font-bold text-ivory text-lg mb-2">
                  {office.name}
                </h4>
                <div className="flex items-center text-steel text-sm mb-2">
                  <MapPin size={14} className="mr-2 text-gold" />
                  {office.address}
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                office.type === 'headquarters' 
                  ? 'bg-gold/20 text-gold'
                  : office.type === 'regional'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-green-500/20 text-green-400'
              }`}>
                {office.type.charAt(0).toUpperCase() + office.type.slice(1)}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-steel">
                <Phone size={14} className="mr-2 text-gold" />
                <a 
                  href={`tel:${office.phone}`}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {office.phone}
                </a>
              </div>
              <div className="flex items-center text-steel">
                <Mail size={14} className="mr-2 text-gold" />
                <a 
                  href={`mailto:${office.email}`}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {office.email}
                </a>
              </div>
              <div className="flex items-center text-steel">
                <Building2 size={14} className="mr-2 text-gold" />
                {office.employees} employees
              </div>
              <div className="flex items-center text-steel">
                <span className="text-gold mr-2">Est.</span>
                {office.established}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero Section */}
      <HeroSection
        mediaUrl="/media/images/contact-headquarters.jpg"
        mediaType="image"
        title="Get in Touch|Let's Connect"
        subtitle="Contact Us"
        description="Whether you're interested in partnership opportunities, career prospects, or have questions about our services, we're here to help. Reach out to our team across the GCC region."
        buttons={[
          {
            text: 'Send a Message',
            variant: 'primary',
            icon: 'arrow',
            onClick: () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
          }
        ]}
        height="medium"
        textPosition="center"
      />

      {/* Interactive Map */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Locations
            <span className="block text-gold">Across the GCC</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Visit our offices across the region or connect with us digitally. 
            We're always ready to discuss new opportunities and partnerships.
          </motion.p>
        </div>

        <MapboxMap
          markers={officeMarkers}
          height="500px"
          center={[46.6753, 24.7136]}
          zoom={5}
          showControls={true}
        />
      </Section>

      {/* Contact Form and Directory */}
      <Section background="default" padding="xl" id="contact-form">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h3 className="font-heading font-bold text-3xl text-ivory mb-4">
                Send us a Message
              </h3>
              <p className="text-steel leading-relaxed">
                Have a question or want to discuss a partnership? 
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <ContactForm />
          </div>

          {/* Regional Directory */}
          <div>
            <div className="mb-8">
              <h3 className="font-heading font-bold text-3xl text-ivory mb-4">
                Regional Offices
              </h3>
              <p className="text-steel leading-relaxed">
                Find contact information for our offices across the GCC region. 
                Each office is equipped to handle local inquiries and partnerships.
              </p>
            </div>

            <Accordion
              items={accordionItems}
              allowMultiple={false}
              defaultOpen={['saudi-arabia']}
            />
          </div>
        </div>
      </Section>

      {/* Quick Contact Section */}
      <Section background="secondary" padding="xl">
        <motion.div
          className="glass backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-line text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-heading font-bold text-2xl lg:text-3xl text-ivory mb-8">
            Need Immediate Assistance?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Phone className="text-gold" size={32} />
              </div>
              <h4 className="font-heading font-bold text-ivory mb-2">Call Us</h4>
              <a 
                href="tel:+966114640000"
                className="text-gold hover:text-gold-hover transition-colors duration-300 font-medium"
              >
                +966 11 464 0000
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Mail className="text-gold" size={32} />
              </div>
              <h4 className="font-heading font-bold text-ivory mb-2">Email Us</h4>
              <a 
                href="mailto:info@tamimigroup.com"
                className="text-gold hover:text-gold-hover transition-colors duration-300 font-medium"
              >
                info@tamimigroup.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <MapPin className="text-gold" size={32} />
              </div>
              <h4 className="font-heading font-bold text-ivory mb-2">Visit Us</h4>
              <p className="text-steel text-sm">
                King Fahd Road, Al Olaya<br />
                Riyadh 11564, Saudi Arabia
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default ContactPage;