import React from 'react';

const Saudization = () => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-[#e9ce8c]/20">
      {/* Animated Saudi Flag Background */}
      <div className="absolute inset-0 z-0">
        <style>{`
          @keyframes wave {
            0%, 100% { transform: translateX(0px) scaleX(1); }
            25% { transform: translateX(-5px) scaleX(1.02); }
            50% { transform: translateX(0px) scaleX(1); }
            75% { transform: translateX(5px) scaleX(0.98); }
          }
          @keyframes wave2 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-2px) rotate(0.5deg); }
            66% { transform: translateY(2px) rotate(-0.5deg); }
          }
          .saudi-flag-wave {
            animation: wave 3s ease-in-out infinite, wave2 4s ease-in-out infinite;
          }
        `}</style>
        
        {/* Saudi Flag Green Background with Wave Effect */}
        <div className="saudi-flag-wave absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-700">
          {/* Flag wave pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform skew-x-12 animate-pulse"></div>
            <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent transform -skew-x-6 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-0 left-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/8 to-transparent transform skew-x-3 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Saudi Emblem Area */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/20 text-6xl">
            ⚔️
          </div>
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0a3a1a]/80 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#e9ce8c] mb-4 font-serif">
            Committed to Saudization
          </h3>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
            With 80% of our workforce being Saudi nationals, we're proud to contribute
            to the Kingdom's human capital development. Our comprehensive training
            programs and mentorship initiatives ensure Saudi talent thrives across
            all levels of our organization.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#e9ce8c] mb-2">80%</div>
              <div className="text-white/90">Saudi Nationals</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#e9ce8c] mb-2">500+</div>
              <div className="text-white/90">Training Programs Annually</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#e9ce8c] mb-2">95%</div>
              <div className="text-white/90">Employee Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saudization;
