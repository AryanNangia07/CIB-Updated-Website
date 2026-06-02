/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Menu, X, Landmark, Compass } from 'lucide-react';
import { Member, Placement } from './types';
import { fallbackMembers, fallbackPlacements } from './data/defaultData';
import HomeSection from './components/HomeSection';
import EducationSection from './components/EducationSection';
import InvestmentsSection from './components/InvestmentsSection';
import CareersSection from './components/CareersSection';
import MembersSection from './components/MembersSection';
import ContactSection from './components/ContactSection';
import JoinUsSection from './components/JoinUsSection';

// Robust client-side helper to parse raw CSV content if served by static files
function parseCSVClient(csvText: string): any[] {
  const lines = csvText.split(/\r?\n/);
  if (lines.length === 0 || !lines[0]) return [];
  const headers = lines[0].split(',').map(h => h.trim());
  
  const results: any[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values: string[] = [];
    let insideQuote = false;
    let currentValue = '';
    
    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"') {
        insideQuote = !insideQuote;
      } else if (char === ',' && !insideQuote) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim());
    
    const entity: any = {};
    headers.forEach((header, index) => {
      let val = values[index] || '';
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1);
      }
      entity[header] = val;
    });
    results.push(entity);
  }
  return results;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [members, setMembers] = useState<Member[]>(fallbackMembers);
  const [placements, setPlacements] = useState<Placement[]>(fallbackPlacements);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync data dynamically from backend csv serving
  const loadData = async () => {
    // 1. Members
    try {
      const resp = await fetch('/api/members');
      if (resp.ok) {
        const res = await resp.json();
        if (res.data && res.data.length > 0) {
          setMembers(res.data);
        }
      }
    } catch {
      // Look for localStorage override if server lookup failed
      const localCsv = localStorage.getItem('override_members_csv');
      if (localCsv) {
        const parsed = parseCSVClient(localCsv);
        if (parsed.length > 0) setMembers(parsed as Member[]);
      }
    }

    // 2. Placements
    try {
      const resp = await fetch('/api/placements');
      if (resp.ok) {
        const res = await resp.json();
        if (res.data && res.data.length > 0) {
          // ensure number conversions for year
          const parsedPlacements = res.data.map((p: any) => ({
            ...p,
            year: Number(p.year) || 2026
          }));
          setPlacements(parsedPlacements);
        }
      }
    } catch {
      // Look for localStorage override
      const localCsv = localStorage.getItem('override_placements_csv');
      if (localCsv) {
        const parsed = parseCSVClient(localCsv);
        if (parsed.length > 0) setPlacements(parsed as Placement[]);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'investments', label: 'Investments' },
    { id: 'careers', label: 'Careers' },
    { id: 'members', label: 'Members' },
    { id: 'contact', label: 'Contact' },
    { id: 'join', label: 'Join Us' }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans tracking-tight">
      
      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-md border-b border-stone-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="flex items-center cursor-pointer group"
          >
            <div className="flex flex-row items-center gap-3.5 select-none font-serif transition-transform group-hover:scale-[1.01]">
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-white leading-none">
                CIB
              </span>
              <div className="flex flex-col justify-center text-left">
                {/* Top line spanning the exact width of text block */}
                <div className="w-full h-[1.5px] bg-white" />
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.14em] text-white leading-none pt-1.5 pb-1 block whitespace-nowrap">
                  CAPITAL INVESTMENTS
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.14em] text-white leading-none pb-1.5 block whitespace-nowrap">
                  AT BERKELEY
                </span>
                {/* Bottom line spanning the exact width of text block */}
                <div className="w-full h-[1.5px] bg-white" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {pages.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`text-xs font-mono uppercase tracking-widest transition-colors py-2 relative cursor-pointer ${
                  activeTab === item.id 
                    ? 'text-white font-semibold' 
                    : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-stone-900 border border-stone-800 hover:bg-stone-850 transition-colors lg:hidden text-stone-300 hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-950 border-b border-stone-900 duration-150 transition-all">
            <div className="px-6 py-4 flex flex-col gap-3">
              {pages.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-xs uppercase font-mono tracking-widest py-2 border-b border-stone-900/40 last:border-0 cursor-pointer ${
                    activeTab === item.id ? 'text-white font-semibold' : 'text-stone-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10">
        
        <div className="min-h-[60vh]">
          {activeTab === 'home' && <HomeSection onNavigateTo={(tab) => setActiveTab(tab)} />}
          {activeTab === 'education' && <EducationSection />}
          {activeTab === 'investments' && <InvestmentsSection />}
          {activeTab === 'careers' && <CareersSection placements={placements} />}
          {activeTab === 'members' && <MembersSection members={members} />}
          {activeTab === 'contact' && <ContactSection />}
          {activeTab === 'join' && <JoinUsSection />}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-stone-900 py-16 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-stone-400">
            
            <div className="space-y-4 md:col-span-2">
              <div className="flex flex-row items-center gap-3 select-none font-serif">
                <span className="text-2xl font-bold tracking-tighter text-white leading-none">
                  CIB
                </span>
                <div className="flex flex-col justify-center text-left">
                  <div className="w-full h-[1px] bg-white" />
                  <span className="text-[7.5px] font-medium tracking-[0.14em] text-white leading-none pt-1 pb-0.5 block whitespace-nowrap">
                    CAPITAL INVESTMENTS
                  </span>
                  <span className="text-[7.5px] font-medium tracking-[0.14em] text-white leading-none pb-1 block whitespace-nowrap">
                    AT BERKELEY
                  </span>
                  <div className="w-full h-[1px] bg-white" />
                </div>
              </div>
              <p className="text-[11px] leading-relaxed text-stone-500 font-sans font-light max-w-sm">
                UC Berkeley’s premier multi-strategy student investment fund. Dedicated to building analytical leaders in quantitative trading, proprietary research, value investing, and corporate treasury.
              </p>
              <div className="text-[10px] font-mono text-stone-605">
                © 2026 Capital Investments at Berkeley. All rights reserved.
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-serif text-xs uppercase tracking-wider text-white font-semibold">Club Contacts</h5>
              <ul className="space-y-2 text-[11px] font-mono">
                <li>
                  <a href="mailto:exec@cib.berkeley.edu" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> exec@cib.berkeley.edu
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/cib-berkeley" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" /> company/cib-berkeley
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-serif text-xs uppercase tracking-wider text-white font-semibold">Institutional Status</h5>
              <p className="text-[10px] text-stone-500 leading-relaxed font-sans font-light">
                CIB is an independent student-run organization (RSO) at the University of California, Berkeley. We are not a broker-dealer or financial advisor. Update profiles are executed directly on the backend via verified CSV sheets.
              </p>
            </div>

          </div>



        </div>
      </footer>

    </div>
  );
}
