import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  MapPin,
  DollarSign,
  Clock,
  Briefcase,
  Building2,
  ChevronDown
} from 'lucide-react';
import { AnimatedGradientBorder } from '../components';

// Sample job data
const jobsData = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    type: 'Full-time',
    experience: '5+ years',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80',
    remote: true,
    posted: '2 days ago',
    skills: ['React', 'TypeScript', 'Node.js'],
    description: 'We are looking for a Senior Frontend Developer to join our team...'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'Design Studio',
    location: 'New York, NY',
    salary: '$90k - $120k',
    type: 'Contract',
    experience: '3+ years',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80',
    remote: false,
    posted: '1 week ago',
    skills: ['Figma', 'Adobe XD', 'Sketch'],
    description: 'Seeking a talented UX/UI Designer to create beautiful...'
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    company: 'Tech Innovators',
    location: 'Remote',
    salary: '$130k - $160k',
    type: 'Full-time',
    experience: '4+ years',
    logo: 'https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80',
    remote: true,
    posted: '3 days ago',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    description: 'Join our team as a Full Stack Engineer...'
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'Austin, TX',
    salary: '$110k - $140k',
    type: 'Full-time',
    experience: '6+ years',
    logo: 'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80',
    remote: true,
    posted: '1 day ago',
    skills: ['Agile', 'Scrum', 'Product Strategy'],
    description: 'Looking for an experienced Product Manager...'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'Cloud Solutions',
    location: 'Seattle, WA',
    salary: '$140k - $170k',
    type: 'Full-time',
    experience: '5+ years',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80',
    remote: true,
    posted: '4 days ago',
    skills: ['AWS', 'Docker', 'Kubernetes'],
    description: 'Join our DevOps team to build and maintain...'
  }
];

const experienceLevels = [
  'Select Experience Level',
  'Entry Level',
  '1-3 years',
  '3-5 years',
  '5+ years',
  '7+ years',
  '10+ years'
];

const jobTypes = [
  'Select Job Type',
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
  'Remote'
];

const salaryRanges = [
  'Select Salary Range',
  '$0 - $50k',
  '$50k - $80k',
  '$80k - $100k',
  '$100k - $130k',
  '$130k - $160k',
  '$160k+'
];

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedSalary, setSelectedSalary] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  useEffect(() => {
    let filtered = jobsData;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(job => job.type === selectedType);
    }

    if (selectedExperience !== 'All') {
      filtered = filtered.filter(job => job.experience === selectedExperience);
    }

    if (selectedSalary !== 'All') {
      filtered = filtered.filter(job => {
        const [min, max] = selectedSalary.replace(/[^0-9-]/g, '').split('-').map(Number);
        const jobSalary = parseInt(job.salary.replace(/[^0-9-]/g, '').split('-')[0]);
        return jobSalary >= min && (!max || jobSalary <= max);
      });
    }

    setFilteredJobs(filtered);
  }, [searchQuery, selectedType, selectedExperience, selectedSalary]);

  const FilterDropdown = ({ 
    options, 
    value, 
    onChange 
  }: { 
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#0A0F1C]/60 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-2.5 text-white appearance-none cursor-pointer focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 hover:bg-[#0A0F1C]/80 transition-colors"
      >
        {options.map(option => (
          <option key={option} value={option} className="bg-[#0A0F1C]">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
    </div>
  );

  return (
    <div className="auth-gradient min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <AnimatedGradientBorder>
        <div className="bg-[#0A0F1C]/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search Bar */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for jobs, companies, or keywords..."
                  className="w-full bg-[#0A0F1C]/60 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 hover:bg-[#0A0F1C]/80 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div>
              <FilterDropdown
                label="Job Type"
                options={jobTypes}
                value={selectedType}
                onChange={setSelectedType}
              />
            </div>
            <div>
              <FilterDropdown
                label="Experience"
                options={experienceLevels}
                value={selectedExperience}
                onChange={setSelectedExperience}
              />
            </div>
            <div>
              <FilterDropdown
                label="Salary"
                options={salaryRanges}
                value={selectedSalary}
                onChange={setSelectedSalary}
              />
            </div>
          </div>
        </div>
        </AnimatedGradientBorder>
        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map(job => (
            <AnimatedGradientBorder className='bg-cyan-950 cursor-pointer '>
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-xl p-6 "
            >
              <div className="flex items-start gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-lg object-cover ring-1 ring-white/10"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-3 text-white/60 text-sm">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20">
                        {job.type}
                      </span>
                      {job.remote && (
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/20">
                          Remote
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white/5 text-white/80 px-3 py-1 rounded-full text-sm border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-white/40 text-sm line-clamp-1">
                      {job.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-500/20 text-blue-400 cursor-pointer px-4 py-2 rounded-lg text-sm font-medium   border border-blue-500/20"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
         </AnimatedGradientBorder>
          ))}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No jobs found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedType('All');
                  setSelectedExperience('All');
                  setSelectedSalary('All');
                  setSearchQuery('');
                }}
                className="text-blue-500 mt-2 hover:text-blue-400"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}