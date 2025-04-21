import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Building2,MapPin,Globe,Upload,Plus} from 'lucide-react';

export default function CreateCompany() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    website: '',
    description: '',
    logo: null as File | null,
  });

  const [previewURL, setPreviewURL] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: file }));
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
  };

  

 

  return (
    <div className="auth-gradient min-h-screen relative overflow-hidden">
      {/* Top radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Additional glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/50 via-[#050508]/80 to-[#050508]" />

      {/* Content */}
      <div className="relative">
        {/* Header */}

        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-[#0A0F1C]/30 backdrop-blur-2xl rounded-2xl border border-white/10 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Card inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
            
            {/* Card content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-2">Create Company Profile</h1>
                <p className="text-white/60">Add your company details to start posting jobs</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Logo Upload */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-dashed border-white/20 flex items-center justify-center overflow-hidden backdrop-blur-xl">
                      {previewURL ? (
                        <img src={previewURL} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-white/40 mx-auto mb-2" />
                          <span className="text-sm text-white/40">Upload Logo</span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  

                   

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="Enter location"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Website
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                        className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>

                   

                   

                

                  {/* Description */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Company Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Tell us about your company..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-8">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/20"
                  >
                    Create Company
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}