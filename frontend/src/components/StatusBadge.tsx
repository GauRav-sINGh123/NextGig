import { AlertCircle, Briefcase, CheckCircle, Clock, XCircle } from "lucide-react"
import { motion} from "framer-motion"

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  let bgColor = ""
  let textColor = ""
  let Icon = Clock

  switch (status) {
    case "Accepted":
      bgColor = "bg-green-500/20"
      textColor = "text-green-500"
      Icon = CheckCircle
      break
    case "Rejected":
      bgColor = "bg-red-500/20"
      textColor = "text-red-500"
      Icon = XCircle
      break
    case "Interview":
      bgColor = "bg-blue-500/20"
      textColor = "text-blue-500"
      Icon = Briefcase
      break
    case "Pending":
    default:
      bgColor = "bg-yellow-500/20"
      textColor = "text-yellow-500"
      Icon = AlertCircle
      break
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex items-center space-x-1 px-3 py-1 rounded-full ${bgColor} ${textColor}`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span className="text-xs font-medium">{status}</span>
    </motion.div>
  )
}

export default StatusBadge