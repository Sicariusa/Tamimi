import React from 'react';
import { ArrowRight, Users, Building2, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#12110e] via-[#645c42] to-[#857757]">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Tamimi Group
              <span className="block text-[#e9ce8c] text-3xl lg:text-4xl font-normal mt-2">
                Serving Communities, Building the Future
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Since the early 1940s, we've been a cornerstone of Saudi Arabia's growth, 
              operating 30+ companies with over 21,000 employees across retail, 
              contracting, industrial services, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-[#e9ce8c] text-[#12110e] px-8 py-4 rounded-lg font-semibold hover:bg-[#ccb57c] transition-all duration-300 flex items-center justify-center group">
                Explore Our Companies
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#12110e] transition-all duration-300">
                View Careers
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Building2 className="text-[#e9ce8c]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#e9ce8c]">30+</div>
                <div className="text-sm text-gray-300">Companies</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-[#e9ce8c]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#e9ce8c]">21,000+</div>
                <div className="text-sm text-gray-300">Employees</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="text-[#e9ce8c]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#e9ce8c]">80+</div>
                <div className="text-sm text-gray-300">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src="/TamimiGroup.png" 
                alt="Tamimi Group Logo" 
                className="w-full max-w-md mx-auto mb-6"
              />
              <div className="text-center text-white">
                <h3 className="text-2xl font-semibold mb-4">Vision 2030 Partner</h3>
                <p className="text-gray-200 leading-relaxed">
                  Proudly contributing to Saudi Arabia's transformation through 
                  sustainable business practices, community development, and 
                  strategic partnerships that drive national growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;