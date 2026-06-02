import { useState } from 'react';
import { Calendar, ExternalLink, ChevronLeft, ChevronRight, HelpCircle, Users } from 'lucide-react';

export default function JoinUsSection() {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const recruitmentTimeline = [
    { date: "Sept 1 - Sept 8", title: "Active Applications Open", desc: "Submit your basic candidate stats, resume, and track preferences via our online application channel." },
    { date: "Sept 9", title: "CIB General Info Session", desc: "6:00 PM in Haas School of Business. Learn about our investment divisions, meet the active portfolio teams, and understand our culture." },
    { date: "Sept 10", title: "Educational Skills Labs", desc: "An interactive, open workshop covering financial valuation modeling and mathematical script testing bases." },
    { date: "Sept 12", title: "First Round Case Auditions", desc: "In-person 45-minute logic assessments evaluating qualitative market views and intuitive problem-solving." },
    { date: "Sept 15 - 17", title: "Invited Board defenses", desc: "Select final round candidates defend a structured 10-slide investment theme or strategy backtest before the board." },
    { date: "Sept 19", title: "Welcome Dinner & Staged Onboarding", desc: "Formal cohort invitations extended with immediate alignment to your portfolio mentors." }
  ];

  const faqs = [
    {
      q: "Who can apply to Capital Investments at Berkeley?",
      a: "We welcome undergraduate students of any major or year (Freshmen to Seniors). Many of our high performers come from Computer Science, Economics, Business, Statistics, Mathematics, and Engineering."
    },
    {
      q: "Do I need prior corporate finance or scripting experience?",
      a: "Explicitly, no. Our 8-week boot camp curriculum is built from the ground up to train new members. We value intellectual vigor, strong curiosity, and collaborative integrity over prior resume lines."
    },
    {
      q: "What is the anticipated weekly commitment for active analysts?",
      a: "Expect 8 to 10 hours per week. This incorporates our Tuesday general meetings, specialized education labs, and active sector research collaborations."
    },
    {
      q: "How do the Fundamental and Quantitative tracks differ?",
      a: "Fundamental track members master corporate qualitative moats, cash-flow financial models (DCF, LBO, comparable analysis), and macro risks. Quantitative members create systematic mathematical architectures, backtest statistical anomalies, and script algorithms in Python/R."
    }
  ];

  const carouselImages = [
    { 
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop', 
      title: 'CIB Annual Welcome Dinner Banquet',
      desc: 'Forming lifelong bonds with brilliant peers over fine food.'
    },
    { 
      url: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop', 
      title: 'Active Retreat Hiking at Grizzly Peak',
      desc: 'Enjoying California scenic ridges and campus sunsets together.'
    },
    { 
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop', 
      title: 'Technical Study & Collaborative Hack Sessions',
      desc: 'Tackling complex financial structures and statistical models in teams.'
    },
    { 
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop', 
      title: 'CIB Social Mixers & Game Nights',
      desc: 'Unwinding after intensive defense runs with dynamic community systems.'
    },
  ];

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12" id="join-us-section">
      
      {/* Page Header */}
      <div className="border-b border-stone-900 pb-12 mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">
          Join Capital Investments at Berkeley
        </h1>
        <p className="text-stone-400 text-base sm:text-lg max-w-2xl leading-relaxed font-sans font-light">
          We operate recruitment at the start of each Fall and Spring semester. We look for analytical capability, relentless motivation, and intellectual integrity.
        </p>
      </div>

      {/* Styled Call-to-Action to Apply */}
      <div className="bg-stone-950 border border-stone-900 p-8 sm:p-12 rounded-xl text-center space-y-6 mb-20 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-stone-900/20 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-xl mx-auto space-y-4">
          <span className="inline-block text-[10px] uppercase font-mono tracking-widest text-stone-500 bg-stone-900 border border-stone-850 px-3 py-1 rounded mb-4">
            Fall 2026 Admissions Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light">Begin Your Candidacy</h2>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
            We manage our initial applicant vetting directly through our consolidated Google Form. Follow the link below to upload your resume, select your desired tracks, and answer our introductory prompts.
          </p>
        </div>
        <div>
          <a
            href="https://google.com/search?q=berkeley" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-stone-200 text-black font-semibold font-mono text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shadow-lg"
          >
            Apply Now
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="text-[10px] text-stone-600 font-mono">
          Submission deadline is Sunday, Sept 8 at 11:59 PM PST. late entries will not be processed.
        </p>
      </div>

      {/* Actual Timeline Section */}
      <div className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-serif font-light text-white mb-12 border-b border-stone-900 pb-4">
          Recruitment Timeline
        </h2>
        
        {/* Beautiful continuous vertical stepper line timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-stone-900 space-y-12 ml-4">
          {recruitmentTimeline.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* Stepper Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-black border-2 border-stone-700 group-hover:border-white transition-colors rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-stone-500 group-hover:bg-white rounded-full" />
              </div>

              {/* Time Item Content */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 bg-stone-950 border border-stone-900 px-2.5 py-1 rounded">
                  {step.date}
                </span>
                <h4 className="text-lg font-serif font-medium text-white leading-tight pt-1">
                  {step.title}
                </h4>
                <p className="text-stone-400 text-xs sm:text-sm max-w-2xl leading-relaxed font-sans font-light">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-serif font-light text-white mb-8 border-b border-stone-900 pb-4">
          Admissions FAQs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-stone-950 border border-stone-900 p-6 rounded-lg space-y-3">
              <div className="flex items-start gap-2 text-stone-300">
                <HelpCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <h4 className="text-sm font-semibold font-serif text-white">{faq.q}</h4>
              </div>
              <p className="text-stone-400 text-xs font-sans font-light leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Photo Carousel: We are a fun community! */}
      <div>
        <div className="flex justify-between items-end mb-8 border-b border-stone-900 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-white">Life at CIB</h2>
            <p className="text-stone-500 text-xs font-mono uppercase tracking-wider mt-1">Our people & culture</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevImage}
              className="p-2 border border-stone-900 bg-stone-950 hover:border-stone-800 text-stone-400 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="p-2 border border-stone-900 bg-stone-950 hover:border-stone-800 text-stone-400 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-stone-900 bg-black shadow-2xl group/slide">
          {/* Active Slide Image */}
          <img
            src={carouselImages[activeImageIdx].url}
            alt={carouselImages[activeImageIdx].title}
            className="w-full h-full object-cover opacity-80 group-hover/slide:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Bottom Info Gradient Mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-xs">
            <div className="space-y-1.5 max-w-lg">
              <span className="text-[9px] font-mono text-stone-400 bg-stone-950 border border-stone-900 px-2 py-0.5 rounded tracking-wide uppercase">
                Event {activeImageIdx + 1} of {carouselImages.length}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white font-medium">
                {carouselImages[activeImageIdx].title}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light">
                {carouselImages[activeImageIdx].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Indicator Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-6">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImageIdx(i)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                activeImageIdx === i ? 'bg-white w-6' : 'bg-stone-800 hover:bg-stone-600'
              }`}
              aria-label={`Go to slide ${i+1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
