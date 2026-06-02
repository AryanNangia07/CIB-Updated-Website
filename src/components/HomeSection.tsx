import { motion } from 'motion/react';

interface HomeSectionProps {
  onNavigateTo: (tab: string) => void;
}

export default function HomeSection({ onNavigateTo }: HomeSectionProps) {
  return (
    <div className="space-y-16 py-6" id="home-section">
      {/* Hero Section */}
      <div className="bg-black text-white py-24 px-6 text-center border border-stone-900 rounded-lg">
        <motion.h1 
          className="text-4xl sm:text-6xl font-serif font-light tracking-tight mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Capital Investments at Berkeley
        </motion.h1>
        <motion.p 
          className="text-stone-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Berkeley's premier student-run investment organization dedicated to developing the next generation of investment professionals through rigorous research and real-world portfolio management.
        </motion.p>
        <motion.button 
          onClick={() => onNavigateTo('join')} 
          className="bg-white text-black hover:bg-stone-200 border-none px-10 py-4 text-base font-serif font-semibold tracking-wide cursor-pointer transition-all rounded shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join Our Team
        </motion.button>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-stone-950 border border-stone-900 rounded-md">
            <div className="text-5xl font-serif font-light text-white mb-2">45</div>
            <div className="text-xs text-stone-500 uppercase tracking-widest font-mono">Active Members</div>
          </div>
          <div className="text-center p-6 bg-stone-950 border border-stone-900 rounded-md">
            <div className="text-5xl font-serif font-light text-white mb-2">127</div>
            <div className="text-xs text-stone-500 uppercase tracking-widest font-mono">Stock Pitches</div>
          </div>
          <div className="text-center p-6 bg-stone-950 border border-stone-900 rounded-md">
            <div className="text-5xl font-serif font-light text-white mb-2">18%</div>
            <div className="text-xs text-stone-500 uppercase tracking-widest font-mono">Annual Return</div>
          </div>
          <div className="text-center p-6 bg-stone-950 border border-stone-900 rounded-md">
            <div className="text-5xl font-serif font-light text-white mb-2">95%</div>
            <div className="text-xs text-stone-500 uppercase tracking-widest font-mono">Finance Placement</div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">Who We Are</h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans font-light">
            Founded in 2015, Capital Investments at Berkeley brings together Berkeley's most talented and driven students to learn institutional-grade investment analysis. Through weekly meetings, stock pitch competitions, and our managed portfolio, members gain hands-on experience in equity research, quantitative modeling, and portfolio management.
          </p>
        </div>

        {/* Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div 
            className="border border-stone-900 bg-stone-950 hover:bg-stone-900 p-8 cursor-pointer rounded transition-all duration-300 flex flex-col justify-between"
            onClick={() => onNavigateTo('education')}
          >
            <div>
              <div className="text-xs text-stone-500 uppercase tracking-widest font-mono mb-3">Education</div>
              <h3 className="text-xl font-serif font-medium text-white mb-4">Learn from the best</h3>
              <p className="text-sm leading-relaxed text-stone-400 font-sans font-light">
                Comprehensive curriculum covering fundamental and quantitative analysis taught by experienced VPs.
              </p>
            </div>
          </div>
          
          <div 
            className="border border-stone-900 bg-stone-950 hover:bg-stone-900 p-8 cursor-pointer rounded transition-all duration-300 flex flex-col justify-between"
            onClick={() => onNavigateTo('investments')}
          >
            <div>
              <div className="text-xs text-stone-500 uppercase tracking-widest font-mono mb-3">Investments</div>
              <h3 className="text-xl font-serif font-medium text-white mb-4">Real research</h3>
              <p className="text-sm leading-relaxed text-stone-400 font-sans font-light">
                Browse our latest stock pitches across technology, healthcare, consumer, and financial sectors.
              </p>
            </div>
          </div>
          
          <div 
            className="border border-stone-900 bg-stone-950 hover:bg-stone-900 p-8 cursor-pointer rounded transition-all duration-300 flex flex-col justify-between"
            onClick={() => onNavigateTo('members')}
          >
            <div>
              <div className="text-xs text-stone-500 uppercase tracking-widest font-mono mb-3">Members</div>
              <h3 className="text-xl font-serif font-medium text-white mb-4">Meet the team</h3>
              <p className="text-sm leading-relaxed text-stone-400 font-sans font-light">
                Connect with our talented analysts and leadership team. Meet the officers driving our research forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
