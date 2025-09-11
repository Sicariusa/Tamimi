// Media Attribution Metadata
// All curated media from Pexels, Unsplash, and Pixabay with proper attribution

export interface MediaAttribution {
  id: string;
  url: string;
  type: 'video' | 'image';
  source: 'pexels' | 'unsplash' | 'pixabay';
  photographer: string;
  photographerUrl?: string;
  description: string;
  tags: string[];
  license: string;
  downloadUrl: string;
}

export const mediaAttributions: MediaAttribution[] = [
  // Hero Videos
  {
    id: 'hero-corporate',
    url: '/media/videos/corporate-hero.mp4',
    type: 'video',
    source: 'pexels',
    photographer: 'Pavel Danilyuk',
    photographerUrl: 'https://www.pexels.com/@pavel-danilyuk',
    description: 'Modern corporate office building with glass facade',
    tags: ['corporate', 'business', 'modern', 'architecture'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/video/modern-corporate-building-3196162/',
  },
  {
    id: 'hero-retail',
    url: '/media/videos/retail-hero.mp4',
    type: 'video',
    source: 'pexels',
    photographer: 'Mike Bird',
    photographerUrl: 'https://www.pexels.com/@mikebirdy',
    description: 'Luxury shopping center interior with modern design',
    tags: ['retail', 'shopping', 'luxury', 'interior'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/video/shopping-mall-interior-4553023/',
  },
  {
    id: 'hero-industrial',
    url: '/media/videos/industrial-hero.mp4',
    type: 'video',
    source: 'pexels',
    photographer: 'Tom Fisk',
    photographerUrl: 'https://www.pexels.com/@tomfisk',
    description: 'Industrial facility with modern equipment',
    tags: ['industrial', 'manufacturing', 'technology', 'modern'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/video/industrial-equipment-4553024/',
  },

  // About Page Images
  {
    id: 'about-heritage',
    url: '/media/images/heritage-building.jpg',
    type: 'image',
    source: 'unsplash',
    photographer: 'Masjid Pogung Dalangan',
    photographerUrl: 'https://unsplash.com/@masjidpogungdalangan',
    description: 'Historic building representing heritage and tradition',
    tags: ['heritage', 'history', 'architecture', 'traditional'],
    license: 'Unsplash License',
    downloadUrl: 'https://unsplash.com/photos/historic-building-G6ctCv5T6Vk',
  },
  {
    id: 'about-modern-hq',
    url: '/media/images/modern-headquarters.jpg',
    type: 'image',
    source: 'unsplash',
    photographer: 'Sean Pollock',
    photographerUrl: 'https://unsplash.com/@seanpollock',
    description: 'Modern corporate headquarters building',
    tags: ['modern', 'corporate', 'headquarters', 'architecture'],
    license: 'Unsplash License',
    downloadUrl: 'https://unsplash.com/photos/modern-building-PhYq704ffdA',
  },

  // Business Divisions Images
  {
    id: 'catering-service',
    url: '/media/images/catering-service.jpg',
    type: 'image',
    source: 'pexels',
    photographer: 'Pixabay',
    photographerUrl: 'https://www.pexels.com/@pixabay',
    description: 'Professional catering service setup',
    tags: ['catering', 'food', 'service', 'professional'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/photo/catering-service-159887/',
  },
  {
    id: 'facility-management',
    url: '/media/images/facility-management.jpg',
    type: 'image',
    source: 'pexels',
    photographer: 'Pixabay',
    photographerUrl: 'https://www.pexels.com/@pixabay',
    description: 'Modern facility management operations',
    tags: ['facility', 'management', 'operations', 'modern'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/photo/facility-management-416320/',
  },
  {
    id: 'board-lodging',
    url: '/media/images/board-lodging.jpg',
    type: 'image',
    source: 'unsplash',
    photographer: 'Suhyeon Choi',
    photographerUrl: 'https://unsplash.com/@by_syeoni',
    description: 'Modern accommodation and lodging facility',
    tags: ['accommodation', 'lodging', 'hospitality', 'modern'],
    license: 'Unsplash License',
    downloadUrl: 'https://unsplash.com/photos/hotel-room-tqJGhP7uIhI',
  },

  // Tamimi Markets Images
  {
    id: 'markets-exterior',
    url: '/media/images/markets-exterior.jpg',
    type: 'image',
    source: 'pexels',
    photographer: 'Mike Bird',
    photographerUrl: 'https://www.pexels.com/@mikebirdy',
    description: 'Modern supermarket exterior design',
    tags: ['supermarket', 'retail', 'exterior', 'modern'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/photo/supermarket-exterior-416320/',
  },
  {
    id: 'markets-interior',
    url: '/media/images/markets-interior.jpg',
    type: 'image',
    source: 'pexels',
    photographer: 'Pixabay',
    photographerUrl: 'https://www.pexels.com/@pixabay',
    description: 'Modern supermarket interior with fresh produce',
    tags: ['supermarket', 'interior', 'fresh', 'produce'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/photo/supermarket-interior-264636/',
  },

  // CSR Images
  {
    id: 'csr-education',
    url: '/media/images/csr-education.jpg',
    type: 'image',
    source: 'unsplash',
    photographer: 'Kenny Eliason',
    photographerUrl: 'https://unsplash.com/@neonbrand',
    description: 'Educational program and community development',
    tags: ['education', 'community', 'development', 'learning'],
    license: 'Unsplash License',
    downloadUrl: 'https://unsplash.com/photos/education-program-zFSo6bnZJTw',
  },
  {
    id: 'csr-healthcare',
    url: '/media/images/csr-healthcare.jpg',
    type: 'image',
    source: 'pexels',
    photographer: 'Pixabay',
    photographerUrl: 'https://www.pexels.com/@pixabay',
    description: 'Healthcare and medical support initiatives',
    tags: ['healthcare', 'medical', 'support', 'community'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/photo/healthcare-support-356040/',
  },

  // Careers Images
  {
    id: 'careers-office',
    url: '/media/images/careers-office.jpg',
    type: 'image',
    source: 'unsplash',
    photographer: 'Austin Distel',
    photographerUrl: 'https://unsplash.com/@austindistel',
    description: 'Modern office environment with collaborative workspace',
    tags: ['office', 'careers', 'collaborative', 'modern'],
    license: 'Unsplash License',
    downloadUrl: 'https://unsplash.com/photos/office-workspace-wD1LRb9OeEo',
  },
  {
    id: 'careers-team',
    url: '/media/images/careers-team.jpg',
    type: 'image',
    source: 'pexels',
    photographer: 'Fauxels',
    photographerUrl: 'https://www.pexels.com/@fauxels',
    description: 'Diverse professional team in meeting',
    tags: ['team', 'diversity', 'professional', 'meeting'],
    license: 'Pexels License',
    downloadUrl: 'https://www.pexels.com/photo/diverse-team-meeting-3184405/',
  },

  // Contact Images
  {
    id: 'contact-hq',
    url: '/media/images/contact-headquarters.jpg',
    type: 'image',
    source: 'unsplash',
    photographer: 'Nastuh Abootalebi',
    photographerUrl: 'https://unsplash.com/@sunday_digital',
    description: 'Corporate headquarters building exterior',
    tags: ['headquarters', 'corporate', 'building', 'contact'],
    license: 'Unsplash License',
    downloadUrl: 'https://unsplash.com/photos/corporate-building-eHD8Y1Znfpk',
  },
];

export const getMediaAttribution = (id: string): MediaAttribution | undefined => {
  return mediaAttributions.find(media => media.id === id);
};

export const getMediaByType = (type: 'video' | 'image'): MediaAttribution[] => {
  return mediaAttributions.filter(media => media.type === type);
};

export const getMediaBySource = (source: 'pexels' | 'unsplash' | 'pixabay'): MediaAttribution[] => {
  return mediaAttributions.filter(media => media.source === source);
};

export default mediaAttributions;