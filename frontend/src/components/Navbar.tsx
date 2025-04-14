import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserAvatar from "./UserAvatar"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { setUser } from '../store/slices/authSlice';

function Navbar() {
  const user = useSelector((state: RootState) => state.authUser.user);
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const dispatch=useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    dispatch(setUser(null));
  }

  return (
    <header
  className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 bg-black ${
    isScrolled ? "bg-opacity-80 backdrop-blur shadow-md" : "bg-opacity-20"
  }`}
>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-full mx-auto py-4 px-4 sm:px-6 md:px-8 flex justify-between items-center"
    >
      <Link to="/" className="flex items-center space-x-3">
        <Briefcase className="w-5 h-5 text-blue-500" />
        <span className="text-lg font-semibold">NextGig</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link to={"/jobs"} className="text-sm text-white/70 hover:text-white transition-colors">
          Find Jobs
        </Link>
        <Link to='/careers' className="text-sm text-white/70 hover:text-white transition-colors">
          Careers
        </Link>
      </nav>
      {user ? (
        <div>
          <UserAvatar user={user} onLogout={handleLogout} />
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-sm text-white/70 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            Sign up
          </Link>
        </div>
      )}
    </motion.div>
  </header>
)
}

export default Navbar

