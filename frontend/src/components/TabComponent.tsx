import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Company,Application,UserProfile} from "../components/index";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
 
function TabComponent() {
  const [activeTab, setActiveTab] = useState("profile");
  const user = useSelector((state: RootState) => state.authUser.user);
  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-8 relative">
        {["profile", "applications", user?.role === "recruiter" && "company"]
          .filter(Boolean)
          .map((tab) => (
            <motion.button
              key={String(tab)}
              onClick={() => setActiveTab(tab as string)}
              className={`px-6 py-3 text-sm font-medium cursor-pointer transition-colors relative ${
                activeTab === tab
                  ? "text-blue-500"
                  : "text-white/60 hover:text-white"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {(tab as string).charAt(0).toUpperCase() +
                (tab as string).slice(1)}
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
          <UserProfile/>
        )}

        {/* Applications Content */}
        {activeTab === "applications" && (
         <Application/>
        )}

        {activeTab === "company" && user?.role === "recruiter" && (
          <Company/>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TabComponent;
