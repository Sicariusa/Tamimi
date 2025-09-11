import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Building } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = ''
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateField = (name: keyof FormData, value: string): string | null => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : null;
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email address' : null;
      case 'subject':
        return value.length < 5 ? 'Subject must be at least 5 characters' : null;
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : null;
      default:
        return null;
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (name: keyof FormData, value: string) => {
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Partial<FormData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'company') { // Company is optional
        const error = validateField(key as keyof FormData, value);
        if (error) newErrors[key as keyof FormData] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      name: 'name' as keyof FormData,
      label: 'Full Name',
      type: 'text',
      icon: User,
      placeholder: 'Enter your full name',
      required: true
    },
    {
      name: 'email' as keyof FormData,
      label: 'Email Address',
      type: 'email',
      icon: Mail,
      placeholder: 'Enter your email address',
      required: true
    },
    {
      name: 'company' as keyof FormData,
      label: 'Company (Optional)',
      type: 'text',
      icon: Building,
      placeholder: 'Enter your company name',
      required: false
    },
    {
      name: 'subject' as keyof FormData,
      label: 'Subject',
      type: 'text',
      icon: MessageSquare,
      placeholder: 'What is this regarding?',
      required: true
    }
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`text-center py-12 ${className}`}
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-400" size={40} />
        </div>
        <h3 className="font-heading font-bold text-ivory text-2xl mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-steel leading-relaxed mb-8">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-gold hover:bg-gold-hover text-ink px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Form Fields */}
      {inputFields.map((field, index) => (
        <motion.div
          key={field.name}
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <label className={`absolute left-3 transition-all duration-300 pointer-events-none ${
            focusedField === field.name || formData[field.name]
              ? 'top-2 text-xs text-gold'
              : 'top-1/2 transform -translate-y-1/2 text-steel'
          }`}>
            {field.label} {field.required && '*'}
          </label>
          
          <div className="relative">
            <field.icon 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-steel" 
              size={20} 
            />
            <input
              type={field.type}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onFocus={() => setFocusedField(field.name)}
              onBlur={(e) => handleBlur(field.name, e.target.value)}
              className={`w-full pt-6 pb-2 px-3 pr-12 bg-surface-secondary border rounded-lg text-ivory focus:outline-none transition-all duration-300 ${
                errors[field.name] 
                  ? 'border-red-500 focus:ring-2 focus:ring-red-500/50' 
                  : 'border-line focus:border-gold focus:ring-2 focus:ring-gold/20'
              }`}
              placeholder=""
            />
          </div>
          
          {errors[field.name] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-400 text-sm mt-2"
            >
              <AlertCircle size={14} />
              <span>{errors[field.name]}</span>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Message Field */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label className={`absolute left-3 transition-all duration-300 pointer-events-none ${
          focusedField === 'message' || formData.message
            ? 'top-2 text-xs text-gold'
            : 'top-4 text-steel'
        }`}>
          Message *
        </label>
        
        <textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onFocus={() => setFocusedField('message')}
          onBlur={(e) => handleBlur('message', e.target.value)}
          rows={6}
          className={`w-full pt-6 pb-2 px-3 bg-surface-secondary border rounded-lg text-ivory focus:outline-none resize-none transition-all duration-300 ${
            errors.message 
              ? 'border-red-500 focus:ring-2 focus:ring-red-500/50' 
              : 'border-line focus:border-gold focus:ring-2 focus:ring-gold/20'
          }`}
          placeholder=""
        />
        
        {errors.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-red-400 text-sm mt-2"
          >
            <AlertCircle size={14} />
            <span>{errors.message}</span>
          </motion.div>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold hover:bg-gold-hover disabled:opacity-50 disabled:cursor-not-allowed text-ink font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Send Message</span>
          </>
        )}
      </motion.button>

      {/* Form Footer */}
      <motion.div
        className="text-center text-steel text-sm pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-gold hover:text-gold-hover transition-colors duration-300">
          Privacy Policy
        </a>
        {' '}and{' '}
        <a href="/terms" className="text-gold hover:text-gold-hover transition-colors duration-300">
          Terms of Service
        </a>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;