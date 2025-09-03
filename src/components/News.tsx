import React from 'react';
import { Calendar, ExternalLink, TrendingUp } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      date: "2024",
      title: "Planon Facility Services Implementation",
      description: "Tamimi Global partners with Planon to implement advanced Facility Services Business Solution, enhancing operational efficiency across 17,000+ employees.",
      category: "Technology"
    },
    {
      date: "2021",
      title: "AMAALA Construction Village Contract",
      description: "Awarded major design-build contract for workforce accommodation complex supporting the AMAALA luxury destination project.",
      category: "Major Projects"
    },
    {
      date: "2020",
      title: "NEOM Construction Village Partnership",
      description: "Joint venture with SATCO to build and operate construction village for 30,000 workers supporting the NEOM megacity development.",
      category: "Mega Projects"
    },
    {
      date: "2019",
      title: "Aramco Camp Operations - Jazan",
      description: "Secured agreement with Saudi Aramco for camp operations and maintenance in Jazan City, including power generation management.",
      category: "Operations"
    }
  ];

  const investorHighlights = [
    {
      title: "Revenue Growth",
      value: "15%",
      description: "Year-over-year growth across all divisions"
    },
    {
      title: "Market Expansion",
      value: "110+",
      description: "Tamimi Markets stores operational"
    },
    {
      title: "Workforce",
      value: "21,000+",
      description: "Employees across all companies"
    },
    {
      title: "Certifications",
      value: "8+",
      description: "International quality standards"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#12110e] mb-6">
            News & Investors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest developments, achievements, and
            strategic initiatives driving growth across the Kingdom.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-[#12110e] mb-8">Latest News</h3>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-[#857757]" size={20} />
                      <span className="text-sm font-medium text-[#857757]">{item.date}</span>
                      <span className="px-3 py-1 bg-[#e9ce8c]/20 text-[#12110e] text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-[#857757] transition-colors" size={16} />
                  </div>

                  <h4 className="text-xl font-semibold text-[#12110e] mb-3 group-hover:text-[#857757] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#12110e] mb-8">Investor Highlights</h3>
            <div className="bg-gradient-to-br from-[#12110e] to-[#645c42] rounded-xl p-6 text-white mb-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-[#e9ce8c] mr-3" size={24} />
                <h4 className="text-xl font-semibold">Performance Overview</h4>
              </div>

              <div className="space-y-4">
                {investorHighlights.map((highlight, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{highlight.title}</div>
                      <div className="text-sm text-gray-300">{highlight.description}</div>
                    </div>
                    <div className="text-2xl font-bold text-[#e9ce8c]">
                      {highlight.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#e9ce8c]/10 p-6 rounded-xl border border-[#e9ce8c]/20">
              <h4 className="text-lg font-semibold text-[#12110e] mb-3">
                Investor Relations
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                For investor inquiries, financial reports, and partnership opportunities.
              </p>
              <button className="w-full bg-[#12110e] text-white py-3 rounded-lg font-medium hover:bg-[#645c42] transition-colors">
                Contact Investor Relations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;