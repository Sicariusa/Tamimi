import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Briefcase, Clock, Filter, ArrowRight } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  level: 'entry' | 'mid' | 'senior' | 'executive';
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  featured: boolean;
}

interface JobBoardProps {
  jobs: Job[];
  className?: string;
  showFilters?: boolean;
}

const JobBoard: React.FC<JobBoardProps> = ({
  jobs,
  className = '',
  showFilters = true
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  // Get unique filter options
  const departments = Array.from(new Set(jobs.map(job => job.department))).sort();
  const locations = Array.from(new Set(jobs.map(job => job.location))).sort();
  const types = Array.from(new Set(jobs.map(job => job.type))).sort();
  const levels = Array.from(new Set(jobs.map(job => job.level))).sort();

  // Filter jobs based on search criteria
  useEffect(() => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDepartment) {
      filtered = filtered.filter(job => job.department === selectedDepartment);
    }

    if (selectedLocation) {
      filtered = filtered.filter(job => job.location === selectedLocation);
    }

    if (selectedType) {
      filtered = filtered.filter(job => job.type === selectedType);
    }

    if (selectedLevel) {
      filtered = filtered.filter(job => job.level === selectedLevel);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, selectedDepartment, selectedLocation, selectedType, selectedLevel, jobs]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('');
    setSelectedLocation('');
    setSelectedType('');
    setSelectedLevel('');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-500/20 text-green-400';
      case 'part-time': return 'bg-blue-500/20 text-blue-400';
      case 'contract': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-steel/20 text-steel';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'entry': return 'bg-blue-500/20 text-blue-400';
      case 'mid': return 'bg-green-500/20 text-green-400';
      case 'senior': return 'bg-orange-500/20 text-orange-400';
      case 'executive': return 'bg-gold/20 text-gold';
      default: return 'bg-steel/20 text-steel';
    }
  };

  return (
    <div className={className}>
      {/* Search and Filters */}
      {showFilters && (
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-steel" size={20} />
            <input
              type="text"
              placeholder="Search jobs by title, description, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface-secondary border border-line rounded-lg text-ivory placeholder-steel focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 bg-surface-secondary border border-line rounded-lg text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 bg-surface-secondary border border-line rounded-lg text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 bg-surface-secondary border border-line rounded-lg text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 bg-surface-secondary border border-line rounded-lg text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            >
              <option value="">All Levels</option>
              {levels.map(level => (
                <option key={level} value={level}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>

            {(searchTerm || selectedDepartment || selectedLocation || selectedType || selectedLevel) && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gold text-ink rounded-lg font-semibold hover:bg-gold-hover transition-colors duration-300 whitespace-nowrap"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <div className="text-steel">
              {filteredJobs.length} of {jobs.length} positions
            </div>
            <div className="flex items-center space-x-2 text-steel text-sm">
              <Filter size={16} />
              <span>Filtered results</span>
            </div>
          </div>
        </div>
      )}

      {/* Job Listings */}
      <div className="space-y-6">
        <AnimatePresence>
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="luxury-card p-6 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
            >
              {/* Job Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading font-bold text-ivory text-xl lg:text-2xl group-hover:text-gold transition-colors duration-300">
                      {job.title}
                    </h3>
                    {job.featured && (
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium ml-4">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-steel text-sm mb-3">
                    <div className="flex items-center">
                      <Briefcase size={14} className="mr-1" />
                      {job.department}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {formatDate(job.postedDate)}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
                      {job.type.replace('-', ' ')}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(job.level)}`}>
                      {job.level}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <motion.button
                    className="bg-gold hover:bg-gold-hover text-ink px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle apply action
                      console.log('Apply for:', job.title);
                    }}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Job Description */}
              <p className="text-steel leading-relaxed mb-4">
                {job.description}
              </p>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-line pt-6 mt-6"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Requirements */}
                      <div>
                        <h4 className="font-heading font-bold text-ivory text-lg mb-4">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                              <span className="text-steel text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-heading font-bold text-ivory text-lg mb-4">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                              <span className="text-steel text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-steel text-lg mb-2">No positions found</div>
            <p className="text-steel/60 mb-6">Try adjusting your search criteria</p>
            <button
              onClick={clearFilters}
              className="bg-gold hover:bg-gold-hover text-ink px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Positions
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;