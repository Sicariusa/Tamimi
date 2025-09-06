

import JobsSearch from './Career Components/Jobs';
import Benefits from './Career Components/Benefits';
import Saudization from './Career Components/Saudization';


const Careers = () => {
  
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
          <Benefits />
          
          <JobsSearch />
          
        </div>

        <Saudization />
      </div>
    </section>
  );
};

export default Careers;