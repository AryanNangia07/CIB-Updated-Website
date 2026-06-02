import { BookOpen, Award, FileText, Compass } from 'lucide-react';

export default function EducationSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12" id="education-section">
      <h1 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Education & Resources</h1>
      <p className="text-stone-400 text-lg leading-relaxed mb-16 font-sans font-light">
        Our educational curriculum is designed to transform motivated students into skilled investment analysts. Through structured learning paths in both fundamental and quantitative analysis, members develop the technical skills and analytical frameworks used at leading investment firms.
      </p>

      {/* Forewords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        
        {/* Fundamental VP */}
        <div className="bg-stone-950 border border-stone-900 p-8 rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-stone-850 rounded-full flex items-center justify-center text-white font-serif text-xl border border-stone-800">
                SB
              </div>
              <div>
                <h3 className="text-lg font-serif font-medium text-white">Sophia Bennett</h3>
                <div className="text-xs text-stone-500 uppercase tracking-widest font-mono">VP of Education - Fundamental Analysis</div>
              </div>
            </div>
            
            <p className="text-sm text-stone-300 leading-relaxed mb-4 font-sans font-light">
              Fundamental analysis is the cornerstone of sound investment decision-making. At Capital Investments, we teach our members to look beyond stock prices and understand the underlying businesses driving value creation.
            </p>
            <p className="text-sm text-stone-300 leading-relaxed mb-4 font-sans font-light">
              Our curriculum covers financial statement analysis, valuation methodologies including DCF and comparable company analysis, industry research frameworks, and competitive positioning assessment. Members learn to build detailed financial models and develop investment theses that withstand rigorous questioning.
            </p>
          </div>
          <p className="text-xs text-stone-500 font-mono italic mt-4">
            "Through case studies of real investments and guest speakers from top firms, we bridge academic theory with practical application."
          </p>
        </div>

        {/* Quantitative VP */}
        <div className="bg-stone-950 border border-stone-900 p-8 rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-stone-850 rounded-full flex items-center justify-center text-white font-serif text-xl border border-stone-800">
                EZ
              </div>
              <div>
                <h3 className="text-lg font-serif font-medium text-white">Ethan Zhang</h3>
                <div className="text-xs text-stone-500 uppercase tracking-widest font-mono">VP of Education - Quantitative Analysis</div>
              </div>
            </div>
            
            <p className="text-sm text-stone-300 leading-relaxed mb-4 font-sans font-light">
              Quantitative analysis empowers investors to identify patterns, test hypotheses, and make data-driven decisions at scale. In our quantitative track, members learn to leverage statistical methods and computational tools to gain investment edges.
            </p>
            <p className="text-sm text-stone-300 leading-relaxed mb-4 font-sans font-light">
              We cover factor investing, backtesting frameworks, portfolio optimization, risk modeling, and machine learning applications in finance. Members gain hands-on experience with Python, R, and industry-standard data platforms to build and validate investment strategies.
            </p>
          </div>
          <p className="text-xs text-stone-500 font-mono italic mt-4">
            "The intersection of finance and technology is where the most exciting opportunities exist."
          </p>
        </div>

      </div>

      {/* Resources Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif font-light text-white mb-8">Educational Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-stone-900 bg-stone-950 p-6 rounded-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-900 rounded border border-stone-850 text-white shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif text-white mb-2">Weekly Workshops</h4>
                <p className="text-xs text-stone-400 leading-relaxed font-sans font-light">
                  Technical sessions on valuation, modeling, and investment frameworks led by senior members and industry professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-stone-900 bg-stone-950 p-6 rounded-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-900 rounded border border-stone-850 text-white shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif text-white mb-2">Pitch Competitions</h4>
                <p className="text-xs text-stone-400 leading-relaxed font-sans font-light">
                  Quarterly stock pitch tournaments where members present investment ideas to panels of alumni judges.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-stone-900 bg-stone-950 p-6 rounded-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-900 rounded border border-stone-850 text-white shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif text-white mb-2">Industry Speaker Series</h4>
                <p className="text-xs text-stone-400 leading-relaxed font-sans font-light">
                  Regular talks from portfolio managers, research analysts, and investment professionals on market trends and career insights.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-stone-900 bg-stone-950 p-6 rounded-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-900 rounded border border-stone-850 text-white shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif text-white mb-2">Research Library</h4>
                <p className="text-xs text-stone-400 leading-relaxed font-sans font-light">
                  Curated collection of equity research reports, investment letters, and academic papers on market anomalies and strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
