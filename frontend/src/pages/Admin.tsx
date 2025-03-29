import { Edit } from "lucide-react";
import {AnimatedGradientBorder,ParticleBackground,TabComponent} from "../components/index";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import ProfileEditModal from "../components/ProfileEditModal";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from '../store/slices/authSlice';

export default function Admin() {
 const [isEditModalOpen, setIsEditModalOpen] = useState(false)
 const user = useSelector((state: RootState) => state.authUser.user);
 const dispatch=useDispatch()

  const handleSaveProfile =async (profileData: any) => {
    try {
      const response= await axios.put(`${import.meta.env.VITE_BASE_URL}/api/auth/update_user`,profileData,{withCredentials:true});
      if(response.status!==200){
        toast.error('Profile update failed')
        return
      }
      dispatch(setUser(response.data.user));
      toast.success("Profile updated successfully")
    } catch (error:any) {
      toast.error("Error saving profile: ");
    }
  }
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
                  src="/public/Profile.png"
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
                      {user?.fullName}
                    </motion.h1>
                    <motion.p
                      className="text-white/60"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                     {user?.profile.currentRole}
                    </motion.p>
                  </div>
                  <motion.button
                    onClick={() => setIsEditModalOpen(true)}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    }}
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
        <TabComponent />
      </div>
      <ProfileEditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onSave={handleSaveProfile} />
    </div>
  );
}
