import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';

const LatestNews: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Tamimi Group Partners with NEOM for Mega-City Development',
      excerpt: 'Strategic partnership to provide comprehensive facility management and catering services for the futuristic NEOM project.',
      date: '2024-01-15',
      category: 'Partnership',
      image: '/media/images/news-neom.jpg',
      href: '/news/tamimi-neom-partnership'
    },
    {
      id: 2,
      title: 'Sustainability Initiative Reduces Carbon Footprint by 30%',
      excerpt: 'Implementation of green technologies across all divisions results in significant environmental impact reduction.',
      date: '2024-01-10',
      category: 'Sustainability',
      image: '/media/images/news-sustainability.jpg',
      href: '/news/sustainability-initiative'
    },
    {
      id: 3,
      title: 'Tamimi Markets Expands with 15 New Locations',
      excerpt: 'Strategic expansion across the Kingdom brings total store count to 125, serving more communities nationwide.',
      date: '2024-01-05',
      category: 'Expansion',
      image: '/media/images/news-expansion.jpg',
      href: '/news/markets-expansion'
    }
  ];

  const investorHighlight = {
    title: 'Q4 2023 Financial Results',
    description: 'Strong performance across all business divisions with 15% revenue growth year-over-year.',
    date: '2024-01-20',
    href: '/news/q4-2023-results.pdf'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Section background="secondary" padding="xl" id="news">
      <div className="text-center mb-16">
        <motion.h2 
          className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Latest News
          <span className="block text-gold">& Insights</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Stay updated with our latest developments, partnerships, and achievements 
          as we continue to drive innovation across the Kingdom.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* News Articles */}
        <motion.div
          className="lg:col-span-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-8">
            {newsItems.map((item) => (
              <motion.article
                key={item.id}
                className="luxury-card p-6 group hover:scale-[1.02]"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="aspect-video bg-surface-tertiary rounded-xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold/20 to-surface-tertiary flex items-center justify-center">
                        <div className="text-gold/60 text-center">
                          <div className="text-4xl mb-2">📰</div>
                          <div className="text-sm">News Image</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <div className="flex items-center text-steel text-sm">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                    
                    <h3 className="font-heading font-bold text-ivory text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                      <Link to={item.href}>{item.title}</Link>
                    </h3>
                    
                    <p className="text-steel leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    
                    <Link
                      to={item.href}
                      className="inline-flex items-center text-gold hover:text-gold-hover font-medium group/link"
                    >
                      <span>Read more</span>
                      <ArrowRight 
                        size={16} 
                        className="ml-1 transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-300" 
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Investor Highlight */}
          <div className="glass backdrop-blur-xl rounded-2xl p-6 border border-line">
            <h3 className="font-heading font-bold text-ivory text-lg mb-4">
              Investor Relations
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-surface-tertiary rounded-xl">
                <h4 className="font-semibold text-ivory mb-2">
                  {investorHighlight.title}
                </h4>
                <p className="text-steel text-sm mb-3">
                  {investorHighlight.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-steel text-xs">
                    <Calendar size={12} className="mr-1" />
                    {formatDate(investorHighlight.date)}
                  </div>
                  <a
                    href={investorHighlight.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-hover"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              href="/news#investors"
              className="w-full mt-4"
            >
              View All Reports
            </Button>
          </div>

          {/* Quick Links */}
          <div className="glass backdrop-blur-xl rounded-2xl p-6 border border-line">
            <h3 className="font-heading font-bold text-ivory text-lg mb-4">
              Quick Links
            </h3>
            
            <div className="space-y-3">
              <Link
                to="/news"
                className="block text-steel hover:text-gold transition-colors duration-300 py-2 border-b border-line last:border-0"
              >
                All News & Updates
              </Link>
              <Link
                to="/news#press"
                className="block text-steel hover:text-gold transition-colors duration-300 py-2 border-b border-line last:border-0"
              >
                Press Releases
              </Link>
              <Link
                to="/news#investors"
                className="block text-steel hover:text-gold transition-colors duration-300 py-2 border-b border-line last:border-0"
              >
                Financial Reports
              </Link>
              <Link
                to="/csr"
                className="block text-steel hover:text-gold transition-colors duration-300 py-2"
              >
                CSR Initiatives
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Button
          variant="primary"
          size="lg"
          icon={ArrowRight}
          href="/news"
        >
          View All News
        </Button>
      </motion.div>
    </Section>
  );
};

export default LatestNews;