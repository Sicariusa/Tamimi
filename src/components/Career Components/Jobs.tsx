import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import opportunities,{Job} from '../../data/Careers data/Opportunities';
const getUnique = (arr: any[], key: string): string[] => [...new Set(arr.map(item => String(item[key])))] as string[];
const JobsSearch = () => {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [form, setForm] = useState<{ name: string; email: string; phone: string; cv: File | null }>({ name: '', email: '', phone: '', cv: null });
  const [dragActive, setDragActive] = useState(false);

  // Filter jobs
  const filteredJobs = opportunities.filter(job => {
    return (
      (!search || job.title.toLowerCase().includes(search.toLowerCase())) &&
      (!department || job.department === department) &&
      (!location || job.location === location)
    );
  });

  // Modal close
  const closeModal = () => {
    setSelectedJob(null);
    setForm({ name: '', email: '', phone: '', cv: null });
    setDragActive(false);
  };

  // Handle form change
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  // Handle CV upload
  const handleDrop = e => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setForm(f => ({ ...f, cv: e.dataTransfer.files[0] }));
    }
  };

  // Handle drag events
  const handleDrag = e => {
    e.preventDefault();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    if (e.type === 'dragleave') setDragActive(false);
  };

  // Handle file input
  const handleFileInput = e => {
    if (e.target.files && e.target.files[0]) {
      setForm(f => ({ ...f, cv: e.target.files[0] }));
    }
  };

  // Handle submit
  const handleSubmit = e => {
    e.preventDefault();
    // Submission logic here (e.g., send to API)
    alert('Application submitted!');
    closeModal();
  };

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
        }
      `}</style>
      <div className='bg-gradient-to-br from-[#12110e] to-[#645c42] rounded-2xl p-8 text-white'>
        {/* Filters */}
      <div className="mb-6 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Search job title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-3 py-2 rounded border text-black"
        />
        <select
          value={department}
          onChange={e => setDepartment(e.target.value)}
          className="px-3 py-2 rounded border text-black"
        >
          <option value="">All Departments</option>
          {getUnique(opportunities, 'department').map(dep => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="px-3 py-2 rounded border text-black"
        >
          <option value="">All Locations</option>
          {getUnique(opportunities, 'location').map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Job List */}
      <div className="space-y-3 mb-8">
        {filteredJobs.length === 0 ? (
          <div className="text-center text-gray-300">No jobs found.</div>
        ) : (
          filteredJobs.map((job, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <span className="font-medium">{job.title}</span>
              <ArrowRight size={16} className="text-[#e9ce8c]" />
            </div>
          ))
        )}
      </div>

      {/* Modal for job details and application */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#12110e] to-[#645c42] rounded-t-3xl p-6 text-white relative">
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                onClick={closeModal}
                aria-label="Close"
              >
                <span style={{fontSize: 24, fontWeight: 'bold'}}>×</span>
              </button>
              <h2 className="text-2xl font-bold mb-2 pr-12">{selectedJob.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-[#e9ce8c] text-[#12110e] px-3 py-1 rounded-full font-semibold">
                  {selectedJob.department}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  📍 {selectedJob.location}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Job Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#12110e] mb-3">Job Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#12110e] mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-[#e9ce8c]/20 text-[#645c42] px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-[#12110e] mb-6">Apply for this Position</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#12110e] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-xl text-[#12110e] focus:outline-none focus:border-[#e9ce8c] focus:ring-2 focus:ring-[#e9ce8c]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#12110e] mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-xl text-[#12110e] focus:outline-none focus:border-[#e9ce8c] focus:ring-2 focus:ring-[#e9ce8c]/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#12110e] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-xl text-[#12110e] focus:outline-none focus:border-[#e9ce8c] focus:ring-2 focus:ring-[#e9ce8c]/20 transition-all"
                    />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-[#12110e] mb-2">Resume/CV *</label>
                    <div
                      className={`w-full border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                        dragActive 
                          ? 'border-[#e9ce8c] bg-[#e9ce8c]/5 scale-105' 
                          : 'border-gray-300 hover:border-[#e9ce8c] hover:bg-gray-50'
                      }`}
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        style={{ display: 'none' }}
                        id="cv-upload"
                        onChange={handleFileInput}
                      />
                      <label htmlFor="cv-upload" className="cursor-pointer">
                        {form.cv ? (
                          <div className="text-green-600">
                            <div className="text-2xl mb-2">✓</div>
                            <div className="font-semibold">CV: {form.cv.name}</div>
                            <div className="text-sm text-gray-500 mt-1">Click to change file</div>
                          </div>
                        ) : (
                          <div className="text-gray-600">
                            <div className="text-4xl mb-4">📄</div>
                            <div className="font-semibold text-[#645c42] mb-2">
                              Drag & drop your CV here or click to upload
                            </div>
                            <div className="text-sm text-gray-500">
                              Supported formats: PDF, DOC, DOCX (Max 10MB)
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#e9ce8c] to-[#ccb57c] text-[#12110e] px-8 py-4 rounded-xl font-bold text-lg hover:from-[#ccb57c] hover:to-[#b8a370] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};
export default JobsSearch;
