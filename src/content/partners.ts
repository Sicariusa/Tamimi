// Strategic Partners and Clients Content
export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'government' | 'energy' | 'industrial' | 'financial' | 'education' | 'healthcare';
  description: string;
  partnership_since?: string;
  website?: string;
  featured: boolean;
}

export const partners: Partner[] = [
  // Government Partners
  {
    id: 'pif',
    name: 'Public Investment Fund',
    logo: '/media/logos/pif-logo.svg',
    category: 'government',
    description: 'Saudi Arabia\'s sovereign wealth fund driving economic transformation',
    partnership_since: '2018',
    website: 'https://www.pif.gov.sa',
    featured: true
  },
  {
    id: 'neom',
    name: 'NEOM',
    logo: '/media/logos/neom-logo.svg',
    category: 'government',
    description: 'Futuristic mega-city project in northwest Saudi Arabia',
    partnership_since: '2020',
    website: 'https://www.neom.com',
    featured: true
  },
  {
    id: 'mod',
    name: 'Ministry of Defense',
    logo: '/media/logos/mod-logo.svg',
    category: 'government',
    description: 'Strategic defense sector partnerships and services',
    partnership_since: '1965',
    featured: false
  },
  {
    id: 'moh',
    name: 'Ministry of Health',
    logo: '/media/logos/moh-logo.svg',
    category: 'healthcare',
    description: 'Healthcare facility management and support services',
    partnership_since: '1970',
    featured: false
  },

  // Energy Sector Partners
  {
    id: 'aramco',
    name: 'Saudi Aramco',
    logo: '/media/logos/aramco-logo.svg',
    category: 'energy',
    description: 'World\'s leading integrated energy and chemicals company',
    partnership_since: '1955',
    website: 'https://www.aramco.com',
    featured: true
  },
  {
    id: 'sabic',
    name: 'SABIC',
    logo: '/media/logos/sabic-logo.svg',
    category: 'industrial',
    description: 'Global leader in diversified chemicals and innovative materials',
    partnership_since: '1962',
    website: 'https://www.sabic.com',
    featured: true
  },
  {
    id: 'yasref',
    name: 'YASREF',
    logo: '/media/logos/yasref-logo.svg',
    category: 'energy',
    description: 'Yanbu Aramco Sinopec Refining Company',
    partnership_since: '2010',
    featured: false
  },
  {
    id: 'aramco-trading',
    name: 'Aramco Trading',
    logo: '/media/logos/aramco-trading-logo.svg',
    category: 'energy',
    description: 'Global energy trading and supply optimization',
    partnership_since: '2018',
    featured: false
  },

  // Industrial Partners
  {
    id: 'maaden',
    name: 'Ma\'aden',
    logo: '/media/logos/maaden-logo.svg',
    category: 'industrial',
    description: 'Saudi Arabian Mining Company - regional mining champion',
    partnership_since: '2008',
    website: 'https://www.maaden.com.sa',
    featured: true
  },
  {
    id: 'sami',
    name: 'SAMI',
    logo: '/media/logos/sami-logo.svg',
    category: 'industrial',
    description: 'Saudi Arabian Military Industries - defense manufacturing',
    partnership_since: '2019',
    featured: false
  },

  // Financial Partners
  {
    id: 'snb',
    name: 'Saudi National Bank',
    logo: '/media/logos/snb-logo.svg',
    category: 'financial',
    description: 'Leading financial institution in Saudi Arabia',
    partnership_since: '1975',
    featured: false
  },
  {
    id: 'riyad-bank',
    name: 'Riyad Bank',
    logo: '/media/logos/riyad-bank-logo.svg',
    category: 'financial',
    description: 'Major commercial bank providing comprehensive services',
    partnership_since: '1980',
    featured: false
  },

  // Education Partners
  {
    id: 'ksu',
    name: 'King Saud University',
    logo: '/media/logos/ksu-logo.svg',
    category: 'education',
    description: 'Premier educational institution in Saudi Arabia',
    partnership_since: '1968',
    featured: false
  },
  {
    id: 'kacst',
    name: 'King Abdulaziz City for Science & Technology',
    logo: '/media/logos/kacst-logo.svg',
    category: 'education',
    description: 'National science and technology research center',
    partnership_since: '1985',
    featured: false
  },

  // Regional Partners
  {
    id: 'qatar-petroleum',
    name: 'QatarEnergy',
    logo: '/media/logos/qatar-energy-logo.svg',
    category: 'energy',
    description: 'State-owned petroleum company of Qatar',
    partnership_since: '2005',
    featured: false
  },
  {
    id: 'adnoc',
    name: 'ADNOC',
    logo: '/media/logos/adnoc-logo.svg',
    category: 'energy',
    description: 'Abu Dhabi National Oil Company',
    partnership_since: '2012',
    featured: false
  },
  {
    id: 'koc',
    name: 'Kuwait Oil Company',
    logo: '/media/logos/koc-logo.svg',
    category: 'energy',
    description: 'National oil company of Kuwait',
    partnership_since: '2008',
    featured: false
  }
];

export const getFeaturedPartners = (): Partner[] => {
  return partners.filter(partner => partner.featured);
};

export const getPartnersByCategory = (category: Partner['category']): Partner[] => {
  return partners.filter(partner => partner.category === category);
};

export const getPartnerById = (id: string): Partner | undefined => {
  return partners.find(partner => partner.id === id);
};

// Partner categories for filtering
export const partnerCategories = [
  { id: 'government', name: 'Government', count: partners.filter(p => p.category === 'government').length },
  { id: 'energy', name: 'Energy', count: partners.filter(p => p.category === 'energy').length },
  { id: 'industrial', name: 'Industrial', count: partners.filter(p => p.category === 'industrial').length },
  { id: 'financial', name: 'Financial', count: partners.filter(p => p.category === 'financial').length },
  { id: 'education', name: 'Education', count: partners.filter(p => p.category === 'education').length },
  { id: 'healthcare', name: 'Healthcare', count: partners.filter(p => p.category === 'healthcare').length },
] as const;

export default partners;