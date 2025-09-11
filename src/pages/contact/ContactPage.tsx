import React from 'react';
import { motion } from 'framer-motion';
import ContactHero from '../../components/contact/ContactHero';
import ContactMap from '../../components/contact/ContactMap';
import ContactForm from '../../components/contact/ContactForm';
import RegionalDirectory from '../../components/contact/RegionalDirectory';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <ContactHero />
      <ContactMap />
      <div className="container-luxury py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <RegionalDirectory />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;