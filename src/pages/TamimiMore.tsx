import React from 'react';
import { ArrowRight, Award, Users, Building2, HeartHandshake, Quote, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TAFGA = {
  legal_name: "Tamimi Global Company Ltd. (TAFGA)",
  mission: "Achieve growth and expansion by providing integrated solutions with high quality and professionalism.",
  guiding_principles: [
    "Elevating experiences",
    "Quality without compromise",
    "Client-centric partnership",
    "Operational excellence",
    "Empowering our people",
    "Sustainability & safety first"
  ],
  headquarters: {
    address: "Dammam, Eastern Province, Saudi Arabia",
    phone: "+966 13 807 5700"
  },
  workforce: {
    employees: 17000,
    nationalities: 29,
    work_sites: 200,
    countries_operated: ["Saudi Arabia", "Qatar", "Kuwait"]
  },
  certifications: [
    { standard: "ISO 9001", version: "2015", description: "Quality management systems" },
    { standard: "ISO 14001", version: "2015", description: "Environmental management systems" },
    { standard: "ISO 45001", version: "2018", description: "Occupational health and safety management systems" },
    { standard: "ISO 22000", version: "2018", description: "Food safety management systems" },
    { standard: "ISO 41001", version: "2018", description: "Facility management systems", note: "Hawiyah Residential Park certified in 2021" },
    { standard: "HACCP", description: "Hazard Analysis and Critical Control Points (food safety)" }
  ],
  projects: [
    {
      name: "AMAALA Construction Village",
      description:
        "Design and build of a modular workforce residential community for AMAALA; staged to serve up to 15,552 residents with community facilities.",
      highlights: [
        "Off-site fabrication & modular construction to reduce environmental impact and delivery time",
        "Part of PIF/Red Sea Global sustainable tourism development"
      ]
    },
    {
      name: "Planon Facility Services Business Solution",
      description:
        "Planon FSBS contract (2024) to transform field service operations—optimizing dispatching, resource allocation and service quality.",
      highlights: [
        "Total Experience platform to improve both customer and employee satisfaction",
        "Delivered with Virtual IT as regional partner"
      ]
    },
    {
      name: "NEOM Construction Village (with SATCO)",
      description:
        "Accommodation and camp solutions for NEOM supporting up to 30,000 workers as part of the Vision 2030 giga-project.",
      highlights: [
        "Large-scale workforce housing and camp O&M",
        "Built to high sustainability and safety standards"
      ]
    },
    {
      name: "Aramco Camp Operations – Jazan City",
      description:
        "Camp O&M including power generation; CAT 3516 units totaling ~10 MW, operated and maintained for reliable camp services.",
      highlights: [
        "Power generation support with Zahid Tractor units",
        "Comprehensive camp operations & maintenance"
      ]
    }
  ],
  clients: [
    { name: "Saudi Aramco", sector: "Oil & gas" },
    { name: "Public Investment Fund (AMAALA)", sector: "Tourism/Real estate" },
    { name: "NEOM", sector: "Giga-projects" },
    { name: "Saudi Electricity Company", sector: "Utilities" },
    { name: "SABIC", sector: "Chemicals" },
    { name: "KAUST", sector: "Education" },
    { name: "Petro Rabigh", sector: "Petrochemicals" },
    { name: "Ministry of Health (KSA)", sector: "Healthcare" },
    { name: "National Guard Hospitals (KSA)", sector: "Healthcare" }
  ]
} as const;

const StatCard = ({ value, label, icon }: { value: string | number; label: string; icon?: React.ReactNode }) => (
  <div className="bg-gray-50 p-6 rounded-xl text-center">
    {icon ? <div className="mx-auto mb-2">{icon}</div> : null}
    <div className="text-2xl font-bold text-[#12110e]">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const TamimiMore: React.FC = () => {
  const wf = TAFGA.workforce;

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#12110e]">Tamimi Global (TAFGA)</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Certifications, achievements, projects, clients, and key facts.
            </p>
          </div>

          {/* Overview */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-3">
                <Quote className="text-[#e9ce8c] mr-2" />
                <h2 className="text-2xl font-semibold text-[#12110e]">Mission</h2>
              </div>
              <p className="text-gray-700">{TAFGA.mission}</p>

              <div className="flex items-center mt-6 mb-2">
                <HeartHandshake className="text-[#e9ce8c] mr-2" />
                <h3 className="text-xl font-semibold text-[#12110e]">Guiding Principles</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
                {TAFGA.guiding_principles.map((g, i) => (
                  <li key={i} className="bg-gray-50 rounded-lg px-3 py-2">{g}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-[#12110e] mb-3">Headquarters</h3>
              <div className="flex items-start text-gray-700">
                <MapPin className="text-[#e9ce8c] mr-2 mt-1" />
                <div>
                  <div>{TAFGA.headquarters.address}</div>
                  <div className="mt-1">Tel: {TAFGA.headquarters.phone}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard value={wf.employees.toLocaleString() + "+"} label="Employees" icon={<Users className="text-[#e9ce8c]" />} />
            <StatCard value={wf.work_sites + "+"} label="Work sites" icon={<Building2 className="text-[#e9ce8c]" />} />
            <StatCard value={wf.nationalities} label="Nationalities" />
            <StatCard value={wf.countries_operated.length} label="Countries" />
          </div>

          {/* Certifications */}
          <h2 className="text-3xl font-bold text-[#12110e] mb-6">International Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {TAFGA.certifications.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex items-center mb-2">
                  <Award className="text-[#e9ce8c] mr-3" />
                  <h3 className="text-lg font-semibold text-[#12110e]">
                    {c.standard}{c.version ? ` (${c.version})` : ''}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {c.description}{c.note ? ` — ${c.note}` : ''}
                </p>
              </div>
            ))}
          </div>

          {/* Projects & achievements */}
          <h2 className="text-3xl font-bold text-[#12110e] mb-6">Featured Projects & Achievements</h2>
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {TAFGA.projects.map((p, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#12110e] mb-1">{p.name}</h3>
                <p className="text-gray-700 mb-3">{p.description}</p>
                {p.highlights && (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Clients */}
          <h2 className="text-3xl font-bold text-[#12110e] mb-6">Key Clients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TAFGA.clients.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
                <div className="font-semibold text-[#12110e]">{c.name}</div>
                <div className="text-sm text-gray-600">{c.sector}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link to="/#contact" className="inline-flex items-center bg-[#12110e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#645c42] transition">
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TamimiMore;