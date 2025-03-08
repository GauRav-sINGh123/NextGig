import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  MapPin,
  DollarSign,
  Clock,
} from 'lucide-react';
import { AnimatedGradientBorder } from '../components';

const exploreJobs = [
  {
    id: 1,
    title: 'UI/UX Designer',
    company: 'Creative Labs',
    location: 'Los Angeles, CA',
    salary: '$80k - $120k',
    type: 'Full-time',
    logo: 'https://via.placeholder.com/50',
    postedDate: '2 days ago',
    experience: '3-5 years',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Tech Innovators',
    location: 'Remote',
    salary: '$100k - $140k',
    type: 'Contract',
    logo: 'https://via.placeholder.com/50',
    postedDate: '1 week ago',
    experience: '4-6 years',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'Cloud Solutions',
    location: 'Seattle, WA',
    salary: '$130k - $160k',
    type: 'Part-time',
    logo: 'https://via.placeholder.com/50',
    postedDate: '3 days ago',
    experience: '5-7 years',
  },
  {
    id: 4,
    title: 'Mobile Developer',
    company: 'App Masters',
    location: 'Austin, TX',
    salary: '$90k - $130k',
    type: 'Full-time',
    logo: 'https://via.placeholder.com/50',
    postedDate: '5 days ago',
    experience: '2-4 years',
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'Data Analytics Co',
    location: 'Remote',
    salary: '$110k - $150k',
    type: 'Contract',
    logo: 'https://via.placeholder.com/50',
    postedDate: '1 day ago',
    experience: '3-5 years',
  },
];

export default function ExploreJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState(exploreJobs);

  useEffect(() => {
    let filtered = exploreJobs;
    
    if (selectedType !== 'All') {
      filtered = filtered.filter(job => job.type === selectedType);
    }
    
    if (selectedLocation !== 'All') {
      filtered = filtered.filter(job => job.location === selectedLocation);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
      );
    }
    
    setFilteredJobs(filtered);
  }, [selectedType, selectedLocation, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="hero-gradient min-h-screen bg-black text-white">
     
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex z-50 flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Explore Jobs</h1>
              <p className="text-white/60">Find your perfect role from our curated job listings</p>
            </div>

            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
              <div className="search-bar rounded-xl p-2 flex items-center flex-1 md:w-80">
                <Search className="w-5 h-5 text-blue-500 ml-3 mr-2" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="bg-transparent w-full focus:outline-none text-white px-2 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/80 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent border border-white/10 rounded-lg px-6 py-2 text-sm text-white/80 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="All">Full Time</option>
                <option value="Remote">Remote</option>
                <option value="Remote">Part Time</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Jobs Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredJobs.map((job) => (
            <AnimatedGradientBorder className='border border-blue-900' key={job.id}>
            <motion.div
              key={job.id}
              variants={itemVariants}
               
              className="rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <motion.img 
                    src={job.logo} 
                    alt={job.company} 
                    className="w-12 h-12 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <p className="text-white/60 text-sm">{job.company}</p>
                  </div>
                </div>
                <span className="text-white/60 text-sm">{job.type}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-white/60">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center text-white/60">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span className="text-sm">{job.salary}</span>
                </div>
                <div className="flex items-center text-white/60">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{job.postedDate}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-white/40 text-sm">{job.experience} experience</span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium  cursor-pointer transition-colors"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          </AnimatedGradientBorder>
          ))}
        </motion.div>

        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-white/60">No jobs found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedType('All');
                setSelectedLocation('All');
                setSearchQuery('');
              }}
              className="text-blue-500 mt-2 hover:text-blue-400"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}