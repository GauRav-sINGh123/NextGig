import { ArrowRight, BarChart3, Briefcase, FileText, TrendingUp } from 'lucide-react'
import {motion} from 'framer-motion'
import { Line, LineChart, ResponsiveContainer } from 'recharts'


function FeatureGrid() {
    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 500 },
        { name: 'Jun', value: 900 },
        { name: 'Jul', value: 1000 },
      ];
      
  return (
    <section className="py-24 px-6 border-t border-white/10 mb-28">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card-gradient p-8 rounded-2xl border border-white/5"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-blue-600/20 rounded-lg">
            <Briefcase className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold">Easy Job Search</h3>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Find the perfect job match with our advanced AI-powered search
        </p>
        <div className="mt-8 p-4 bg-black/40 rounded-xl">
          <div className="flex items-center space-x-3 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">Trending jobs</span>
            <span className="text-xs bg-blue-600 px-2 py-0.5 rounded-full">NEW</span>
          </div>
          <p className="text-xs text-white/40">Updated hourly</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card-gradient p-8 rounded-2xl border border-white/5"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-blue-600/20 rounded-lg">
            <BarChart3 className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold">Market Insights</h3>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Get real-time salary data and market demand insights
        </p>
        <div className="mt-8 h-32 relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card-gradient p-8 rounded-2xl border border-white/5"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-blue-600/20 rounded-lg">
            <FileText className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold">Career Resources</h3>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Access guides, templates, and expert career advice
        </p>
        <div className="mt-8 space-y-4">
          {['Resume Guide.pdf', 'Interview Tips.pdf', 'Career Path.pdf'].map((file) => (
            <div key={file} className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
              <span className="text-sm text-white/80">{file}</span>
              <ArrowRight className="w-4 h-4 text-blue-500" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default FeatureGrid