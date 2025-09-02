import React from 'react';

const Partnerships = () => {
  const partners = [
    { name: "Saudi Aramco", sector: "Energy" },
    { name: "Public Investment Fund", sector: "Investment" },
    { name: "Mitsui & Co.", sector: "Trading" },
    { name: "General Electric", sector: "Technology" },
    { name: "Safeway", sector: "Retail" },
    { name: "NEOM", sector: "Mega Projects" },
    { name: "Red Sea Global", sector: "Tourism" },
    { name: "SABIC", sector: "Chemicals" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#12110e] mb-4">
            Strategic Partnerships
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with world-class organizations to deliver exceptional 
            value and drive sustainable growth across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <h3 className="font-semibold text-[#12110e] mb-2 group-hover:text-[#857757] transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-500">{partner.sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;