import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line} from 'recharts'
import {motion} from 'framer-motion'
import AnimatedGradientBorder from './AnimatedGradientBorder';

function Analytic() {
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

     <div className="max-w-7xl mx-auto">
        <AnimatedGradientBorder>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/5 p-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Job Market Trends</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">+28%</span>
                  <span className="text-white/60">in tech jobs this month</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button className="px-4 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition-colors">Weekly</button>
                <button className="px-4 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition-colors">Monthly</button>
                <button className="px-4 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition-colors">Yearly</button>
              </div>
            </div>
            < AnimatedGradientBorder>
            <div className="h-[400px] rounded-xl p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
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
            </AnimatedGradientBorder>
          </motion.div>
          </AnimatedGradientBorder>
        </div>

  )
}

export default Analytic