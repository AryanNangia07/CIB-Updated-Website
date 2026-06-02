import { HelpCircle } from 'lucide-react';
import { Placement } from '../types';

interface CareersSectionProps {
  placements: Placement[];
}

export default function CareersSection({ placements }: CareersSectionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans" id="careers-section">
      
      {/* Intro Header */}
      <div className="border-b border-stone-900 pb-12 mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">
          Careers & Placements
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
          CIB serves as an incubator for premium corporate placements. Our alumni occupy pivotal roles across tier-1 investment banks, elite hedge funds, private equity firms, energy developers, and quant shops globally.
        </p>
      </div>

      {/* Placements Table Core Section */}
      <div className="space-y-6">
        
        {/* Register Table */}
        <div className="border border-stone-900 rounded-lg overflow-hidden bg-black shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-950 font-mono text-[10px] text-stone-400 border-b border-stone-900 uppercase tracking-widest">
                  <th className="py-4 px-6 font-medium">Year</th>
                  <th className="py-4 px-6 font-medium">Company / Firm</th>
                  <th className="py-4 px-6 font-medium">Sector Division</th>
                  <th className="py-4 px-6 font-medium">Role Placed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-900 font-sans text-stone-300">
                {placements.length > 0 ? (
                  placements.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className="hover:bg-stone-950 transition-colors duration-150"
                    >
                      <td className="py-4.5 px-6 font-mono text-stone-400 text-[11px]">{item.year}</td>
                      <td className="py-4.5 px-6 font-serif text-sm text-stone-100 font-medium">{item.company}</td>
                      <td className="py-4.5 px-6">
                        <span className="px-2.5 py-1 bg-stone-900 border border-stone-850 text-stone-300 text-[10px] uppercase font-mono rounded">
                          {item.sector}
                        </span>
                      </td>
                      <td className="py-4.5 px-6 text-stone-400 font-mono text-[11px]">{item.role}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-stone-500 font-sans text-xs">
                      No matching placement logs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
