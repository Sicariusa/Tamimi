'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { animateReveal } from '@/lib/animation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  division: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  division: '',
};

const divisions = [
  { value: '', label: 'Select a division' },
  { value: 'catering', label: 'Catering Services' },
  { value: 'facility-management', label: 'Facility Management' },
  { value: 'board-lodging', label: 'Board & Lodging' },
  { value: 'markets', label: 'Tamimi Markets' },
  { value: 'general', label: 'General Inquiry' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      animateReveal('.form-field', { stagger: 0.1, delay: 0.2 });
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll just show success
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: keyof FormData) => `
    w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/20
    ${errors[fieldName] 
      ? 'border-red-300 focus:border-red-400' 
      : 'border-gray-200 focus:border-brand-gold'
    }
  `;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label htmlFor="firstName" className="block text-sm font-medium text-brand-ink mb-2">
            First Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`${inputClasses('firstName')} pl-10`}
              placeholder="Your first name"
            />
          </div>
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.firstName}</span>
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="lastName" className="block text-sm font-medium text-brand-ink mb-2">
            Last Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`${inputClasses('lastName')} pl-10`}
              placeholder="Your last name"
            />
          </div>
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.lastName}</span>
            </p>
          )}
        </div>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label htmlFor="email" className="block text-sm font-medium text-brand-ink mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${inputClasses('email')} pl-10`}
              placeholder="your.email@company.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="phone" className="block text-sm font-medium text-brand-ink mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`${inputClasses('phone')} pl-10`}
              placeholder="+966 XX XXX XXXX"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Company and Division */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-field">
          <label htmlFor="company" className="block text-sm font-medium text-brand-ink mb-2">
            Company
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={`${inputClasses('company')} pl-10`}
              placeholder="Your company name"
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="division" className="block text-sm font-medium text-brand-ink mb-2">
            Division of Interest
          </label>
          <select
            id="division"
            name="division"
            value={formData.division}
            onChange={handleInputChange}
            className={inputClasses('division')}
          >
            {divisions.map((division) => (
              <option key={division.value} value={division.value}>
                {division.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject */}
      <div className="form-field">
        <label htmlFor="subject" className="block text-sm font-medium text-brand-ink mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={inputClasses('subject')}
          placeholder="Brief description of your inquiry"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.subject}</span>
          </p>
        )}
      </div>

      {/* Message */}
      <div className="form-field">
        <label htmlFor="message" className="block text-sm font-medium text-brand-ink mb-2">
          Message *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className={`${inputClasses('message')} pl-10 resize-none`}
            placeholder="Please provide details about your requirements, timeline, and any specific needs..."
          />
        </div>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-4 h-4" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="form-field">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-brand-gold hover:bg-brand-gold/90 shadow-gold hover:shadow-lg'
          } text-white`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-green-800 font-medium">Message sent successfully!</p>
            <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <div>
            <p className="text-red-800 font-medium">Failed to send message</p>
            <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
          </div>
        </div>
      )}
    </form>
  );
}