import { motion } from 'motion/react';
import { Plus, X, ChevronDown, Check } from 'lucide-react';
import React, { useState } from 'react';
import { Logo } from './Logo';

export function Pricing() {
  const plans = [
    {
      name: "STARTER",
      price: "$1,997",
      ideal: "Perfect for sole traders and 1-2 person operations",
      features: ["Missed Call Text-Back", "Quote Follow-Up", "Review Generation", "Monthly Performance Report", "Onboarding Call Included"],
      cta: "Start Winning Jobs →"
    },
    {
      name: "SCALE",
      price: "$2,997",
      ideal: "For tradie businesses with 3+ crew ready to systemise",
      featured: true,
      features: ["Everything in Starter", "Lead Response Bot", "Job Scheduling", "Reactivation Campaigns", "Invoice Chasing", "Priority Support", "Quarterly Strategy Call"],
      cta: "Scale My Business →"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Transparent Pricing.</h2>
          <p className="text-xl text-white/50 tracking-widest uppercase text-sm font-bold">Recovery of cost guaranteed in 30 days.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`p-10 rounded-xl border transition-all ${
                plan.featured 
                  ? 'bg-card border-brand border-t-[8px] shadow-2xl relative' 
                  : 'bg-card border-border hover:border-white/20'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand text-white text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8 h-10">{plan.ideal}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-white/40 font-bold">/mo</span>
              </div>

              <div className="space-y-4 mb-10 min-h-[280px]">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex gap-3 items-start text-sm text-white/60">
                    <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-bold transition-all active:scale-95 border-2 ${
                plan.featured 
                  ? 'bg-brand text-white border-brand' 
                  : 'bg-transparent text-brand border-brand hover:bg-brand hover:text-white'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            No lock-in contracts · Cancel anytime · Setup completed within 5 business days
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-border py-6 first:pt-0 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand' : 'text-white'}`}>{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45 text-brand' : 'text-white/20'}`}>
          <Plus className="w-6 h-6" />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-white/50 leading-relaxed max-w-2xl">{answer}</p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Do I need to change ServiceM8 or Tradify?", a: "No. JV 4low works by hooking into your existing job software. We don't rip anything out; we just add the AI layer so you don't have to manage the admin." },
    { q: "How does the missed call text-back work?", a: "When you're on a job and can't answer, our system detects the missed call and instantly sends a professional SMS: 'Hi, this is [Your Name] from [Business]. I'm on a site right now — how can I help?' This stops them calling the next business." },
    { q: "Will the AI sound robotic?", a: "No. We train the AI specifically on your trade and your local area. It knows your call-out fees, your service area (e.g. 'Yes, we cover Frankston'), and it talks like a professional Australian receptionist." },
    { q: "What if the AI can't answer a technical question?", a: "If a query gets too technical or requires a custom quote you haven't templated, the AI instantly notifies you via WhatsApp so you can jump in when you've finished your current task." },
    { q: "How long is the setup?", a: "We have you live and winning jobs in 5 business days. No long-term contracts, just results." }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Built for the Site.</h2>
          <p className="text-white/40 tracking-widest uppercase font-bold text-xs underline decoration-brand underline-offset-8">Answers for Melbourne's best crews.</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      tradeType: formData.get('tradeType'),
      phone: formData.get('phone'),
    };

    try {
      await fetch('http://192.168.1.50:5678/webhook/tradie-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact-section" className="py-32 px-6 bg-bg border-t border-border text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.9]">
          Get Your Free<br />Automation Audit
        </h2>
        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
          No fluff, no hard sell — just a clear plan to stop missing leads and start winning more jobs.
        </p>
        
        <div className="max-w-md mx-auto bg-card border border-border p-8 rounded-2xl mb-12 text-left relative overflow-hidden">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <Check className="w-16 h-16 text-brand mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Audit Requested!</h3>
              <p className="text-white/50 font-medium italic">We'll call you within 2 hours ✓</p>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-brand mb-2">Full Name</label>
                <input 
                  required
                  name="fullName"
                  type="text" 
                  placeholder="John Smith"
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-white focus:border-brand outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-brand mb-2">Trade Type</label>
                <select name="tradeType" className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-white focus:border-brand outline-none transition-colors appearance-none">
                  <option>Plumber</option>
                  <option>Electrician</option>
                  <option>Builder</option>
                  <option>Carpenter</option>
                  <option>Painter</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-brand mb-2">Phone Number</label>
                <input 
                  required
                  name="phone"
                  type="tel" 
                  placeholder="0400 000 000"
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-white focus:border-brand outline-none transition-colors"
                />
              </div>
              <button 
                disabled={loading}
                className="w-full bg-brand hover:bg-brand-hover disabled:opacity-50 text-white py-4 rounded-lg font-black uppercase tracking-widest transition-all active:scale-[0.98] shadow-lg shadow-brand/20"
              >
                {loading ? "Sending..." : "Claim My Free Audit →"}
              </button>
            </form>
          )}
        </div>

        <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">
          Setup live in 5 days · No lock-in · Australian Owned
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-24 px-6 bg-bg border-t border-border mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6">
            <Logo />
          </div>
          <p className="text-sm text-white/40 leading-relaxed mb-8">
            The AI Automation Agency for Melbourne Tradies. Answer every call, win every job.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Solutions</h4>
          <ul className="space-y-4 text-sm text-white/40 font-medium">
            <li className="hover:text-brand cursor-pointer transition-colors">Missed Call Text-Back</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Quote Follow-Up</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Lead Response Bot</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Job Reporting</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Company</h4>
          <ul className="space-y-4 text-sm text-white/40 font-medium">
            <li className="hover:text-brand cursor-pointer transition-colors">About JV 4low</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Tradie Case Studies</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">Contact</h4>
          <ul className="space-y-4 text-sm text-white/40 font-medium">
            <li className="hover:text-brand cursor-pointer transition-colors">hello@jv4low.com.au</li>
            <li className="hover:text-brand cursor-pointer transition-colors">Melbourne, Australia</li>
            <li className="hover:text-brand cursor-pointer transition-colors font-bold text-brand italic">Powered by JV 4low</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">
          Copyright © 2025 JV 4low · Licensed AI Agency · Melbourne
        </div>
        <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">
          ABN: 12 345 678 910
        </div>
      </div>
    </footer>
  );
}
