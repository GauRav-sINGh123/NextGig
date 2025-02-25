import {motion} from 'framer-motion'
import { Search } from 'lucide-react';
import { useState } from 'react';

function Hero() {
    const [searchQuery, setSearchQuery] = useState('');
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
    <section className="hero-gradient pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center bg-white/5 rounded-full px-4 py-1 mb-8 backdrop-blur-sm border border-white/10"
          >
            <span className="text-xs font-medium bg-blue-600 text-white px-2 py-0.5 rounded-full mr-2">NEW</span>
            <span className="text-sm text-white/70">Over 1000+ new jobs this week</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight"
          >
            Find Your Next<br />Dream Job Today
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/60 text-xl mb-12 max-w-2xl mx-auto"
          >
            Discover thousands of job opportunities with all the information you need.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="search-bar rounded-xl p-2 flex items-center">
              <Search className="w-5 h-5 text-blue-500 ml-3 mr-2" />
              <input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="bg-transparent w-full focus:outline-none text-white px-2 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 px-6 py-2 rounded-lg font-medium text-sm ml-2 glow"
              >
                Search
              </motion.button>
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-white/40 text-sm"
          >
            Popular: UI Designer, UX Researcher, Android Developer, iOS Developer
          </motion.p>
        </motion.div>
      </section>
  )
}

export default Hero