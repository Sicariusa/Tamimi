import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  fullWidth = false,
  type = 'button'
}) => {
  const variantClasses = {
    primary: 'bg-gold hover:bg-gold-hover text-ink font-semibold shadow-glow hover:shadow-glow-lg',
    secondary: 'bg-surface-secondary hover:bg-surface-elevated text-ivory border border-line hover:border-gold/30',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-ink',
    ghost: 'text-gold hover:bg-surface-secondary'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const Component = href ? motion.a : motion.button;
  const componentProps = href 
    ? { href }
    : { 
        onClick: disabled || loading ? undefined : onClick, 
        disabled: disabled || loading,
        type 
      };

  return (
    <Component
      className={`
        inline-flex items-center justify-center space-x-2 rounded-lg
        transition-all duration-300 font-medium
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
        ${className}
      `}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      {...componentProps}
    >
      {/* Left Icon */}
      {Icon && iconPosition === 'left' && (
        <motion.div
          animate={loading ? { rotate: 360 } : {}}
          transition={loading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
        >
          <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
        </motion.div>
      )}

      {/* Loading Spinner */}
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Text Content */}
      <span>{children}</span>

      {/* Right Icon */}
      {Icon && iconPosition === 'right' && !loading && (
        <motion.div
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
        </motion.div>
      )}
    </Component>
  );
};

export default Button;