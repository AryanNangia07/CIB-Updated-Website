import { staticPitches } from '../data/defaultData';

export default function InvestmentsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12" id="investments-section">
      <h1 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Our Investment Pitches</h1>
      <p className="text-stone-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-16 font-sans font-light">
        Our members conduct institutional-quality equity research across all major sectors. Each pitch undergoes rigorous peer review and presents a clear investment thesis with detailed financial analysis, valuation, and risk assessment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staticPitches.map((pitch, index) => (
          <div 
            key={index} 
            className="border border-stone-900 bg-stone-950 p-8 rounded-lg flex flex-col justify-between hover:border-stone-800 transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-serif text-white mb-1">{pitch.company}</h3>
                  <div className="text-sm font-mono text-stone-500">{pitch.ticker}</div>
                </div>
                <div className={`px-3 py-1 text-xs font-mono tracking-wider uppercase rounded ${
                  pitch.position === 'Long' 
                    ? 'bg-white text-black' 
                    : 'bg-stone-900 text-stone-300 border border-stone-800'
                }`}>
                  {pitch.position}
                </div>
              </div>
              
              <div className="text-stone-500 text-xs font-mono uppercase tracking-wider mb-2">{pitch.sector}</div>
              <div className="text-stone-500 text-xs mb-6 font-sans">
                {pitch.date} &bull; Analyst: {pitch.analyst}
              </div>
              
              <p className="text-stone-350 text-sm leading-relaxed mb-8 font-sans font-light">
                {pitch.thesis}
              </p>
            </div>
            
            <a 
              href={pitch.pdf_url || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white hover:bg-stone-900 border border-stone-800 hover:border-stone-700 py-3 text-xs font-serif tracking-wider uppercase cursor-pointer rounded transition-all w-full text-center block"
            >
              View Full Pitch
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
