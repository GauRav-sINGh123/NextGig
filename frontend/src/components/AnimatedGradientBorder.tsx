// Animated gradient background component
const AnimatedGradientBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`relative rounded-2xl p-[1px] overflow-hidden bg-black ${className}`}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,rgba(68,97,242,0.4)_50%,transparent_75%)] animate-[gradient-shift_8s_ease_infinite]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(140deg,transparent_25%,rgba(59,130,246,0.3)_50%,transparent_75%)] animate-[gradient-shift_12s_ease_infinite]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(240deg,transparent_25%,rgba(99,102,241,0.2)_50%,transparent_75%)] animate-[gradient-shift_10s_ease_infinite]"></div>
        </div>
        <div className="relative z-10 h-full w-full rounded-2xl bg-black/90 backdrop-blur-sm">{children}</div>
      </div>
    )
  }
  
  export default AnimatedGradientBorder;