import React from 'react';
import { GraduationCap, Heart, Leaf, Users, Target, Building } from 'lucide-react';

const CSR = () => {
  const initiatives = [
    {
      icon: <GraduationCap className="text-[#e9ce8c]" size={40} />,
      title: "Education & Training",
      description: "Investing in education programs, scholarships, and vocational training to develop Saudi talent and support knowledge-based economy goals."
    },
    {
      icon: <Heart className="text-[#e9ce8c]" size={40} />,
      title: "Healthcare Support",
      description: "Supporting healthcare initiatives and medical facilities to improve community health and well-being across the Kingdom."
    },
    {
      icon: <Leaf className="text-[#e9ce8c]" size={40} />,
      title: "Environmental Sustainability",
      description: "Implementing green practices, renewable energy solutions, and environmental conservation programs aligned with Saudi Green Initiative."
    },
    {
      icon: <Users className="text-[#e9ce8c]" size={40} />,
      title: "Saudization Programs",
      description: "Committed to developing Saudi talent through comprehensive training programs and career development opportunities."
    },
    {
      icon: <Target className="text-[#e9ce8c]" size={40} />,
      title: "Vision 2030 Alignment",
      description: "Actively supporting Saudi Arabia's Vision 2030 through strategic initiatives in economic diversification and social development."
    },
    {
      icon: <Building className="text-[#e9ce8c]" size={40} />,
      title: "Community Development",
      description: "Investing in local communities through infrastructure development, social programs, and economic empowerment initiatives."
    }
  ];

  return (
    <section id="csr" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#12110e] mb-6">
            Corporate Social Responsibility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to Saudi Arabia extends beyond business success. We're dedicated 
            to creating positive impact in our communities and supporting the Kingdom's 
            sustainable development goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {initiative.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#12110e] mb-4">
                {initiative.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="bg-[#12110e] rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Impact</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">21,000+</div>
              <div className="text-gray-300">Employees Empowered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">80%</div>
              <div className="text-gray-300">Saudi Nationals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">100+</div>
              <div className="text-gray-300">Community Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">30+</div>
              <div className="text-gray-300">Years of CSR</div>
            </div>
          </div>
        </div>

        {/* Vision 2030 Alignment */}
        <div className="mt-16 bg-gradient-to-r from-[#e9ce8c]/10 to-[#ccb57c]/10 p-8 rounded-xl border border-[#e9ce8c]/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#12110e] mb-4">
              Supporting Vision 2030
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              As a proud Saudi company, we align our CSR initiatives with Vision 2030's pillars: 
              a vibrant society, a thriving economy, and an ambitious nation. Through our 
              diverse business portfolio and community investments, we contribute to the 
              Kingdom's transformation into a global investment powerhouse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSR;