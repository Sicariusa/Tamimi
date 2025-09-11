// Office Locations and Contact Information
export interface Office {
  id: string;
  name: string;
  type: 'headquarters' | 'regional' | 'branch' | 'project';
  country: string;
  city: string;
  address: {
    street: string;
    district?: string;
    postalCode?: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    fax?: string;
    email: string;
  };
  services: string[];
  established: string;
  employees?: number;
  featured: boolean;
}

export const offices: Office[] = [
  // Saudi Arabia - Headquarters
  {
    id: 'riyadh-hq',
    name: 'Riyadh Headquarters',
    type: 'headquarters',
    country: 'Saudi Arabia',
    city: 'Riyadh',
    address: {
      street: 'King Fahd Road, Al Olaya District',
      district: 'Al Olaya',
      postalCode: '11564',
      coordinates: {
        lat: 24.7136,
        lng: 46.6753
      }
    },
    contact: {
      phone: '+966 11 464 0000',
      fax: '+966 11 464 0001',
      email: 'info@tamimigroup.com'
    },
    services: [
      'Corporate Management',
      'Strategic Planning',
      'Financial Services',
      'Human Resources',
      'Legal Affairs',
      'Business Development'
    ],
    established: '1940',
    employees: 2500,
    featured: true
  },

  // Saudi Arabia - Regional Offices
  {
    id: 'jeddah-regional',
    name: 'Jeddah Regional Office',
    type: 'regional',
    country: 'Saudi Arabia',
    city: 'Jeddah',
    address: {
      street: 'Prince Sultan Road, Al Rawdah District',
      district: 'Al Rawdah',
      postalCode: '21442',
      coordinates: {
        lat: 21.5433,
        lng: 39.1728
      }
    },
    contact: {
      phone: '+966 12 663 0000',
      fax: '+966 12 663 0001',
      email: 'jeddah@tamimigroup.com'
    },
    services: [
      'Facility Management',
      'Catering Services',
      'Transportation',
      'Regional Operations'
    ],
    established: '1965',
    employees: 1800,
    featured: true
  },

  {
    id: 'dammam-regional',
    name: 'Dammam Regional Office',
    type: 'regional',
    country: 'Saudi Arabia',
    city: 'Dammam',
    address: {
      street: 'King Saud Road, Al Faisaliyah District',
      district: 'Al Faisaliyah',
      postalCode: '31952',
      coordinates: {
        lat: 26.4207,
        lng: 50.0888
      }
    },
    contact: {
      phone: '+966 13 834 0000',
      fax: '+966 13 834 0001',
      email: 'dammam@tamimigroup.com'
    },
    services: [
      'Industrial Services',
      'Oil & Gas Support',
      'Maintenance Services',
      'Logistics'
    ],
    established: '1968',
    employees: 2200,
    featured: true
  },

  {
    id: 'jubail-industrial',
    name: 'Jubail Industrial Office',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Jubail',
    address: {
      street: 'Industrial City, Phase 2',
      district: 'Industrial Area',
      postalCode: '31961',
      coordinates: {
        lat: 27.0174,
        lng: 49.6593
      }
    },
    contact: {
      phone: '+966 13 341 0000',
      email: 'jubail@tamimigroup.com'
    },
    services: [
      'Industrial Maintenance',
      'Petrochemical Services',
      'Equipment Services',
      'Technical Support'
    ],
    established: '1975',
    employees: 800,
    featured: false
  },

  {
    id: 'yanbu-industrial',
    name: 'Yanbu Industrial Office',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Yanbu',
    address: {
      street: 'Industrial City, Phase 1',
      district: 'Industrial Area',
      postalCode: '46452',
      coordinates: {
        lat: 24.0895,
        lng: 38.0618
      }
    },
    contact: {
      phone: '+966 14 322 0000',
      email: 'yanbu@tamimigroup.com'
    },
    services: [
      'Refinery Services',
      'Industrial Support',
      'Maintenance',
      'Logistics'
    ],
    established: '1980',
    employees: 600,
    featured: false
  },

  // Regional Expansion - GCC
  {
    id: 'kuwait-office',
    name: 'Kuwait Operations',
    type: 'regional',
    country: 'Kuwait',
    city: 'Kuwait City',
    address: {
      street: 'Salmiya, Block 2, Street 5',
      coordinates: {
        lat: 29.3375,
        lng: 48.0758
      }
    },
    contact: {
      phone: '+965 2571 0000',
      email: 'kuwait@tamimigroup.com'
    },
    services: [
      'Facility Management',
      'Catering Services',
      'Support Services'
    ],
    established: '1995',
    employees: 400,
    featured: false
  },

  {
    id: 'bahrain-office',
    name: 'Bahrain Operations',
    type: 'regional',
    country: 'Bahrain',
    city: 'Manama',
    address: {
      street: 'Diplomatic Area, Building 123',
      coordinates: {
        lat: 26.2285,
        lng: 50.5860
      }
    },
    contact: {
      phone: '+973 1753 0000',
      email: 'bahrain@tamimigroup.com'
    },
    services: [
      'Regional Coordination',
      'Business Development',
      'Support Services'
    ],
    established: '1998',
    employees: 200,
    featured: false
  },

  {
    id: 'qatar-office',
    name: 'Qatar Operations',
    type: 'branch',
    country: 'Qatar',
    city: 'Doha',
    address: {
      street: 'West Bay, Tower 2, Floor 15',
      coordinates: {
        lat: 25.2854,
        lng: 51.5310
      }
    },
    contact: {
      phone: '+974 4483 0000',
      email: 'qatar@tamimigroup.com'
    },
    services: [
      'Project Management',
      'Consulting Services',
      'Regional Support'
    ],
    established: '2005',
    employees: 150,
    featured: false
  },

  // Project Offices
  {
    id: 'neom-project',
    name: 'NEOM Project Office',
    type: 'project',
    country: 'Saudi Arabia',
    city: 'NEOM',
    address: {
      street: 'NEOM Development Area',
      coordinates: {
        lat: 28.2639,
        lng: 35.3444
      }
    },
    contact: {
      phone: '+966 11 464 0100',
      email: 'neom@tamimigroup.com'
    },
    services: [
      'Construction Services',
      'Project Support',
      'Logistics',
      'Facility Setup'
    ],
    established: '2020',
    employees: 300,
    featured: false
  }
];

export const getOfficesByCountry = (country: string): Office[] => {
  return offices.filter(office => office.country === country);
};

export const getOfficesByType = (type: Office['type']): Office[] => {
  return offices.filter(office => office.type === type);
};

export const getFeaturedOffices = (): Office[] => {
  return offices.filter(office => office.featured);
};

export const getOfficeById = (id: string): Office | undefined => {
  return offices.find(office => office.id === id);
};

// Countries with offices for filtering
export const countries = [
  { 
    id: 'saudi-arabia', 
    name: 'Saudi Arabia', 
    count: offices.filter(o => o.country === 'Saudi Arabia').length,
    flag: '🇸🇦'
  },
  { 
    id: 'kuwait', 
    name: 'Kuwait', 
    count: offices.filter(o => o.country === 'Kuwait').length,
    flag: '🇰🇼'
  },
  { 
    id: 'bahrain', 
    name: 'Bahrain', 
    count: offices.filter(o => o.country === 'Bahrain').length,
    flag: '🇧🇭'
  },
  { 
    id: 'qatar', 
    name: 'Qatar', 
    count: offices.filter(o => o.country === 'Qatar').length,
    flag: '🇶🇦'
  },
] as const;

export default offices;