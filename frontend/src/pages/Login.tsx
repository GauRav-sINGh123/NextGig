import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { loginSchema } from '../validation/loginSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import {toast} from 'sonner'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/authSlice';
import { AnimatedGradientBorder } from '../components';
// import { RootState } from '../store/store';

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
  const router=useNavigate()
  const dispatch=useDispatch()
  // const user = useSelector((state: RootState) => state.authUser.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {

     try {
        const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/login`,data,{
          withCredentials:true
        })
        if(res.status!==200){
            toast.error('Login error');
            return;
        }
        dispatch(setUser(res.data.user));
        toast.success('Login successful');
        router('/profile')
      } catch (error:any) {
        toast.error("Something Went Wrong");
      }
  };

  
  return (

    <div className="min-h-screen auth-gradient flex items-center justify-center px-6 sm:px-4">
       <Link to="/" className="absolute top-4 right-4 text-[13px] text-gray-400 hover:underline">
        Back to Home
      </Link>
      <AnimatedGradientBorder>
      <div className="w-full px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-bold text-gradient mb-2">Welcome back</h2>
            <p className="text-white/60">Sign in to access your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2  w-5 h-5 text-white/40" />
                <input
                  type="email"
                  {...register("email")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500  focus:ring-2 focus:ring-blue-500/20 transition-all ease-in-out duration-300"
                  placeholder="Enter your email"
                  autoComplete="off"
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
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ease-in-out duration-300"
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && (
              <p className="text-blue-400 text-sm mt-1">{errors.password.message}</p>
            )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600 transition-all ease-in-out duration-200 shadow-lg shadow-blue-500/20"
            >
               {isSubmitting ? "Signing In..." : "Sign In"}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/60">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-400 hover:text-blue-300">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
     </AnimatedGradientBorder>
    </div>
  );
}