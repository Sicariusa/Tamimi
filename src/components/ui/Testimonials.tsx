import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Carousel from './Carousel';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  department: string;
  quote: string;
  avatar: string;
  years: number;
  featured: boolean;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  title = "What Our Team Says",
  subtitle = "Hear from the people who make our success possible",
  autoPlay = true,
  className = ''
}) => {
  const testimonialCards = testimonials.map((testimonial) => (
    <motion.div
      key={testimonial.id}
      className="luxury-card p-8 h-full flex flex-col justify-between text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
          <Quote className="text-gold" size={24} />
        </div>
      </div>

      {/* Quote Text */}
      <blockquote className="text-ivory text-lg leading-relaxed mb-8 flex-1">
        "{testimonial.quote}"
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-line pt-6">
        {/* Avatar Placeholder */}
        <div className="w-16 h-16 bg-surface-tertiary rounded-full mx-auto mb-4 overflow-hidden border-2 border-gold/20">
          <div className="w-full h-full bg-gradient-to-br from-gold/20 to-surface-tertiary flex items-center justify-center">
            <div className="text-gold text-xl">👤</div>
          </div>
        </div>

        <h4 className="font-heading font-bold text-ivory text-lg mb-1">
          {testimonial.name}
        </h4>
        
        <p className="text-gold font-medium mb-2">
          {testimonial.position}
        </p>
        
        <div className="text-steel text-sm mb-3">
          {testimonial.department} • {testimonial.years} years
        </div>

        {/* Star Rating */}
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className="text-gold fill-current"
            />
          ))}
        </div>
      </div>
    </motion.div>
  ));

  return (
    <div className={className}>
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {title.split('|')[0]}
          {title.includes('|') && (
            <span className="block text-gold">{title.split('|')[1]}</span>
          )}
        </motion.h2>
        <motion.p 
          className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Testimonials Carousel */}
      <Carousel
        autoPlay={autoPlay}
        autoPlayInterval={6000}
        showDots={true}
        showArrows={true}
        infinite={true}
        itemsPerView={testimonials.length > 2 ? 3 : 1}
        gap={32}
      >
        {testimonialCards}
      </Carousel>
    </div>
  );
};

export default Testimonials;