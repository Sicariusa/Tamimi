import React, { useState } from 'react';
import { Briefcase, GraduationCap, TrendingUp, Users, ArrowRight, X } from 'lucide-react';
import benefits from '../data//Careers data/benefits';
import opportunities, { Job } from '../data/Careers data/Opportunities';

const getUnique = (arr, key) => [...new Set(arr.map(item => item[key]))];

const Careers = () => {
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
            <h3 className="text-2xl font-bold mb-6 text-center">Current Opportunities</h3>

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
          </div>
        </div>

        {/* Modal for job details and application */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-gradient-to-br from-[#e9ce8c]/30 to-[#645c42]/20 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border border-[#e9ce8c]/40">
              <button
                className="absolute top-4 right-4 text-[#645c42] hover:text-[#12110e] transition-colors"
                onClick={closeModal}
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <h2 className="text-3xl font-bold mb-2 text-[#12110e] font-serif tracking-tight">{selectedJob.title}</h2>
              <div className="mb-2 text-lg text-[#645c42] font-medium">{selectedJob.description}</div>
              <div className="mb-2 text-sm text-[#ccb57c] font-semibold">Department: {selectedJob.department}</div>
              <div className="mb-2 text-sm text-[#ccb57c] font-semibold">Location: {selectedJob.location}</div>
              <div className="mb-4 text-sm text-[#e9ce8c]">Skills: {selectedJob.skills.join(', ')}</div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#e9ce8c] bg-white rounded-lg text-[#12110e] font-sans focus:outline-none focus:border-[#645c42] transition"
                  style={{ fontFamily: 'inherit', fontWeight: 500 }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#e9ce8c] bg-white rounded-lg text-[#12110e] font-sans focus:outline-none focus:border-[#645c42] transition"
                  style={{ fontFamily: 'inherit', fontWeight: 500 }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#e9ce8c] bg-white rounded-lg text-[#12110e] font-sans focus:outline-none focus:border-[#645c42] transition"
                  style={{ fontFamily: 'inherit', fontWeight: 500 }}
                />
                {/* Drag and drop CV */}
                <div
                  className={`w-full border-2 border-dashed rounded-xl p-5 text-center transition ${dragActive ? 'border-[#645c42] bg-[#e9ce8c]/10' : 'border-[#e9ce8c] bg-white'}`}
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
                  <label htmlFor="cv-upload" className="cursor-pointer text-[#645c42] font-semibold">
                    {form.cv ? `CV: ${form.cv.name}` : 'Drag & drop your CV here or click to upload'}
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e9ce8c] text-[#12110e] px-6 py-3 rounded-xl font-bold font-sans text-lg hover:bg-[#ccb57c] transition-all duration-200 shadow-sm"
                  style={{ fontFamily: 'inherit' }}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

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