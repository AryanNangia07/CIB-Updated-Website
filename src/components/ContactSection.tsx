import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all mandatory fields.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12" id="contact-section">
      
      {/* Header */}
      <div className="border-b border-stone-900 pb-12 mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Contact Us</h1>
        <p className="text-stone-400 text-base sm:text-lg leading-relaxed font-sans font-light">
          Have questions about our portfolio, speaker events, collaborations, or general undergraduate recruitment? Reach out directly using our contact form or official email links.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left column: Quick Cards */}
        <div className="md:col-span-5 space-y-6">
          <div className="border border-stone-900 bg-stone-950 p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-serif font-medium text-white">General Contacts</h3>
            
            <div className="space-y-4 text-xs font-sans text-stone-400 font-light">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block uppercase font-mono text-[9px] tracking-wider mb-0.5">Executive Email</span>
                  <a href="mailto:exec@cib.berkeley.edu" className="text-white hover:underline">exec@cib.berkeley.edu</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block uppercase font-mono text-[9px] tracking-wider mb-0.5">Campus Location</span>
                  <p className="text-white">University of California, Berkeley</p>
                  <p className="text-stone-500">Haas School of Business | Berkeley, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-stone-900 bg-stone-950 p-6 rounded-lg">
            <span className="text-[10px] uppercase font-mono text-stone-500 block mb-2 tracking-wider">Corporate Sponsors</span>
            <p className="text-xs text-stone-400 leading-relaxed font-sans font-light">
              For campus speaker sponsorships, strategic career programming, or data license donations, please contact our corporate relations officer directly at <a href="mailto:exec@cib.berkeley.edu" className="text-white underline">exec@cib.berkeley.edu</a>.
            </p>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="md:col-span-7 bg-stone-950 border border-stone-900 p-8 rounded-lg">
          <h3 className="text-xl font-serif font-normal text-white mb-6">Send an Inquiry</h3>

          {!submitted ? (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs text-stone-300">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-stone-550 uppercase tracking-widest text-stone-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="E.g. Jennifer Wu"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-stone-850 p-3 rounded focus:outline-none focus:border-stone-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-stone-550 uppercase tracking-widest text-stone-500">Your Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E.g. jennifer@berkeley.edu"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-stone-850 p-3 rounded focus:outline-none focus:border-stone-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-stone-550 uppercase tracking-widest text-stone-500">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-stone-850 p-3 rounded focus:outline-none focus:border-stone-500 cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Recruitment Questions">Recruitment Questions</option>
                  <option value="Speaker/Firm Sponsorship">Speaker/Firm Sponsorship</option>
                  <option value="Research & Pitches">Research & Pitches</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-stone-555 uppercase tracking-widest text-stone-500">Message Text</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-stone-850 p-3 rounded focus:outline-none focus:border-stone-500 transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-stone-200 text-black font-semibold font-mono text-xs rounded transition-colors disabled:opacity-50 cursor-pointer"
              >
                {submitting ? 'Streaming Message...' : 'Send Message'}
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-fade-in text-stone-405">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-semibold mx-auto">
                ✓
              </div>
              <p className="text-sm text-stone-300">Message sent successfully!</p>
              <p className="text-xs text-stone-400">
                Hi {formData.name}, we've received your query about <strong className="text-white">{formData.subject}</strong>. A board coordinator will follow up within 24-48 business hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-[10px] font-mono text-stone-500 hover:text-stone-300 underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
