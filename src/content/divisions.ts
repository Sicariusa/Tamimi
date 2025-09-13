// Business Divisions Content
export interface Division {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  services: string[];
  keyStats: {
    label: string;
    value: string;
    description: string;
  }[];
  clients: string[];
  caseStudies?: {
    title: string;
    description: string;
    results: string[];
  }[];
  heroImage: string;
  icon: string;
  color: string;
  established?: string;
}

export const divisions: Division[] = [
  {
    id: 'catering',
    name: 'Catering Services',
    slug: 'catering-services',
    description: 'Comprehensive catering solutions serving government, corporate, and institutional clients across the Kingdom with exceptional quality and service standards.',
    shortDescription: 'Premium catering solutions for corporate and institutional clients',
    services: [
      'Corporate Catering',
      'Institutional Food Services',
      'Event Catering',
      'Meal Planning & Nutrition',
      'Kitchen Management',
      'Food Safety & Quality Control'
    ],
    keyStats: [
      { label: 'Daily Meals', value: '50,000+', description: 'Meals served daily across facilities' },
      { label: 'Client Satisfaction', value: '98%', description: 'Customer satisfaction rating' },
      { label: 'Facilities Served', value: '200+', description: 'Active catering locations' }
    ],
    clients: [
      'Saudi Aramco',
      'Ministry of Defense',
      'SABIC',
      'King Saud University',
      'Various Government Ministries'
    ],
    caseStudies: [
      {
        title: 'Saudi Aramco Comprehensive Catering',
        description: 'Providing full-service catering for multiple Aramco facilities',
        results: [
          'Served 2M+ meals annually',
          'Achieved 99.5% food safety compliance',
          'Reduced operational costs by 15%'
        ]
      }
    ],
    heroImage: '/images/divisions/catering-hero.jpg',
    icon: 'UtensilsCrossed',
    color: '#C9A227',
    established: '1965'
  },

  {
    id: 'facility-management',
    name: 'Facility Management',
    slug: 'facility-management',
    description: 'Integrated facility management services providing comprehensive solutions for maintenance, operations, and support services across diverse sectors.',
    shortDescription: 'Comprehensive facility management and maintenance solutions',
    services: [
      'Preventive Maintenance',
      'HVAC Systems Management',
      'Cleaning & Housekeeping',
      'Security Services',
      'Landscaping & Grounds',
      'Energy Management',
      'Space Planning & Optimization'
    ],
    keyStats: [
      { label: 'Facilities Managed', value: '500+', description: 'Properties under management' },
      { label: 'Service Technicians', value: '2,000+', description: 'Certified maintenance staff' },
      { label: 'Uptime Achievement', value: '99.2%', description: 'System availability rate' }
    ],
    clients: [
      'King Abdulaziz City for Science & Technology',
      'Ministry of Health',
      'Commercial Banking Sector',
      'Educational Institutions',
      'Residential Complexes'
    ],
    heroImage: '/images/divisions/facility-management.jpg',
    icon: 'Settings',
    color: '#2563EB',
    established: '1978'
  },

  {
    id: 'board-lodging',
    name: 'Board & Lodging',
    slug: 'board-lodging',
    description: 'Premium accommodation services providing comfortable and secure lodging solutions for corporate clients, government entities, and institutions.',
    shortDescription: 'Quality accommodation and lodging services',
    services: [
      'Corporate Housing',
      'Guest Accommodation',
      'Residential Management',
      'Hospitality Services',
      'Facility Maintenance',
      'Security & Reception',
      'Meal Services Integration'
    ],
    keyStats: [
      { label: 'Accommodation Units', value: '5,000+', description: 'Managed residential units' },
      { label: 'Occupancy Rate', value: '92%', description: 'Average occupancy across facilities' },
      { label: 'Guest Satisfaction', value: '96%', description: 'Positive feedback rating' }
    ],
    clients: [
      'Saudi Aramco',
      'SABIC',
      'Various Government Ministries',
      'International Corporations',
      'Educational Institutions'
    ],
    heroImage: '/images/divisions/board-lodging.jpg',
    icon: 'Building2',
    color: '#059669',
    established: '1972'
  },

  {
    id: 'contracting',
    name: 'Contracting & Construction',
    slug: 'contracting-construction',
    description: 'Full-service contracting solutions delivering high-quality construction projects from concept to completion with expertise in commercial and industrial sectors.',
    shortDescription: 'Professional contracting and construction services',
    services: [
      'General Contracting',
      'Project Management',
      'Design-Build Services',
      'Infrastructure Development',
      'Renovation & Refurbishment',
      'MEP Systems Installation',
      'Quality Control & Safety'
    ],
    keyStats: [
      { label: 'Projects Completed', value: '1,000+', description: 'Successful project deliveries' },
      { label: 'Safety Record', value: '0.12', description: 'Incident rate per 200K hours' },
      { label: 'On-Time Delivery', value: '95%', description: 'Projects completed on schedule' }
    ],
    clients: [
      'Saudi Aramco',
      'SABIC',
      'Ministry of Defense',
      'Private Sector Clients',
      'Government Entities'
    ],
    heroImage: '/images/divisions/construction-site.jpg',
    icon: 'HardHat',
    color: '#DC2626',
    established: '1968'
  },

  {
    id: 'industrial-services',
    name: 'Industrial Services',
    slug: 'industrial-services',
    description: 'Specialized industrial support services including maintenance, logistics, and technical solutions for the oil & gas, petrochemical, and manufacturing sectors.',
    shortDescription: 'Specialized industrial maintenance and technical services',
    services: [
      'Industrial Maintenance',
      'Equipment Services',
      'Logistics & Supply Chain',
      'Technical Support',
      'Shutdown Services',
      'Welding & Fabrication',
      'Instrumentation & Control'
    ],
    keyStats: [
      { label: 'Industrial Sites', value: '50+', description: 'Active service locations' },
      { label: 'Certified Technicians', value: '800+', description: 'Skilled technical workforce' },
      { label: 'Equipment Uptime', value: '98.5%', description: 'Maintained operational efficiency' }
    ],
    clients: [
      'Saudi Aramco',
      'SABIC',
      'YASREF',
      'Petrochemical Companies',
      'Manufacturing Facilities'
    ],
    heroImage: '/images/divisions/industrial-facility.jpg',
    icon: 'Cog',
    color: '#7C3AED',
    established: '1975'
  },

  {
    id: 'transportation',
    name: 'Transportation Services',
    slug: 'transportation-services',
    description: 'Comprehensive transportation solutions including fleet management, employee transportation, and logistics services with focus on safety and reliability.',
    shortDescription: 'Reliable transportation and fleet management services',
    services: [
      'Employee Transportation',
      'Fleet Management',
      'Logistics Services',
      'Vehicle Maintenance',
      'Route Optimization',
      'Driver Training & Certification',
      'GPS Tracking & Monitoring'
    ],
    keyStats: [
      { label: 'Fleet Size', value: '1,200+', description: 'Vehicles in active service' },
      { label: 'Daily Passengers', value: '15,000+', description: 'Employees transported daily' },
      { label: 'Safety Rating', value: '99.8%', description: 'Accident-free operations' }
    ],
    clients: [
      'Saudi Aramco',
      'SABIC',
      'Government Ministries',
      'Educational Institutions',
      'Corporate Clients'
    ],
    heroImage: '/images/divisions/transportation-fleet.jpg',
    icon: 'Truck',
    color: '#EA580C',
    established: '1980'
  }
];

export const getDivisionBySlug = (slug: string): Division | undefined => {
  return divisions.find(division => division.slug === slug);
};

export const getDivisionById = (id: string): Division | undefined => {
  return divisions.find(division => division.id === id);
};

export default divisions;