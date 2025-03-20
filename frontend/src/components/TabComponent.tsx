import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {User,Mail,Phone,Building2,GraduationCap,FileText,Briefcase,Sparkles} from "lucide-react"
import { AnimatedGradientBorder ,StatusBadge} from '../components/index'
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

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
]


function TabComponent() {
  const [activeTab, setActiveTab] = useState("profile")
  const user = useSelector((state: RootState) => state.authUser.user);
  return (
    <div> 
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
                          <p className="text-white font-medium">{user?.fullName}</p>
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
                          <p className="text-white font-medium">{user?.email}</p>
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
                            <span className="text-sm">Phone Number</span>
                          </div>
                          <p className="text-white font-medium">{user?.phoneNumber}</p>
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
                          <p className="text-white font-medium">{user?.profile?.currentCompany}</p>
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
                            <h3 className="font-medium">{user?.profile?.education}</h3>
                            <p className="text-white/60 text-sm">{user?.profile?.college}</p>
                            <p className="text-white/40 text-xs mt-1">{user?.profile?.collegeEndDate}</p>
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
                      {user?.profile?.skills?.map(
                        (skill, index:any) => (
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
          </AnimatePresence >
    </div>
  )
}

export default TabComponent