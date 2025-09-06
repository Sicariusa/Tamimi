const CareerHero = () => {
  return (
    <div className="relative text-center mb-16 min-h-[400px] rounded-xl overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/visualelectric-1757125567196.png')`,
          filter: 'brightness(0.4)', // Lower brightness
          backgroundSize:  'cover', // Ensure the image covers the area
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-[400px] px-8 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
          Join Our Team
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Be part of Saudi Arabia's leading conglomerate and contribute to the
          Kingdom's Vision 2030. We offer exciting career opportunities across
          multiple industries with a focus on developing Saudi talent.
        </p>
      </div>
    </div>
  );
};

export default CareerHero;