import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { signupSchema } from '../validation/signupSchema';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import axios from 'axios';

type SignupFormInputs = z.infer<typeof signupSchema>;
export default function Signup() {
  const router=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data:SignupFormInputs) => {
    try {
      const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/signup`,data)
      if(res.status===200){
        toast.success("Account created successfully")
        router('/login')
      }
      
    } catch (error:any) {
      toast.error("Unable to create account")
    }
  }
 

  return (
    <div className="min-h-screen auth-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-md mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-gradient rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-bold text-gradient mb-2">Create account</h2>
            <p className="text-white/60">Sign up to get started</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              {errors.fullName && (
              <p className="text-blue-400 text-sm mt-1">{errors.fullName.message}</p>
            )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  {...register("email")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
              <p className="text-blue-400 text-sm mt-1">{errors.email.message}</p>
            )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="password"
                  {...register("password")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Create a password"
                />
              </div>
              {errors.password && (
              <p className="text-blue-400 text-sm mt-1">{errors.password.message}</p>
            )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Role
              </label>
              <div className="relative">
                <select
                  {...register("role")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" disabled className="bg-gray-800">Select your role</option>
                  <option value="student" className="bg-gray-800">Student</option>
                  <option value="recruiter" className="bg-gray-800">Recruiter</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/40">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {errors.role && (
              <p className="text-blue-400 text-sm mt-1">{errors.role.message}</p>
                  )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              {isSubmitting ? "Creating Account..." : "Create An Account"}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/60">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400 hover:text-blue-300">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}