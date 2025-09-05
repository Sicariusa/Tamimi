
  
export type Job = {
  title: string;
  description: string;
  location: string;
  department: string;
  skills: string[];
};

const opportunities: Job[] = [
  {
    title: "Engineering & Technical Services",
    description: "Lead and support technical projects for Tamimi’s infrastructure and facilities.",
    location: "Riyadh",
    department: "Engineering",
    skills: ["Project Management", "AutoCAD", "Team Leadership"]
  },
  {
    title: "Retail Operations Manager",
    description: "Oversee daily operations of Tamimi Markets, ensuring customer satisfaction and efficient processes.",
    location: "Jeddah",
    department: "Retail",
    skills: ["Operations", "Customer Service", "Inventory Management"]
  },
  {
    title: "Project Manager",
    description: "Manage cross-functional projects from planning to execution, ensuring timely delivery.",
    location: "Dammam",
    department: "Project Management",
    skills: ["Leadership", "Scheduling", "Budgeting"]
  },
  {
    title: "Finance Analyst",
    description: "Analyze financial data and prepare reports to support strategic decisions.",
    location: "Riyadh",
    department: "Finance",
    skills: ["Excel", "Financial Modeling", "Reporting"]
  },
  {
    title: "HR Specialist",
    description: "Support recruitment, onboarding, and employee relations for Tamimi Group.",
    location: "Khobar",
    department: "Human Resources",
    skills: ["Recruitment", "Communication", "HRIS"]
  },
  {
    title: "IT Support Engineer",
    description: "Provide technical support and maintain IT systems across Tamimi offices.",
    location: "Jeddah",
    department: "IT",
    skills: ["Troubleshooting", "Networking", "Customer Service"]
  },
  {
    title: "Supply Chain Coordinator",
    description: "Coordinate logistics and supply chain activities to ensure timely delivery of goods.",
    location: "Riyadh",
    department: "Supply Chain",
    skills: ["Logistics", "ERP", "Negotiation"]
  },
  {
    title: "Business Development Executive",
    description: "Identify new business opportunities and build relationships with partners.",
    location: "Dammam",
    department: "Business Development",
    skills: ["Sales", "Market Research", "Presentation"]
  },
  {
    title: "Marketing Coordinator",
    description: "Assist in planning and executing marketing campaigns for Tamimi Group brands.",
    location: "Riyadh",
    department: "Marketing",
    skills: ["Content Creation", "Social Media", "Analytics"]
  },
  {
    title: "Legal Advisor",
    description: "Provide legal guidance and support for contracts and compliance matters.",
    location: "Khobar",
    department: "Legal",
    skills: ["Contract Law", "Negotiation", "Compliance"]
  }
];

export default opportunities;