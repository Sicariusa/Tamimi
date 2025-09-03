import React from 'react';
import { Briefcase, GraduationCap, TrendingUp, Users, ArrowRight } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: <GraduationCap className="text-[#e9ce8c]" size={32} />,
      title: "Professional Development",
      description: "Comprehensive training programs and career advancement opportunities"
    },
    {
      icon: <TrendingUp className="text-[#e9ce8c]" size={32} />,
      title: "Growth Opportunities",
      description: "Clear career progression paths across our diverse business portfolio"
    },
    {
      icon: <Users className="text-[#e9ce8c]" size={32} />,
      title: "Inclusive Culture",
      description: "Diverse, inclusive workplace that values every team member's contribution"
    },
    {
      icon: <Briefcase className="text-[#e9ce8c]" size={32} />,
      title: "Competitive Benefits",
      description: "Comprehensive benefits package including health, housing, and performance incentives"
    }
  ];

  const opportunities = [
    "Engineering & Technical Services",
    "Retail Operations & Management",
    "Project Management",
    "Finance & Accounting",
    "Human Resources",
    "Information Technology",
    "Supply Chain & Logistics",
    "Business Development"
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#12110e] mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of Saudi Arabia's leading conglomerate and contribute to the
            Kingdom's Vision 2030. We offer exciting career opportunities across
            multiple industries with a focus on developing Saudi talent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-[#12110e] mb-6">
              Why Choose Tamimi Group?
            </h3>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#12110e] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#12110e] to-[#645c42] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Current Opportunities
            </h3>

            <div className="space-y-3 mb-8">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="font-medium">{opportunity}</span>
                  <ArrowRight size={16} className="text-[#e9ce8c]" />
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-[#e9ce8c] text-[#12110e] px-8 py-4 rounded-lg font-semibold hover:bg-[#ccb57c] transition-all duration-300 inline-flex items-center group">
                View All Positions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Saudization Focus */}
        <div className="bg-gradient-to-r from-[#e9ce8c]/10 to-[#ccb57c]/10 p-8 rounded-xl border border-[#e9ce8c]/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#12110e] mb-4">
              Committed to Saudization
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              With 80% of our workforce being Saudi nationals, we're proud to contribute
              to the Kingdom's human capital development. Our comprehensive training
              programs and mentorship initiatives ensure Saudi talent thrives across
              all levels of our organization.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#857757] mb-2">80%</div>
                <div className="text-gray-600">Saudi Nationals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#857757] mb-2">500+</div>
                <div className="text-gray-600">Training Programs Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#857757] mb-2">95%</div>
                <div className="text-gray-600">Employee Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;