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
    collegeEndDate: "",
    currentRole: "",
  });

  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        skills: user.profile?.skills || [],
        currentCompany: user.profile?.currentCompany || "",
        education: user.profile?.education || "",
        collegeEndDate: user.profile?.collegeEndDate || "",
        currentRole: user.profile?.currentRole || "",
      });
    }
  }, [user, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value.includes(",")) {
      const newSkill = value.replace(",", "").trim();
      const lowerCaseSkills = formData.skills.map((skill) => skill.toLowerCase());

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

              <h2 className="text-2xl font-bold mb-6 text-white">Edit Profile</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <label className="block text-white/80 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />

                {/* Skills */}
                <label className="block text-white/80 text-sm font-medium">
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
                  placeholder="Add a skill and press `,`"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />

                {/* Current Company */}
                <label className="block text-white/80 text-sm font-medium">
                  Current Company
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  placeholder="Enter your current company"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />

                {/* Current Role */}
                <label className="block text-white/80 text-sm font-medium">
                  Current Role
                </label>
                <input
                  type="text"
                  name="currentRole"
                  placeholder="Enter your current role"
                  value={formData.currentRole}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />

                {/* Education */}
                <label className="block text-white/80 text-sm font-medium">
                  Education
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Enter your education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />

                {/* College End Date */}
                <label className="block text-white/80 text-sm font-medium">
                  College End Year
                </label>
                <input
                  type="text"
                  name="collegeEndDate"
                  value={formData.collegeEndDate}
                  onChange={handleChange}
                  placeholder="Enter your college end year"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg"
                >
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
