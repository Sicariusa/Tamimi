import React from 'react';

const Saudization = () => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-[#e9ce8c]/20">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center 60%' }}
        onError={(e) => console.error('Video failed to load:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
      >
        <source src="/vecteezy_kingdom-of-saudi-arabia-ksa-realistic-waving-flag-smooth_10248663.mp4" type="video/mp4" />
      </video>
      
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
