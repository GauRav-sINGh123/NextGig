import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserAvatar from "./UserAvatar"

function Navbar() {
  const [user, setUser] = useState<{ name: string; email: string; avatarUrl?: string } | null>({
    name: "John Doe",
    email: "john.doe@example.com",
    // avatarUrl: "https://github.com/shadcn.png",
  })
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
     
    setUser(null)
    console.log("User logged out")
  }

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 navbar-blur ${isScrolled ? "scrolled" : ""}`}>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-full mx-auto py-4 px-4 sm:px-6 md:px-8 flex justify-between items-center"
    >
      <div className="flex items-center space-x-3">
        <Briefcase className="w-5 h-5 text-blue-500" />
        <span className="text-lg font-semibold">NextGig</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
          Find Jobs
        </a>
        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
          Companies
        </a>
        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
          Career Tips
        </a>
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

