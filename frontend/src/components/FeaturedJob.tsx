import {motion} from 'framer-motion'
import { ArrowRight, Building2, DollarSign, MapPin } from 'lucide-react'

function FeaturedJob() {
    const featuredJobs = [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        salary: '$120k - $150k',
        type: 'Full-time',
        logo: 'https://via.placeholder.com/50',
      },
      {
        id: 2,
        title: 'Product Designer',
        company: 'Design Studio',
        location: 'Remote',
        salary: '$90k - $120k',
        type: 'Full-time',
        logo: 'https://via.placeholder.com/50',
      },
      {
        id: 3,
        title: 'Backend Engineer',
        company: 'Cloud Systems',
        location: 'New York, NY',
        salary: '$130k - $160k',
        type: 'Full-time',
        logo: 'https://via.placeholder.com/50',
      },
    ];
  return (
    <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
              <p className="text-white/60">Discover your next career opportunity</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-blue-500 flex items-center hover:text-blue-400"
            >
              View all jobs
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.02 }}
                className="job-card rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg" />
                  <span className="text-white/60 text-sm">{job.type}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-white/60">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.company}</span>
                  </div>
                  <div className="flex items-center text-white/60">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-white/60">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-blue-600/20 text-blue-500 py-2 rounded-lg text-sm font-medium hover:bg-blue-600/30 transition-colors"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturedJob