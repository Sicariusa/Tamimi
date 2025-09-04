import React from 'react';
import { MapPin, Users, TrendingUp, Award } from 'lucide-react';

const TamimiMarkets = () => {
  const stats = [
    {
      icon: <MapPin className="text-[#e9ce8c]" size={32} />,
      number: "110+",
      label: "Stores",
      description: "Across Saudi Arabia & Bahrain"
    },
    {
      icon: <Users className="text-[#e9ce8c]" size={32} />,
      number: "Millions",
      label: "Customers",
      description: "Served monthly"
    },
    {
      icon: <TrendingUp className="text-[#e9ce8c]" size={32} />,
      number: "30%",
      label: "PIF Partnership",
      description: "Strategic investment"
    },
    {
      icon: <Award className="text-[#e9ce8c]" size={32} />,
      number: "#1",
      label: "Market Position",
      description: "Leading supermarket chain"
    }
  ];

  return (
    <section id="markets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#12110e] mb-6">
              Tamimi Markets
            </h2>
            <h3 className="text-2xl font-semibold text-[#857757] mb-6">
              Saudi Arabia's Premier Supermarket Chain
            </h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Tamimi Markets stands as the Kingdom's leading supermarket chain, 
              offering an unparalleled shopping experience with over 110 stores 
              strategically located across Saudi Arabia and Bahrain.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our partnership with the Public Investment Fund (PIF) reinforces our 
              commitment to supporting Vision 2030 while continuing to serve millions 
              of customers with quality products, competitive prices, and exceptional service.
            </p>

            <div className="bg-gradient-to-r from-[#e9ce8c]/10 to-[#ccb57c]/10 p-6 rounded-lg border border-[#e9ce8c]/20">
              <h4 className="text-xl font-semibold text-[#12110e] mb-3">Our Commitment</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#e9ce8c] rounded-full mr-3"></div>
                  Fresh, high-quality products sourced locally and internationally
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#e9ce8c] rounded-full mr-3"></div>
                  Supporting local suppliers and Saudi agricultural development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#e9ce8c] rounded-full mr-3"></div>
                  Creating employment opportunities for Saudi nationals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#e9ce8c] rounded-full mr-3"></div>
                  Sustainable practices and environmental responsibility
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#12110e] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-[#857757] mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-[#12110e] rounded-2xl p-8 lg:p-12 text-white margin-top: 4rem; margin-bottom: 4rem; mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Tamimi Markets?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-[#e9ce8c] mb-3">Quality Assurance</h4>
              <p className="text-gray-300">
                Rigorous quality control ensures every product meets our high standards
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-[#e9ce8c] mb-3">Convenient Locations</h4>
              <p className="text-gray-300">
                Strategically located stores for easy access across the Kingdom
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-[#e9ce8c] mb-3">Customer Service</h4>
              <p className="text-gray-300">
                Dedicated team committed to providing exceptional shopping experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TamimiMarkets;