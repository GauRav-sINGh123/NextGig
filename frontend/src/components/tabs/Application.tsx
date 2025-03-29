import {motion} from 'framer-motion'
import AnimatedGradientBorder from '../AnimatedGradientBorder'
import { StatusBadge } from "../index";
import { Briefcase } from 'lucide-react';

const applications = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    status: "Accepted",
    date: "2025-03-15",
    logo: "https://via.placeholder.com/40",
  },
];

function Application() {
  return (
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
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
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
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">
                          Job
                        </th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">
                          Company
                        </th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">
                          Date Applied
                        </th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">
                          Action
                        </th>
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
                          whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                          }}
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
                              <span className="font-medium">
                                {app.jobTitle}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-white/80">
                            {app.company}
                          </td>
                          <td className="py-4 px-4 text-white/60 text-sm">
                            {app.date}
                          </td>
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
                    <p className="text-white/60">
                      You haven't applied to any jobs yet.
                    </p>
                    <a href="/" className="text-blue-500 mt-2 inline-block">
                      Browse Jobs
                    </a>
                  </div>
                )}
              </div>
            </AnimatedGradientBorder>
          </motion.div>
  )
}

export default Application