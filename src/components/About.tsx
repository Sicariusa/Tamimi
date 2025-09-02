import React from 'react';
import { Award, Target, Heart, Shield } from 'lucide-react';

const About = () => {
  const principles = [
    {
      icon: <Award className="text-[#e9ce8c]" size={32} />,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project and service we provide."
    },
    {
      icon: <Target className="text-[#e9ce8c]" size={32} />,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and methodologies to stay ahead of industry trends."
    },
    {
      icon: <Heart className="text-[#e9ce8c]" size={32} />,
      title: "Community",
      description: "Dedicated to serving our communities and contributing to Saudi Arabia's sustainable development."
    },
    {
      icon: <Shield className="text-[#e9ce8c]" size={32} />,
      title: "Integrity",
      description: "Upholding the highest standards of ethics and transparency in all our business dealings."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#12110e] mb-6">
            About Tamimi Group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in the early 1940s by Sheikh Ali bin Abdullah Al-Tamimi, 
            Tamimi Group has grown from humble beginnings to become one of Saudi Arabia's 
            most respected and diversified business conglomerates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-[#12110e] mb-6">Our Heritage</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over eight decades, Tamimi Group has been at the forefront of Saudi Arabia's 
              economic development. What started as a small trading business has evolved into 
              a diversified conglomerate spanning retail, contracting, industrial services, 
              logistics, and real estate.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Today, we operate more than 30 companies and 10+ joint ventures, employing 
              over 21,000 people across the Kingdom and beyond. Our commitment to excellence, 
              innovation, and community development continues to drive our success.
            </p>
            <div className="bg-[#e9ce8c]/10 p-6 rounded-lg border-l-4 border-[#e9ce8c]">
              <p className="text-[#12110e] font-semibold italic">
                "Building sustainable partnerships that create lasting value for our 
                communities, stakeholders, and the Kingdom of Saudi Arabia."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{principle.icon}</div>
                <h4 className="text-xl font-semibold text-[#12110e] mb-3">
                  {principle.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-[#12110e] to-[#645c42] rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Journey</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">1940s</div>
              <div className="text-sm">Founded by Sheikh Ali bin Abdullah Al-Tamimi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">1980s</div>
              <div className="text-sm">Expansion into retail and contracting</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">2000s</div>
              <div className="text-sm">Strategic partnerships and diversification</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">Today</div>
              <div className="text-sm">30+ companies, Vision 2030 partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;