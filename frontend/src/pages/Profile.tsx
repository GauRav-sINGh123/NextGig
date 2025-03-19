import AnimatedGradientBorder from '../components/AnimatedGradientBorder'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  FileText,
  Edit,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Briefcase,
  Sparkles,
} from "lucide-react"

// Sample application data
const applications = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    status: "Accepted",
    date: "2025-03-15",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    jobTitle: "UX Designer",
    company: "Design Studio",
    status: "Pending",
    date: "2025-03-10",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    jobTitle: "Product Manager",
    company: "Innovate Labs",
    status: "Interview",
    date: "2025-03-05",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    jobTitle: "Full Stack Developer",
    company: "WebSolutions",
    status: "Rejected",
    date: "2025-02-28",
    logo: "https://via.placeholder.com/40",
  },
]

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  let bgColor = ""
  let textColor = ""
  let Icon = Clock

  switch (status) {
    case "Accepted":
      bgColor = "bg-green-500/20"
      textColor = "text-green-500"
      Icon = CheckCircle
      break
    case "Rejected":
      bgColor = "bg-red-500/20"
      textColor = "text-red-500"
      Icon = XCircle
      break
    case "Interview":
      bgColor = "bg-blue-500/20"
      textColor = "text-blue-500"
      Icon = Briefcase
      break
    case "Pending":
    default:
      bgColor = "bg-yellow-500/20"
      textColor = "text-yellow-500"
      Icon = AlertCircle
      break
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex items-center space-x-1 px-3 py-1 rounded-full ${bgColor} ${textColor}`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span className="text-xs font-medium">{status}</span>
    </motion.div>
  )
}


// Animated particles component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-500/30"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            opacity: [Math.random() * 0.5 + 0.2, Math.random() * 0.8 + 0.4, Math.random() * 0.5 + 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile")
  
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Profile Header */}
        <AnimatedGradientBorder className="mb-8">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <motion.div className="relative">
                <div className="absolute -inset-1 rounded-full opacity-70 blur-sm animate-[spin_8s_linear_infinite]"></div>
                <img
                  src='/public/Profile.png'
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-black relative z-10"
                />    
              </motion.div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <motion.h1
                      className="text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      Alex Morgan
                    </motion.h1>
                    <motion.p
                      className="text-white/60"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      Senior Frontend Developer
                    </motion.p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className=" bg-transparent text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:from-blue-700 hover:to-blue-800 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1">
                      <Edit className="w-3.5 h-3.5" />
                      Edit Profile
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGradientBorder>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-8 relative">
          {["profile", "applications"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium  cursor-pointer transition-colors relative ${
                activeTab === tab ? "text-blue-500" : "text-white/60 hover:text-white"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                  layoutId="activeTab"
                  initial={false}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Profile Content */}
        <AnimatePresence mode="wait">
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Personal Information */}
              <div className="md:col-span-2">
                <AnimatedGradientBorder className="mb-8">
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <User className="w-5 h-5 text-blue-500" />
                        Personal Information
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="flex items-center text-white/60">
                            <User className="w-4 h-4 mr-2" />
                            <span className="text-sm">Full Name</span>
                          </div>
                          <p className="text-white font-medium">Alex Morgan</p>
                        </motion.div>

                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center text-white/60">
                            <Mail className="w-4 h-4 mr-2" />
                            <span className="text-sm">Email</span>
                          </div>
                          <p className="text-white font-medium">alex.morgan@example.com</p>
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex items-center text-white/60">
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="text-sm">Phone</span>
                          </div>
                          <p className="text-white font-medium">+1 (555) 123-4567</p>
                        </motion.div>

                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="flex items-center text-white/60">
                            <Building2 className="w-4 h-4 mr-2" />
                            <span className="text-sm">Current Company</span>
                          </div>
                          <p className="text-white font-medium">TechCorp Inc.</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedGradientBorder>

                {/* Education */}
                <AnimatedGradientBorder className="mb-8">
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-blue-500" />
                        Education
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <motion.div
                        className="border-l-2 border-blue-500/30 pl-4 py-2 relative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
                        <div className="flex items-start">
                          <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 p-2 rounded-lg mr-4">
                            <GraduationCap className="w-5 h-5 text-blue-500" />
                          </div>
                          <div>
                            <h3 className="font-medium">Master of Computer Science</h3>
                            <p className="text-white/60 text-sm">Stanford University</p>
                            <p className="text-white/40 text-xs mt-1">2018 - 2020</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedGradientBorder>
              </div>

              {/* Resume and Skills */}
              <div className="md:col-span-1">
                <AnimatedGradientBorder className="mb-8">
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-500" />
                        Resume
                      </h2>
                    </div>

                    <motion.div
                      className="bg-white/5 rounded-xl p-4 flex items-center justify-between"
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="flex items-center">
                        <FileText className="w-8 h-8 text-blue-500 mr-3" />
                        <div>
                          <p className="font-medium">Alex_Morgan_Resume.pdf</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedGradientBorder>

                <AnimatedGradientBorder>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-blue-500" />
                        Skills
                      </h2>                    
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "JavaScript", "HTML/CSS", "Node.js", "GraphQL", "UI/UX", "Figma"].map(
                        (skill, index) => (
                          <motion.span
                            key={skill}
                            className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-400 px-3 py-1 rounded-full text-sm relative overflow-hidden group"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(59, 130, 246, 0.2)",
                            }}
                          >
                            <span className="relative z-10">{skill}</span>
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100"
                              initial={false}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.span>
                        ),
                      )}
                    </div>
                  </div>
                </AnimatedGradientBorder>
              </div>
            </motion.div>
          )}

          {/* Applications Content */}
          {activeTab === "applications" && (
            <motion.div
              key="applications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedGradientBorder>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      Job Applications
                    </h2>
                    <div className="flex space-x-2">
                      <motion.select
                        className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white/80"
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      >
                        <option>All Applications</option>
                        <option>Pending</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                        <option>Interview</option>
                      </motion.select>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Job</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Company</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Date Applied</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app, index) => (
                          <motion.tr
                            key={app.id}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
                          >
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <div className="relative w-8 h-8 mr-3">
                                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400/30 to-blue-600/30 animate-pulse"></div>
                                  <img
                                    src={app.logo || "/placeholder.svg"}
                                    alt={app.company}
                                    className="w-8 h-8 rounded relative z-10"
                                  />
                                </div>
                                <span className="font-medium">{app.jobTitle}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-white/80">{app.company}</td>
                            <td className="py-4 px-4 text-white/60 text-sm">{app.date}</td>
                            <td className="py-4 px-4">
                              <StatusBadge status={app.status} />
                            </td>
                            <td className="py-4 px-4">
                              <motion.button
                                className="text-blue-500 hover:text-blue-400 text-sm"
                                whileHover={{ scale: 1.05, x: 2 }}
                              >
                                View Details
                              </motion.button>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {applications.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-white/60">You haven't applied to any jobs yet.</p>
                      <a href="/" className="text-blue-500 mt-2 inline-block">
                        Browse Jobs
                      </a>
                    </div>
                  )}
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}

