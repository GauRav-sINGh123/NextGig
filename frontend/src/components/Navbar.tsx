import {motion} from "framer-motion"
import { Briefcase } from "lucide-react";
import { useEffect, useState } from "react";


function Navbar() {
    
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 navbar-blur ${isScrolled ? 'scrolled' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
        >
          <div className="flex items-center space-x-3">
            <Briefcase className="w-5 h-5 text-blue-500" />
            <span className="text-lg font-semibold">NextGig</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Find Jobs</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Companies</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Resources</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Career Tips</a>
          </nav>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Post a Job
          </motion.button>
        </motion.div>
      </header>
  )
}

export default Navbar