import React from 'react';
import benefits from '../../data/Careers data/benefits';

const Benefits = () => {
  return (
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
  );
};

export default Benefits;
