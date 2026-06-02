import { BookOpen, Award, FileText, Compass } from 'lucide-react';
import { educationVPs } from '../data/defaultData';

export default function EducationSection() {
  const { fundamental, quantitative } = educationVPs;

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
              <div className="w-16 h-16 bg-stone-850 rounded-full flex items-center justify-center text-white font-serif text-xl border border-stone-800 relative overflow-hidden shrink-0">
                <span className="text-white font-serif text-xl select-none">
                  {fundamental.initials}
                </span>
                {fundamental.photo_url && (
                  <img
                    src={fundamental.photo_url}
                    alt={fundamental.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              <div>
                <h3 className="text-lg font-serif font-medium text-white">{fundamental.name}</h3>
                <div className="text-xs text-stone-500 uppercase tracking-widest font-mono">{fundamental.role}</div>
              </div>
            </div>
            
            {fundamental.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-sm text-stone-300 leading-relaxed mb-4 font-sans font-light">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="text-xs text-stone-500 font-mono italic mt-4">
            {fundamental.quote}
          </p>
        </div>

        {/* Quantitative VP */}
        <div className="bg-stone-950 border border-stone-900 p-8 rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-stone-850 rounded-full flex items-center justify-center text-white font-serif text-xl border border-stone-800 relative overflow-hidden shrink-0">
                <span className="text-white font-serif text-xl select-none">
                  {quantitative.initials}
                </span>
                {quantitative.photo_url && (
                  <img
                    src={quantitative.photo_url}
                    alt={quantitative.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              <div>
                <h3 className="text-lg font-serif font-medium text-white">{quantitative.name}</h3>
                <div className="text-xs text-stone-500 uppercase tracking-widest font-mono">{quantitative.role}</div>
              </div>
            </div>
            
            {quantitative.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-sm text-stone-300 leading-relaxed mb-4 font-sans font-light">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="text-xs text-stone-500 font-mono italic mt-4">
            {quantitative.quote}
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
