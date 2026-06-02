import { CalendarDays } from 'lucide-react';
import { Member } from '../types';

interface MembersSectionProps {
  members: Member[];
}

export default function MembersSection({ members }: MembersSectionProps) {
  const handleBookCoffeeChat = (member: Member) => {
    const targetUrl = member.coffee_chat_url || `https://calendly.com/cib-berkeley`;
    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch {
      alert(`In an interactive browser, this will load the direct coffee chat calendar with ${member.name}.`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12" id="members-section">
      
      {/* Page Header */}
      <div className="border-b border-stone-900 pb-12 mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">
          Meet the Team
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
          CIB analysts are selected from diverse academic profiles at Berkeley, spanning Economics, EECS, Business Administration, Statistics, and Applied Math. Meet our officers, educators, and senior research analysts.
        </p>
      </div>

      {/* Roster Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {members.length > 0 ? (
          members.map((member, idx) => (
            <div 
              key={idx}
              className="bg-stone-950 border border-stone-900 rounded-lg overflow-hidden flex flex-col justify-between hover:border-stone-880 transition-all duration-300"
            >
              {/* Cover Photo with fallback Initials layers */}
              <div className="aspect-square bg-gradient-to-br from-stone-900 to-stone-950 flex flex-col items-center justify-center border-b border-stone-900 relative overflow-hidden group">
                {/* Fallback Initials layer underneath */}
                <span className="text-stone-800 text-5xl font-serif select-none">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>

                {member.photo_url && (
                  <img
                    src={member.photo_url}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                
                <span className="absolute bottom-3 left-3 px-2 py-0.5 text-[9px] font-mono tracking-widest bg-black/80 backdrop-blur-sm border border-stone-800 text-stone-400 rounded uppercase z-10">
                  Class' {member.year}
                </span>
              </div>

              {/* Information Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[10px] uppercase font-mono text-stone-500 tracking-wider">
                    {member.position}
                  </div>
                  <h3 className="font-serif text-white font-medium text-lg leading-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-stone-400">
                    Major: {member.major}
                  </div>
                  <p className="text-xs text-stone-400 font-sans font-light leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-900 flex items-center justify-end text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => handleBookCoffeeChat(member)}
                    className="flex items-center gap-1.5 text-xs text-stone-300 hover:text-white transition-colors py-1.5 px-3 bg-stone-900 rounded border border-stone-800 cursor-pointer w-full justify-center"
                  >
                    <CalendarDays className="w-3.5 h-3.5 text-stone-400" />
                    <span>Coffee Chat</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-24 border border-stone-900 rounded bg-stone-950 text-stone-500 font-sans text-xs">
            No active members found.
          </div>
        )}
      </div>

    </div>
  );
}
