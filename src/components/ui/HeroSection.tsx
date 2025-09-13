import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroButton {
  text: string;
  variant: 'primary' | 'secondary';
  icon?: 'arrow' | 'play';
  onClick?: () => void;
  href?: string;
}

interface HeroSectionProps {
  mediaUrl: string;
  mediaType: 'video' | 'image';
  poster?: string;
  title: string;
  subtitle?: string;
  description: string;
  buttons?: HeroButton[];
  overlay?: 'dark' | 'gradient' | 'light';
  textPosition?: 'left' | 'center' | 'right';
  height?: 'screen' | 'large' | 'medium';
  parallax?: boolean;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mediaUrl,
  mediaType,
  poster,
  title,
  subtitle,
  description,
  buttons = [],
  overlay = 'gradient',
  textPosition = 'left',
  height = 'screen',
  parallax = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const y = useTransform(scrollY, [0, 500], [0, parallax ? 150 : 0]);
  const scale = useTransform(scrollY, [0, 500], [1.1, 1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  
  // Treat any non-light overlay as "on-image" (use inverse/white text)
  const onImage = overlay !== 'light';

  useEffect(() => {
    if (videoRef.current && mediaType === 'video') {
      const video = videoRef.current;
      video.play().catch(console.error);
      
      // Ensure video loops smoothly
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    }
  }, [mediaType]);

  const heightClasses = {
    screen: 'min-h-screen',
    large: 'h-[80vh] min-h-[600px]',
    medium: 'h-[60vh] min-h-[500px]'
  };

  const overlayClasses = {
    dark: 'bg-black/60',
    gradient: 'bg-gradient-to-br from-black/70 via-black/50 to-black/70',
    light: 'bg-white/20'
  };

  const textAlignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'arrow':
        return <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />;
      case 'play':
        return <Play size={20} />;
      default:
        return null;
    }
  };

  const renderButton = (button: HeroButton, index: number) => {
    const baseClasses = "px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group";
    const variantClasses = {
      primary: "bg-gold hover:bg-gold-hover text-ink shadow-glow hover:shadow-glow-lg hover:scale-105",
      secondary: onImage
        ? "border-2 border-white text-white hover:bg-white hover:text-ink backdrop-blur-sm"
        : "border-2 border-line text-text-primary hover:bg-jet/5"
    };

    const content = (
      <>
        <span>{button.text}</span>
        {button.icon && renderIcon(button.icon)}
      </>
    );

    const className = `${baseClasses} ${variantClasses[button.variant]}`;

    if (button.href) {
      return (
        <motion.a
          key={index}
          href={button.href}
          className={className}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        key={index}
        onClick={button.onClick}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.button>
    );
  };

  return (
    <section 
      ref={containerRef}
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Media Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {mediaType === 'video' ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={poster}
          >
            <source src={mediaUrl} type="video/mp4" />
            {poster && <img src={poster} alt="Video poster" className="w-full h-full object-cover" />}
          </video>
        ) : (
          <img
            src={mediaUrl}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,162,39,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-luxury"
        style={{ opacity }}
      >
        <div className={`max-w-5xl flex flex-col ${textAlignClasses[textPosition]} ${onImage ? 'text-text-inverse' : 'text-text-primary'}`}>
          {/* Subtitle */}
          {subtitle && (
            <motion.div
              className="text-gold font-semibold text-lg lg:text-xl mb-4 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {subtitle}
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            className={`font-heading font-black text-5xl lg:text-7xl xl:text-8xl leading-none mb-6 ${onImage ? 'text-text-inverse' : 'text-ivory'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {title.split('\n').map((line, index) => (
              <span key={index} className="block">
                {line.includes('|') ? (
                  <>
                    {line.split('|')[0]}
                    <span className="text-gradient-gold">{line.split('|')[1]}</span>
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className={`text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl ${onImage ? 'text-text-inverse/80' : 'text-steel'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-6">
              {buttons.map(renderButton)}
            </div>
          )}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gold rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;