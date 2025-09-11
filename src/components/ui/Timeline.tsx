import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineEvent {
  id: string;
  decade: string;
  year: string;
  title: string;
  description: string;
  image: string;
  achievements: string[];
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ events, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const x = useTransform(scrollXProgress, [0, 1], [0, -100 * (events.length - 1)]);

  return (
    <div className={`relative ${className}`}>
      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        <motion.div
          className="flex space-x-8 pb-8"
          style={{ width: `${events.length * 400}px` }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex-shrink-0 w-80"
              style={{ scrollSnapAlign: 'start' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              {/* Timeline Card */}
              <motion.div
                className="luxury-card p-6 h-full group cursor-pointer"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                {/* Decade Badge */}
                <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {event.decade}
                </div>

                {/* Image */}
                <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-surface-tertiary">
                  <div className="w-full h-full bg-gradient-to-br from-gold/20 to-surface-tertiary flex items-center justify-center">
                    <div className="text-gold/60 text-center">
                      <div className="text-4xl mb-2">📅</div>
                      <div className="text-sm">{event.year}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-bold text-ivory text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-steel leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {event.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-steel text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < events.length - 1 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-line" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {events.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-steel rounded-full"
            animate={{
              backgroundColor: scrollXProgress.get() > index / events.length ? '#C9A227' : '#5E646E'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Navigation Hint */}
      <motion.div
        className="text-center mt-4 text-steel text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ← Scroll horizontally to explore our journey →
      </motion.div>
    </div>
  );
};

export default Timeline;