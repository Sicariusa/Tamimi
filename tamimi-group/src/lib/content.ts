export const partners = [
  { name: 'Saudi Aramco', sector: 'Energy', logo: '/logos/aramco.svg' },
  { name: 'Public Investment Fund', sector: 'Investment', logo: '/logos/pif.svg' },
  { name: 'Mitsui & Co.', sector: 'Trading', logo: '/logos/mitsui.svg' },
  { name: 'General Electric', sector: 'Technology', logo: '/logos/ge.svg' },
  { name: 'NEOM', sector: 'Mega Projects', logo: '/logos/neom.svg' },
  { name: 'Red Sea Global', sector: 'Tourism', logo: '/logos/redseaglobal.svg' },
  { name: 'SABIC', sector: 'Chemicals', logo: '/logos/sabic.svg' },
  { name: 'Saudi Vision 2030', sector: 'Government', logo: '/logos/vision2030.svg' },
];

export interface Division {
  slug: string;
  name: string;
  shortName: string;
  hero: string;
  description: string;
  services: string[];
  clients: string[];
  kpis: { label: string; value: string; suffix?: string }[];
  features: string[];
}

export const divisions: Division[] = [
  {
    slug: 'catering',
    name: 'Catering Services',
    shortName: 'Catering',
    hero: '/media/divisions/catering.mp4',
    description: 'Leading provider of industrial, airline, and institutional catering services across the Gulf region.',
    services: ['Industrial Catering', 'Airline Catering', 'Hospital Catering', 'Event Catering', 'Mobile Food Services'],
    clients: ['ARAMCO', 'NEOM', 'King Fahd International Airport', 'Ministry of Health'],
    kpis: [
      { label: 'Meals Served Daily', value: '250', suffix: 'k+' },
      { label: 'Active Sites', value: '120', suffix: '+' },
      { label: 'Years of Excellence', value: '35', suffix: '+' }
    ],
    features: ['24/7 Operations', 'HACCP Certified', 'Nutritionist-Approved Menus', 'Sustainable Sourcing']
  },
  {
    slug: 'facility-management',
    name: 'Facility Management',
    shortName: 'Facility Management',
    hero: '/media/divisions/fm.mp4',
    description: 'Comprehensive facility management solutions for healthcare, industrial, and commercial sectors.',
    services: ['Housekeeping', 'Maintenance & Engineering', 'Landscaping', 'Utilities Management', 'Security Services'],
    clients: ['King Fahd Medical City', 'King Abdulaziz International Airport', 'ARAMCO Facilities'],
    kpis: [
      { label: 'Assets Managed', value: '10', suffix: 'k+' },
      { label: 'Maintenance Requests', value: '99.5', suffix: '% SLA' },
      { label: 'Client Satisfaction', value: '98', suffix: '%' }
    ],
    features: ['IoT-Enabled Monitoring', 'Preventive Maintenance', 'Energy Optimization', '24/7 Support']
  },
  {
    slug: 'board-lodging',
    name: 'Board & Lodging',
    shortName: 'Board & Lodging',
    hero: '/media/divisions/lodging.mp4',
    description: 'Premium workforce housing and accommodation solutions for major infrastructure projects.',
    services: ['Workforce Housing', 'Premium Camps', 'Executive Accommodations', 'Recreational Facilities'],
    clients: ['NEOM Project', 'ARAMCO Camps', 'Red Sea Project', 'QIDDIYA'],
    kpis: [
      { label: 'Bed Capacity', value: '50', suffix: 'k+' },
      { label: 'Occupancy Rate', value: '95', suffix: '%' },
      { label: 'Guest Satisfaction', value: '4.8', suffix: '/5' }
    ],
    features: ['Modern Amenities', 'Recreational Centers', 'High-Speed Internet', 'Laundry Services']
  }
];

export interface Office {
  country: string;
  city: string;
  lat: number;
  lng: number;
  type?: 'HQ' | 'Regional' | 'Branch';
  address: string;
  phone: string;
  employees?: number;
}

export const offices: Office[] = [
  { 
    country: 'Saudi Arabia', 
    city: 'Dhahran', 
    lat: 26.2361, 
    lng: 50.0393, 
    type: 'HQ',
    address: 'Al Khobar - Dhahran Highway, Dhahran 34457',
    phone: '+966 13 891 2345',
    employees: 12000
  },
  { 
    country: 'Bahrain', 
    city: 'Manama', 
    lat: 26.2235, 
    lng: 50.5876,
    type: 'Regional',
    address: 'Diplomatic Area, Manama 317',
    phone: '+973 1723 4567',
    employees: 3500
  },
  { 
    country: 'Qatar', 
    city: 'Doha', 
    lat: 25.2854, 
    lng: 51.5310,
    type: 'Regional',
    address: 'West Bay, Doha 23456',
    phone: '+974 4489 1234',
    employees: 2800
  },
  { 
    country: 'Kuwait', 
    city: 'Kuwait City', 
    lat: 29.3759, 
    lng: 47.9774,
    type: 'Branch',
    address: 'Salmiya, Kuwait City 13009',
    phone: '+965 2573 8901',
    employees: 1200
  },
];

export interface Store {
  id: string;
  city: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  hours: string;
  services: string[];
}

export const stores: Store[] = [
  {
    id: 'riyadh-olaya',
    city: 'Riyadh',
    name: 'Tamimi Markets Olaya',
    lat: 24.692,
    lng: 46.675,
    address: 'Olaya Street, Riyadh 11372',
    phone: '+966 11 234 5678',
    hours: '7:00 AM - 12:00 AM',
    services: ['Grocery', 'Pharmacy', 'Bakery', 'Deli']
  },
  {
    id: 'jeddah-tahlia',
    city: 'Jeddah',
    name: 'Tamimi Markets Tahlia',
    lat: 21.543,
    lng: 39.173,
    address: 'Tahlia Street, Jeddah 21454',
    phone: '+966 12 345 6789',
    hours: '7:00 AM - 12:00 AM',
    services: ['Grocery', 'Pharmacy', 'Electronics', 'Home & Garden']
  },
  {
    id: 'dammam-corniche',
    city: 'Dammam',
    name: 'Tamimi Markets Corniche',
    lat: 26.4207,
    lng: 50.0888,
    address: 'Corniche Road, Dammam 31423',
    phone: '+966 13 456 7890',
    hours: '7:00 AM - 12:00 AM',
    services: ['Grocery', 'Bakery', 'Butchery', 'Seafood']
  }
];

export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  level: 'Entry' | 'Mid' | 'Senior' | 'Executive';
  description: string;
  requirements: string[];
  url: string;
}

export const jobs: Job[] = [
  {
    id: 'facility-manager-riyadh',
    title: 'Senior Facility Manager',
    location: 'Riyadh',
    department: 'Operations',
    type: 'Full-time',
    level: 'Senior',
    description: 'Lead facility management operations for major healthcare and commercial clients.',
    requirements: ['10+ years facility management experience', 'Engineering degree preferred', 'IFMA certification', 'Fluent in Arabic and English'],
    url: '#'
  },
  {
    id: 'procurement-specialist',
    title: 'Procurement Specialist',
    location: 'Dhahran',
    department: 'Supply Chain',
    type: 'Full-time',
    level: 'Mid',
    description: 'Manage procurement activities for catering and facility management divisions.',
    requirements: ['5+ years procurement experience', 'Supply chain certification', 'ERP systems knowledge', 'Negotiation skills'],
    url: '#'
  },
  {
    id: 'regional-manager-bahrain',
    title: 'Regional Manager - Bahrain',
    location: 'Manama',
    department: 'Management',
    type: 'Full-time',
    level: 'Executive',
    description: 'Oversee all Tamimi Group operations in Bahrain market.',
    requirements: ['15+ years management experience', 'MBA preferred', 'GCC market knowledge', 'Leadership skills'],
    url: '#'
  }
];

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'News' | 'Press Release' | 'Investor';
  image: string;
  url: string;
  featured?: boolean;
}

export const news: NewsItem[] = [
  {
    id: 'expansion-110-stores',
    title: 'Tamimi Markets Reaches 110+ Store Milestone Across Gulf Region',
    excerpt: 'Strategic expansion continues with new locations in Saudi Arabia, Bahrain, and Qatar, reinforcing market leadership.',
    date: '2025-03-01',
    category: 'News',
    image: '/media/news/expansion-2025.jpg',
    url: '#',
    featured: true
  },
  {
    id: 'csr-scholarship-milestone',
    title: 'Tamimi Group Awards 500th Scholarship Under Education Initiative',
    excerpt: 'Landmark achievement in supporting Saudi youth education and Vision 2030 human capital development goals.',
    date: '2025-02-15',
    category: 'News',
    image: '/media/news/scholarship-program.jpg',
    url: '#'
  },
  {
    id: 'sustainability-report-2024',
    title: 'Annual Sustainability Report Shows 30% Reduction in Carbon Footprint',
    excerpt: 'Comprehensive environmental initiatives across all business divisions deliver measurable impact.',
    date: '2025-02-01',
    category: 'Press Release',
    image: '/media/news/sustainability-2024.jpg',
    url: '#'
  }
];

export const stats = [
  { label: 'Companies', value: 30, suffix: '+' },
  { label: 'Employees', value: 21000, suffix: '+' },
  { label: 'Years of Excellence', value: 80, suffix: '+' },
  { label: 'Countries', value: 4, suffix: '' }
];

export const values = [
  {
    name: 'Excellence',
    description: 'Delivering superior quality in every service and interaction',
    icon: 'Award'
  },
  {
    name: 'Innovation',
    description: 'Embracing technology and creative solutions for better outcomes',
    icon: 'Lightbulb'
  },
  {
    name: 'Integrity',
    description: 'Upholding the highest ethical standards in all business practices',
    icon: 'Shield'
  },
  {
    name: 'Community',
    description: 'Contributing to the development and prosperity of our communities',
    icon: 'Heart'
  }
];

export const leadership = [
  {
    name: 'Abdullah Al-Tamimi',
    role: 'Chairman & CEO',
    bio: 'Visionary leader with over 30 years of experience building Tamimi Group into the Gulf region\'s premier service conglomerate.',
    image: '/media/leadership/abdullah-tamimi.jpg',
    linkedin: '#'
  },
  {
    name: 'Sarah Al-Rashid',
    role: 'Chief Operating Officer',
    bio: 'Strategic operations expert driving operational excellence and digital transformation across all business divisions.',
    image: '/media/leadership/sarah-rashid.jpg',
    linkedin: '#'
  },
  {
    name: 'Mohammed Al-Fahad',
    role: 'Chief Financial Officer',
    bio: 'Financial strategist with deep expertise in Gulf markets and sustainable business growth.',
    image: '/media/leadership/mohammed-fahad.jpg',
    linkedin: '#'
  }
];

export const testimonials = [
  {
    name: 'Ahmed Al-Mansouri',
    role: 'Facility Manager, ARAMCO',
    content: 'Tamimi Group has been our trusted partner for over 15 years. Their commitment to excellence and innovation continues to exceed our expectations.',
    image: '/media/testimonials/ahmed-mansouri.jpg'
  },
  {
    name: 'Fatima Al-Zahra',
    role: 'Operations Director, King Fahd Medical City',
    content: 'The quality of facility management services provided by Tamimi Group has significantly improved our operational efficiency and patient satisfaction.',
    image: '/media/testimonials/fatima-zahra.jpg'
  },
  {
    name: 'Omar Al-Khaldi',
    role: 'Project Manager, NEOM',
    content: 'Working with Tamimi Group on our accommodation and catering needs has been exceptional. They understand the scale and complexity of mega projects.',
    image: '/media/testimonials/omar-khaldi.jpg'
  }
];