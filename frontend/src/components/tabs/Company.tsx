import { Building2 } from "lucide-react";
import AnimatedGradientBorder from "../AnimatedGradientBorder";
import {motion} from 'framer-motion'


function Company() {
  return (
    <motion.div
      key="company"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatedGradientBorder>
        <div className="p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              Manage Company
            </h2>

            {/* Create Company Button */}
            <motion.button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-blue-600 mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => console.log("Create Company clicked")} // Replace with actual navigation logic
            >
              + Create Company
            </motion.button>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
              {/* <span className="text-white font-medium">{user?bio?.company?.name || "No Company"}</span> */}
              {/* <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm">
                      Delete
                    </button> */}
            </div>
          </div>
        </div>
      </AnimatedGradientBorder>
    </motion.div>
  );
}

export default Company;
