 

import { useState } from "react"
import { LogOut, User } from "lucide-react"

interface UserAvatarProps {
  user: {
    name: string
    email: string
    avatarUrl?: string
  }
  onLogout: () => void
}

export default function UserAvatar({ user, onLogout }: UserAvatarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const initials = user.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center border-2 border-gray-700 h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl || "/placeholder.svg"}
            alt={user.name}
            className="h-9 w-9 rounded-full  object-cover"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium">
            {initials}
          </div>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0" onClick={closeDropdown} />
          <div className="absolute right-0 mt-2 w-60 rounded-xl overflow-hidden z-10">
            <div className="relative backdrop-blur-xl bg-white/10 dark:bg-black/10 border-t border-l border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-200">
              {/* Glassmorphic inner glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-50 pointer-events-none" />

              <div className="relative py-1">
                <div className="flex items-center gap-3 px-4 py-3">
                  {user.avatarUrl ? (
                    <img
                      src={user.avatarUrl || "/placeholder.svg"}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/50 dark:ring-white/20"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground text-sm font-medium ring-2 ring-white/50 dark:ring-white/20">
                      {initials}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-foreground/90">{user.name}</p>
                    <p className="text-xs text-foreground/60">{user.email}</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-1" />

                <a
                  href="/profile"
                  className="flex items-center px-4 py-2 text-sm text-foreground/80 hover:bg-white/10 dark:hover:bg-white/5 hover:text-foreground w-full text-left transition-colors duration-200"
                  onClick={closeDropdown}
                >
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </a>

                <button
                  onClick={() => {
                    onLogout()
                    closeDropdown()
                  }}
                  className="flex items-center px-4 py-2 text-sm text-destructive/80 hover:bg-white/10 dark:hover:bg-white/5 hover:text-destructive w-full text-left transition-colors duration-200"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

