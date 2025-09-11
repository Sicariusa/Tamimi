import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Division } from '../../content/divisions';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface DivisionCTAProps {
  division: Division;
}

const DivisionCTA: React.FC<DivisionCTAProps> = ({ division }) => {
  return (
    <Section background="default" padding="xl">
      <motion.div
        className="glass backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-line text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6">
          Ready to Discuss
          <span className="block text-gold">Your Project?</span>
        </h2>
        
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed mb-12">
          Let's explore how our {division.name.toLowerCase()} expertise can 
          help you achieve your goals. Our team is ready to provide customized 
          solutions for your specific needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            variant="primary"
            size="lg"
            icon={MessageCircle}
            href="/contact"
          >
            Start a Conversation
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            icon={ArrowRight}
            href="/divisions"
          >
            View Other Divisions
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default DivisionCTA;