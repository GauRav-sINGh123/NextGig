import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {GraduationCap,Users,Globe,Heart,Coffee,Laptop,Zap,ArrowRight} from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Remote-First Culture',
    description: 'Work from anywhere in the world. We believe in flexibility and trust.'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Annual learning stipend and dedicated time for professional growth.'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs for you and your family.'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible hours, unlimited PTO, and regular team retreats.'
  },
  {
    icon: Laptop,
    title: 'Equipment Budget',
    description: 'Get the tools you need to do your best work with our hardware allowance.'
  },
  {
    icon: Zap,
    title: 'Career Growth',
    description: 'Clear career progression paths and regular performance reviews.'
  }
];

const departments = [
  {
    name: 'Engineering',
    openings: 5,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    name: 'Design',
    openings: 3,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    name: 'Product',
    openings: 2,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400&h=300'
  },
  {
    name: 'Marketing',
    openings: 4,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=300'
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#050508] text-white">
     
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32">
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Join Our Mission to Transform Careers
            </h1>
            <p className="text-xl text-white/60 mb-8">
              We're building the future of job search and career development. Join us in making a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We offer more than just a job. Join us and be part of a team that values growth, innovation, and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-[#0A0F1C]/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-2xl" />
                <div className="relative">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Find your perfect role in one of our growing teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                  <p className="text-white/60">{dept.openings} open positions</p>
                  <Link
                    to="/jobs"
                    className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Openings
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0A0F1C]/30 backdrop-blur-xl rounded-2xl p-12 border border-white/10 overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-white/60 mb-8">
                Join our team of passionate individuals working to revolutionize the future of work.
              </p>
              <Link
                to="/jobs"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                Explore Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}