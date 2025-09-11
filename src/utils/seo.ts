// SEO and Meta Management Utilities
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  twitterCard?: 'summary' | 'summary_large_image';
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export class SEOManager {
  private static defaultConfig: Partial<SEOConfig> = {
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterSite: '@TamimiGroup',
    keywords: [
      'Tamimi Group',
      'Saudi Arabia',
      'Business Services',
      'Catering',
      'Facility Management',
      'Vision 2030',
      'KSA',
      'Gulf Companies'
    ]
  };

  static updatePageSEO(config: SEOConfig) {
    const finalConfig = { ...this.defaultConfig, ...config };

    // Update document title
    document.title = finalConfig.title;

    // Clear existing meta tags
    this.clearExistingTags();

    // Set basic meta tags
    this.setMetaTag('description', finalConfig.description);
    
    if (finalConfig.keywords?.length) {
      this.setMetaTag('keywords', finalConfig.keywords.join(', '));
    }

    if (finalConfig.canonicalUrl) {
      this.setLinkTag('canonical', finalConfig.canonicalUrl);
    }

    // Set Open Graph tags
    this.setMetaTag('og:title', finalConfig.ogTitle || finalConfig.title, 'property');
    this.setMetaTag('og:description', finalConfig.ogDescription || finalConfig.description, 'property');
    this.setMetaTag('og:type', finalConfig.ogType!, 'property');
    this.setMetaTag('og:url', finalConfig.canonicalUrl || window.location.href, 'property');
    this.setMetaTag('og:site_name', 'Tamimi Group', 'property');
    this.setMetaTag('og:locale', 'en_US', 'property');

    if (finalConfig.ogImage) {
      this.setMetaTag('og:image', finalConfig.ogImage, 'property');
      this.setMetaTag('og:image:alt', finalConfig.ogTitle || finalConfig.title, 'property');
      this.setMetaTag('og:image:width', '1200', 'property');
      this.setMetaTag('og:image:height', '630', 'property');
    }

    // Set Twitter Card tags
    this.setMetaTag('twitter:card', finalConfig.twitterCard!);
    this.setMetaTag('twitter:site', finalConfig.twitterSite!);
    this.setMetaTag('twitter:title', finalConfig.ogTitle || finalConfig.title);
    this.setMetaTag('twitter:description', finalConfig.ogDescription || finalConfig.description);
    
    if (finalConfig.ogImage) {
      this.setMetaTag('twitter:image', finalConfig.ogImage);
    }

    // Set robots meta tag
    const robotsContent = [];
    if (finalConfig.noindex) robotsContent.push('noindex');
    if (finalConfig.nofollow) robotsContent.push('nofollow');
    if (robotsContent.length === 0) robotsContent.push('index', 'follow');
    
    this.setMetaTag('robots', robotsContent.join(', '));

    // Set structured data
    if (finalConfig.structuredData) {
      this.setStructuredData(finalConfig.structuredData);
    }
  }

  private static setMetaTag(name: string, content: string, attribute: string = 'name') {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }

  private static setLinkTag(rel: string, href: string) {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    
    link.href = href;
  }

  private static setStructuredData(data: object) {
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(data);
  }

  private static clearExistingTags() {
    // Remove existing meta tags that we manage
    const tagsToRemove = [
      'meta[name="description"]',
      'meta[name="keywords"]',
      'meta[name="robots"]',
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'link[rel="canonical"]',
      'script[type="application/ld+json"]'
    ];

    tagsToRemove.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  }
}

// Pre-defined SEO configurations for pages
export const pageSEOConfigs = {
  home: {
    title: 'Tamimi Group - Leading Business Excellence in Saudi Arabia Since 1940',
    description: 'Tamimi Group: 80+ years of excellence across 30+ companies serving Saudi Arabia. Leading provider of catering, facility management, retail, and business services supporting Vision 2030.',
    keywords: ['Tamimi Group', 'Saudi Arabia business', 'Vision 2030 partner', 'KSA services', 'Gulf region companies'],
    ogImage: '/media/images/og-home.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tamimi Group",
      "url": "https://tamimigroup.com",
      "logo": "https://tamimigroup.com/TamimiGroup.png",
      "description": "Leading business group in Saudi Arabia providing comprehensive services across multiple sectors",
      "foundingDate": "1940",
      "numberOfEmployees": "21000+",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "King Fahd Road, Al Olaya District",
        "addressLocality": "Riyadh",
        "postalCode": "11564",
        "addressCountry": "SA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966-11-464-0000",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://linkedin.com/company/tamimi-group",
        "https://twitter.com/tamimigroup"
      ]
    }
  },

  about: {
    title: 'About Tamimi Group - 80+ Years of Excellence in Saudi Arabia',
    description: 'Discover Tamimi Group\'s journey since 1940. Learn about our leadership, values, Vision 2030 alignment, and commitment to building Saudi Arabia\'s future across diverse business sectors.',
    keywords: ['Tamimi Group history', 'Saudi Arabia business leaders', 'corporate values', 'Vision 2030', 'business excellence'],
    ogImage: '/media/images/og-about.jpg'
  },

  divisions: {
    title: 'Business Divisions - Comprehensive Services Across Industries | Tamimi Group',
    description: 'Explore Tamimi Group\'s diverse business portfolio: catering services, facility management, board & lodging, contracting, industrial services, and transportation solutions.',
    keywords: ['business divisions', 'catering services', 'facility management', 'contracting Saudi Arabia', 'industrial services'],
    ogImage: '/media/images/og-divisions.jpg'
  },

  markets: {
    title: 'Tamimi Markets - Leading Supermarket Chain in Saudi Arabia',
    description: 'Tamimi Markets: 110+ stores nationwide, serving millions of customers with fresh products and exceptional service. Part of PIF portfolio supporting Saudi retail sector growth.',
    keywords: ['Tamimi Markets', 'Saudi supermarket', 'retail Saudi Arabia', 'PIF investment', 'grocery stores KSA'],
    ogImage: '/media/images/og-markets.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Tamimi Markets",
      "url": "https://tamimigroup.com/markets",
      "parentOrganization": "Tamimi Group",
      "numberOfEmployees": "5000+",
      "description": "Leading supermarket chain in Saudi Arabia"
    }
  },

  csr: {
    title: 'Corporate Social Responsibility - Building Communities | Tamimi Group',
    description: 'Tamimi Group\'s CSR initiatives: education, healthcare, sustainability, and community development. Supporting Vision 2030 through responsible business practices.',
    keywords: ['CSR Saudi Arabia', 'corporate social responsibility', 'community development', 'sustainability', 'Vision 2030 CSR'],
    ogImage: '/media/images/og-csr.jpg'
  },

  news: {
    title: 'News & Investor Relations - Latest Updates | Tamimi Group',
    description: 'Stay updated with Tamimi Group\'s latest news, press releases, financial reports, and investor information. Transparent communication with stakeholders.',
    keywords: ['Tamimi Group news', 'investor relations', 'financial reports', 'press releases', 'corporate updates'],
    ogImage: '/media/images/og-news.jpg'
  },

  careers: {
    title: 'Careers at Tamimi Group - Join 21,000+ Professionals in Saudi Arabia',
    description: 'Build your career with Tamimi Group. Explore opportunities across our business divisions, enjoy comprehensive benefits, and contribute to Saudi Arabia\'s transformation.',
    keywords: ['careers Saudi Arabia', 'jobs Tamimi Group', 'employment KSA', 'professional development', 'Saudization'],
    ogImage: '/media/images/og-careers.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tamimi Group",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Career Opportunities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "JobPosting",
              "title": "Various Positions Available",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Tamimi Group"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA"
                }
              }
            }
          }
        ]
      }
    }
  },

  contact: {
    title: 'Contact Tamimi Group - Get in Touch with Our Team',
    description: 'Contact Tamimi Group offices across the GCC. Find locations, phone numbers, and partnership opportunities. Connect with Saudi Arabia\'s leading business group.',
    keywords: ['contact Tamimi Group', 'Saudi Arabia offices', 'business partnerships', 'GCC locations', 'corporate contact'],
    ogImage: '/media/images/og-contact.jpg'
  }
};

// Utility function to generate breadcrumb structured data
export const generateBreadcrumbData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Utility to track page views (for analytics)
export const trackPageView = (pageName: string, additionalData?: object) => {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href,
      ...additionalData
    });
  }

  // Custom analytics tracking can be added here
  console.log(`Page view tracked: ${pageName}`, {
    title: document.title,
    url: window.location.href,
    ...additionalData
  });
};

export default SEOManager;