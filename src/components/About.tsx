import React from 'react';
import { Award, Target, Heart, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      description: "Supporting national development and community wellbeing through sustainable growth."
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

        {/* Group quick facts */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { n: "80+ Years", l: "Heritage & operations" },
            { n: "30+ Companies", l: "Diversified portfolio" },
            { n: "21,000+ People", l: "Across the Group" }
          ].map((it, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-[#12110e]">{it.n}</div>
              <div className="text-sm text-gray-600">{it.l}</div>
            </div>
          ))}
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
              thousands of professionals who share our commitment to quality, safety, and
              customer success.
            </p>
          </div>

          {/* Values */}
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

        {/* TAFGA quick facts */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#12110e] mb-6">Tamimi Global (TAFGA) Snapshot</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Tamimi Global Company Ltd. (TAFGA) is a Tamimi Group company delivering
            integrated operations & maintenance, facility management and accommodation,
            catering, and construction services across KSA, Qatar, and Kuwait.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "17,000+", l: "Employees" },
              { n: "29", l: "Nationalities" },
              { n: "200+", l: "Work sites" },
              { n: "3", l: "Countries of operation" }
            ].map((it, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#12110e]">{it.n}</div>
                <div className="text-sm text-gray-600">{it.l}</div>
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
              <div className="text-4xl font-bold text-[#e9ce8c] mb-2">1970s</div>
              <div className="text-sm">Expansion into services and O&amp;M</div>
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

          {/* CTA button like your screenshot */}
          <div className="mt-10 text-center">
            <Link
              to="/about/tamimi"
              className="inline-flex items-center bg-[#12110e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#645c42] transition-all shadow-sm"
            >
              Learn More About Tamimi
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;