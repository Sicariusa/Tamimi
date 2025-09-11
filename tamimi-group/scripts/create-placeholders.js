const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder
function createSVGPlaceholder(width, height, text, color = '#C9A227') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}" opacity="0.1"/>
  <rect width="100%" height="100%" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="10,5"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="16" fill="${color}" font-weight="bold">
    ${text}
  </text>
</svg>`;
}

// Placeholder definitions
const placeholders = [
  // Hero images
  { path: 'public/media/hero-video.jpg', width: 1920, height: 1080, text: 'Hero Video Placeholder' },
  { path: 'public/media/about-hero.jpg', width: 1920, height: 800, text: 'About Hero Image' },
  { path: 'public/media/divisions-hero.jpg', width: 1920, height: 800, text: 'Divisions Hero Image' },
  { path: 'public/media/markets-hero.jpg', width: 1920, height: 800, text: 'Markets Hero Image' },
  { path: 'public/media/csr-hero.jpg', width: 1920, height: 800, text: 'CSR Hero Image' },
  { path: 'public/media/news-hero.jpg', width: 1920, height: 800, text: 'News Hero Image' },
  { path: 'public/media/careers-hero.jpg', width: 1920, height: 800, text: 'Careers Hero Image' },
  { path: 'public/media/contact-hero.jpg', width: 1920, height: 800, text: 'Contact Hero Image' },
  
  // Division videos
  { path: 'public/media/divisions/catering.jpg', width: 1200, height: 800, text: 'Catering Services' },
  { path: 'public/media/divisions/fm.jpg', width: 1200, height: 800, text: 'Facility Management' },
  { path: 'public/media/divisions/lodging.jpg', width: 1200, height: 800, text: 'Board & Lodging' },
  
  // Timeline images
  { path: 'public/media/timeline/1945.jpg', width: 600, height: 400, text: '1945 - Foundation' },
  { path: 'public/media/timeline/1975.jpg', width: 600, height: 400, text: '1975 - Expansion' },
  { path: 'public/media/timeline/2005.jpg', width: 600, height: 400, text: '2005 - Regional Growth' },
  { path: 'public/media/timeline/2025.jpg', width: 600, height: 400, text: '2025 - Modern Excellence' },
  
  // Leadership photos
  { path: 'public/media/leadership/abdullah-tamimi.jpg', width: 400, height: 400, text: 'Abdullah Al-Tamimi' },
  { path: 'public/media/leadership/sarah-rashid.jpg', width: 400, height: 400, text: 'Sarah Al-Rashid' },
  { path: 'public/media/leadership/mohammed-fahad.jpg', width: 400, height: 400, text: 'Mohammed Al-Fahad' },
  
  // News images
  { path: 'public/media/news/expansion-2025.jpg', width: 800, height: 600, text: 'Store Expansion' },
  { path: 'public/media/news/scholarship-program.jpg', width: 800, height: 600, text: 'Scholarship Program' },
  { path: 'public/media/news/sustainability-2024.jpg', width: 800, height: 600, text: 'Sustainability Report' },
  
  // Testimonials
  { path: 'public/media/testimonials/ahmed-mansouri.jpg', width: 300, height: 300, text: 'Ahmed Al-Mansouri' },
  { path: 'public/media/testimonials/fatima-zahra.jpg', width: 300, height: 300, text: 'Fatima Al-Zahra' },
  { path: 'public/media/testimonials/omar-khaldi.jpg', width: 300, height: 300, text: 'Omar Al-Khaldi' },
  
  // Open Graph
  { path: 'public/og-image.jpg', width: 1200, height: 630, text: 'Tamimi Group - Excellence Since 1945' },
];

// Create directories and placeholders
placeholders.forEach(({ path: filePath, width, height, text }) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const svgContent = createSVGPlaceholder(width, height, text);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created: ${filePath}`);
});

console.log('All placeholder images created successfully!');