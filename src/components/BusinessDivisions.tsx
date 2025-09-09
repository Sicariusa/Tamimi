import { useState } from 'react';
import { 
  ChefHat, 
  Building, 
  Home, 
  Shield, 
  Activity, 
  Headphones,
  ArrowRight,
  Star,
  Users,
  Award
} from 'lucide-react';

const BusinessDivisions = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const divisions = [
    {
      icon: <ChefHat className="text-[#2d2a20]" size={48} />,
      title: "Catering Services",
      subtitle: "Culinary Excellence",
      description: "From industrial-scale operations to fine dining experiences, we deliver exceptional culinary solutions across airlines, hospitals, special events, and mobile food services.",
      services: ["Industrial Catering", "Airline Catering", "Fine Dining", "Special Events", "Food Trucks", "Hospital Catering"],
      count: "6+"
    },
    {
      icon: <Building className="text-[#2d2a20]" size={48} />,
      title: "Facility Management",
      subtitle: "Total Environment Solutions",
      description: "Comprehensive facility management services ensuring optimal operations, from housekeeping and maintenance to landscaping and utility management.",
      services: ["Housekeeping", "Building Maintenance", "Landscaping", "Utility Management", "IT Support", "Pest Control"],
      count: "10+"
    },
    {
      icon: <Home className="text-[#2d2a20]" size={48} />,
      title: "Board & Lodging",
      subtitle: "Premium Living Spaces",
      description: "Exclusive residential solutions for workforce housing, including specialized accommodations for ARAMCO and NEOM contractors with world-class amenities.",
      services: ["Hawiyah Residential Park", "Geshla Residency", "NEOM Residency"],
      count: "3"
    },
    {
      icon: <Shield className="text-[#2d2a20]" size={48} />,
      title: "Emergency Response",
      subtitle: "24/7 Protection & Care",
      description: "Round-the-clock emergency response services including fire protection, medical services, and comprehensive security solutions for complete peace of mind.",
      services: ["Fire Protection", "Medical Services", "Security Services"],
      count: "3"
    },
    {
      icon: <Activity className="text-[#2d2a20]" size={48} />,
      title: "Operational Services",
      subtitle: "Life Enhancement",
      description: "Enhancing quality of life through recreational facilities, personal care services, spiritual spaces, and essential daily amenities for holistic well-being.",
      services: ["Recreation Services", "Laundry Services", "Commissaries", "Barber Shops", "Mosque Services"],
      count: "5+"
    },
    {
      icon: <Headphones className="text-[#2d2a20]" size={48} />,
      title: "Support Services",
      subtitle: "Excellence in Every Detail",
      description: "Behind-the-scenes excellence through office services, quality assurance, workplace safety, environmental initiatives, and advanced field service management.",
      services: ["Quality Assurance", "Workplace Safety", "Environmental Services", "Warehouse Services", "IFM Solutions"],
      count: "6+"
    }
  ];

  return (
    <section id="BusinessDivisions" className="py-24 bg-gradient-to-b from-[#4a4234] via-[#3a3529] to-[#2d2a20] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #e9ce8c 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e9ce8c] to-transparent mr-6"></div>
            <Star className="text-[#e9ce8c]" size={24} />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e9ce8c] to-transparent ml-6"></div>
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-light text-white mb-6 tracking-wide">
            Business
          </h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-[#e9ce8c] mb-8 tracking-wide">
            Divisions
          </h3>
          
          <p className="text-xl text-[#b8a082] max-w-4xl mx-auto leading-relaxed font-light">
            Six specialized divisions delivering comprehensive solutions across Saudi Arabia, 
            each contributing to the Kingdom's <span className="text-[#e9ce8c] font-medium">Vision 2030</span> transformation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[#e9ce8c]/20 border border-[#e9ce8c]/10 hover:border-[#e9ce8c]/30 ${
                hoveredCard !== null && hoveredCard !== index ? 'opacity-75 scale-95' : ''
              }`}>
                {/* Golden accent bar */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#e9ce8c] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Service count badge */}
                <div className="absolute -top-4 -right-4">
                  <div className="bg-[#e9ce8c] text-[#2d2a20] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {division.count} Services
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#e9ce8c]/20 to-[#d4b896]/20 flex items-center justify-center group-hover:from-[#e9ce8c]/30 group-hover:to-[#d4b896]/30 transition-all duration-500 group-hover:scale-110">
                    {division.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#2d2a20] group-hover:text-[#3a3529] transition-colors duration-300">
                    {division.title}
                  </h3>

                  <h4 className="text-lg font-medium text-[#e9ce8c]">
                    {division.subtitle}
                  </h4>

                  <p className="text-[#6b5d4a] leading-relaxed text-base">
                    {division.description}
                  </p>

                  {/* Services preview */}
                  <div className="pt-4 space-y-2">
                    {division.services.slice(0, 3).map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-[#8a7b68]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e9ce8c] mr-3 opacity-60"></div>
                        {service}
                      </div>
                    ))}
                    {division.services.length > 3 && (
                      <div className="flex items-center text-sm text-[#a89372] italic pt-1">
                        <Award className="w-4 h-4 mr-2" />
                        +{division.services.length - 3} more specialized services
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#e9ce8c] flex items-center justify-center text-[#2d2a20] shadow-lg">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#e9ce8c] mr-4"></div>
            <Users className="text-[#e9ce8c]" size={20} />
            <div className="w-24 h-px bg-gradient-to-r from-[#e9ce8c] to-transparent ml-4"></div>
          </div>
          
          <button className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-[#e9ce8c]/30 text-[#e9ce8c] px-10 py-4 rounded-full font-medium text-lg hover:bg-[#e9ce8c] hover:text-[#2d2a20] transition-all duration-500 inline-flex items-center">
            <span className="relative z-10">Discover Our Complete Portfolio</span>
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" size={20} />
            
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-[#e9ce8c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
          
          <p className="mt-6 text-[#b8a082] text-lg font-light">
            Excellence across every sector, partnership in every project
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessDivisions;