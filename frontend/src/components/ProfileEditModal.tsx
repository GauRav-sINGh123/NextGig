import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

type ProfileEditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (profileData: any) => void;
};

export default function ProfileEditModal({
  isOpen,
  onClose,
  onSave,
}: ProfileEditModalProps) {
  const user = useSelector((state: RootState) => state.authUser.user);

  const [formData, setFormData] = useState({
    fullName: "",
    skills: [] as string[],
    currentCompany: "",
    education: "",
    college: "",
    collegeEndDate: "",
    currentRole: "",
    profilePhoto: "",
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        skills: user.profile?.skills || [],
        currentCompany: user.profile?.currentCompany || "",
        education: user.profile?.education || "",
        college: user.profile?.college || "",
        collegeEndDate: user.profile?.collegeEndDate || "",
        currentRole: user.profile?.currentRole || "",
        profilePhoto: user.profile?.profilePhoto || "",
      });

      setPreviewImage(user.profile?.profilePhoto || null);
    }
  }, [user, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value.includes(",")) {
      const newSkill = value.replace(",", "").trim();
  
      // Convert all skills to lowercase for case-insensitive comparison
      const lowerCaseSkills = formData.skills.map(skill => skill.toLowerCase());
  
      if (newSkill && !lowerCaseSkills.includes(newSkill.toLowerCase())) {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, newSkill],
        }));
      }
      setSkillInput("");  
    } else {
      setSkillInput(value);
    }
  };
  

  const removeSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
        setFormData((prev) => ({ ...prev, profilePhoto: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-xl bg-black p-6 custom-scrollbar">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-bold mb-6 text-white">
                Edit Profile
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Profile Photo */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Profile Photo
                  </label>
                  <div className="flex items-center gap-4">
                    <img
                      src={previewImage || "/Profile.png"}
                      alt="Profile"
                      className="w-20 h-20 rounded-full border-4 border-black object-cover"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Full Name */}
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white"
                />

                {/* Skills */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Skills (type and press `,` to add)
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm flex items-center"
                      >
                        {skill}
                        <X
                          className="ml-2 cursor-pointer w-4 h-4"
                          onClick={() => removeSkill(index)}
                        />
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={skillInput}
                    onChange={handleSkillInput}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white"
                  />
                </div>

                {/* Other Inputs */}
                <input type="text" name="currentCompany" placeholder="Current Company" value={formData.currentCompany} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white" />
                <input type="text" name="currentRole" placeholder="Current Role" value={formData.currentRole} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white" />
                <input type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white" />

                {/* Date Picker Fix */}
                <input type="date" name="collegeEndDate" value={formData.collegeEndDate} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white cursor-pointer" />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
                  Save Changes
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
