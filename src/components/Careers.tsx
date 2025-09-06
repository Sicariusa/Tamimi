
import JobsSearch from './Career Components/Jobs';
import Benefits from './Career Components/Benefits';
import Saudization from './Career Components/Saudization';
import CareerHero from './Career Components/CareerHero';

const Careers = () => {
  
  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CareerHero />

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