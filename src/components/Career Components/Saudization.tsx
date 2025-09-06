import React from 'react';

const Saudization = () => {
  return (
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
  );
};

export default Saudization;
