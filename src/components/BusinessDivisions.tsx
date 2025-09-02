import React from 'react';
import { ShoppingCart, Building, Factory, Truck, Home, ChefHat } from 'lucide-react';

const BusinessDivisions = () => {
  const divisions = [
    {
      icon: <ShoppingCart className="text-[#e9ce8c]" size={48} />,
      title: "Retail",
      subtitle: "Tamimi Markets",
      description: "Leading supermarket chain with 110+ stores across Saudi Arabia and Bahrain, serving millions of customers with quality products and exceptional service.",
      highlights: ["110+ stores", "PIF partnership", "Market leader"]
    },
    {
      icon: <Building className="text-[#e9ce8c]" size={48} />,
      title: "Contracting & Infrastructure",
      subtitle: "Building Tomorrow",
      description: "Strategic partner with Saudi Aramco, specializing in civil works, oil & gas infrastructure, aviation facilities, and logistics solutions.",
      highlights: ["Aramco partner", "Major projects", "Infrastructure expertise"]
    },
    {
      icon: <Factory className="text-[#e9ce8c]" size={48} />,
      title: "Industrial & Energy",
      subtitle: "Powering Progress",
      description: "15+ entities focused on chemicals, power generation, insulation, safety equipment, and industrial solutions supporting Saudi Arabia's industrial growth.",
      highlights: ["15+ companies", "Energy solutions", "Industrial expertise"]
    },
    {
      icon: <Truck className="text-[#e9ce8c]" size={48} />,
      title: "Logistics",
      subtitle: "Seamless Operations",
      description: "Comprehensive logistics and supply chain solutions ensuring efficient movement of goods across the Kingdom and regional markets.",
      highlights: ["Supply chain", "Regional reach", "Efficient operations"]
    },
    {
      icon: <Home className="text-[#e9ce8c]" size={48} />,
      title: "Real Estate",
      subtitle: "Developing Communities",
      description: "Strategic real estate development and property management services contributing to urban development and community building.",
      highlights: ["Urban development", "Community focus", "Strategic locations"]
    },
    {
      icon: <ChefHat className="text-[#e9ce8c]" size={48} />,
      title: "Catering & Hospitality",
      subtitle: "Exceptional Service",
      description: "Premium catering and hospitality services for corporate clients, events, and institutional customers across the region.",
      highlights: ["Premium service", "Corporate clients", "Regional presence"]
    }
  ];

  return (
    <section id="divisions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#12110e] mb-6">
            Business Divisions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diversified portfolio spans multiple sectors, each contributing to 
            Saudi Arabia's economic growth and Vision 2030 objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {division.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#12110e] mb-2">
                {division.title}
              </h3>
              
              <h4 className="text-lg font-semibold text-[#857757] mb-4">
                {division.subtitle}
              </h4>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {division.description}
              </p>

              <div className="space-y-2">
                {division.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-[#e9ce8c] rounded-full mr-3"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-[#12110e] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#645c42] transition-all duration-300 inline-flex items-center group">
            Learn More About Our Companies
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessDivisions;