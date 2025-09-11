import { Metadata } from 'next';
import Link from 'next/link';
import { Search, Filter, Download, Calendar, ExternalLink, TrendingUp } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { news } from '@/lib/content';

export const metadata: Metadata = {
  title: 'News & Investors | Tamimi Group',
  description: 'Stay updated with the latest news, press releases, and investor information from Tamimi Group.',
};

const categories = ['All', 'News', 'Press Release', 'Investor'];
const years = ['2025', '2024', '2023', '2022'];

const investorResources = [
  {
    title: 'Annual Report 2024',
    description: 'Comprehensive overview of our financial performance and strategic initiatives',
    type: 'PDF',
    size: '2.4 MB',
    downloadUrl: '#'
  },
  {
    title: 'Q4 2024 Earnings',
    description: 'Quarterly financial results and business highlights',
    type: 'PDF',
    size: '1.8 MB',
    downloadUrl: '#'
  },
  {
    title: 'Corporate Governance',
    description: 'Our governance framework and board composition',
    type: 'PDF',
    size: '1.2 MB',
    downloadUrl: '#'
  },
  {
    title: 'ESG Report 2024',
    description: 'Environmental, Social, and Governance performance metrics',
    type: 'PDF',
    size: '3.1 MB',
    downloadUrl: '#'
  }
];

const upcomingEvents = [
  {
    date: '2025-04-15',
    title: 'Q1 2025 Earnings Call',
    description: 'Quarterly earnings presentation and Q&A session',
    time: '2:00 PM AST'
  },
  {
    date: '2025-05-20',
    title: 'Annual Shareholders Meeting',
    description: 'Annual meeting for shareholders and stakeholders',
    time: '10:00 AM AST'
  },
  {
    date: '2025-06-10',
    title: 'Gulf Business Summit',
    description: 'Participating in regional business development conference',
    time: '9:00 AM AST'
  }
];

export default function News() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="News & Investor Relations"
        subtitle="Stay Informed"
        description="Get the latest updates on our business developments, financial performance, and strategic initiatives across the Gulf region."
        backgroundImage="/media/news-hero.jpg"
        height="md"
      />

      {/* News Grid with Filters */}
      <Section background="white" padding="xl">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
            <div className="reveal">
              <h2 className="text-display font-bold text-brand-ink mb-2">
                Latest Updates
              </h2>
              <p className="text-lg text-gray-600">
                Stay informed about our latest developments and achievements
              </p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0 reveal">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold w-64"
                />
              </div>
              <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold">
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold">
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-ink mb-8 reveal">Featured News</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {news.filter(item => item.featured).map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.excerpt}
                href={item.url}
                variant="featured"
                className="reveal"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                  <span className="text-white/80">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All News */}
        <div>
          <h3 className="text-xl font-bold text-brand-ink mb-8 reveal">All News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.excerpt}
                href={item.url}
                className="reveal"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className={`
                    px-2 py-1 rounded-full text-xs font-medium
                    ${item.category === 'News' ? 'bg-blue-100 text-blue-700' : 
                      item.category === 'Press Release' ? 'bg-green-100 text-green-700' : 
                      'bg-purple-100 text-purple-700'}
                  `}>
                    {item.category}
                  </span>
                  <span className="text-gray-500">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Investor Resources */}
      <Section background="sand" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Investor Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Access our financial reports, governance documents, and investor presentations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {investorResources.map((resource, index) => (
            <div key={resource.title} className="bg-white p-6 rounded-2xl shadow-card reveal">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-brand-ink mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.size}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-brand-gold" />
                </div>
              </div>
              <Link
                href={resource.downloadUrl}
                className="inline-flex items-center space-x-2 text-brand-gold hover:text-brand-gold/80 font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-brand-ink mb-4 reveal">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto reveal">
            Mark your calendar for our upcoming earnings calls and investor events
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={event.title} className="bg-brand-fog p-6 rounded-2xl reveal">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-ink mb-1">{event.title}</h3>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long',
                            month: 'long', 
                            day: 'numeric',
                            year: 'numeric' 
                          })}
                        </span>
                        <span>•</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-brand-gold text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-gold/90 transition-colors duration-200 flex items-center space-x-2">
                    <span>Add to Calendar</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Media Kit */}
      <Section background="ink" padding="lg" id="media-kit">
        <div className="text-center">
          <h2 className="text-heading font-bold text-white mb-6 reveal">
            Media Kit
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto reveal">
            Access our brand assets, leadership photos, and company information for media coverage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Link
              href="#"
              className="bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors duration-200 shadow-gold hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Media Kit</span>
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
            >
              Media Inquiries
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}