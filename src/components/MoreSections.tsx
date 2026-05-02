import { motion } from 'motion/react';
import { Phone, Calendar, Repeat, MessageSquare, Receipt, Star, CheckCircle2 } from 'lucide-react';

export function PainPoints() {
  const points = [
    { icon: Phone, title: "Missed Calls & Lost Jobs", body: "While you're on the tools, customers are calling. If you don't answer, they call the next guy on Google." },
    { icon: Calendar, title: "Quote Follow-Up Gaps", body: "Sending quotes is easy. Remembering to chase them 3 days later is where most tradies lose money." },
    { icon: Repeat, title: "No Repeat Business System", body: "Existing customers are your best leads, but they're sitting in your database forgotten." },
    { icon: MessageSquare, title: "Basic Admin Questions", body: "When can you come? How much is a call-out? Answering the same 10 things every day wastes your time." },
    { icon: Receipt, title: "Slow Invoice Payments", body: "Chasing money is the worst part of the job. It's awkward, slow, and hurts your cash flow." },
    { icon: Star, title: "Weak Online Reputation", body: "You do great work, but the reviews don't reflect it. Without stars, you're invisible on the map." }
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Melbourne Tradie Businesses Lose 14 Hours Every Week.
          </h2>
          <p className="text-xl text-white/50 leading-relaxed">
            AI can handle your admin in seconds. Here's what JV 4low eliminates.
          </p>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              whileHover={{ borderColor: 'rgba(255,255,255,0.2)' }}
              className="bg-card border border-border p-8 rounded-xl transition-colors"
            >
              <point.icon className="w-8 h-8 text-white/20 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{point.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    { num: "01", title: "Missed Call Text-Back", body: "Stop losing $500 per missed call. AI texts them back instantly while you're on the ladder — before they call your competitor.", stat: "Texts sent in < 15 sec" },
    { num: "02", title: "Quote Follow-Up", body: "The fortune is in the follow-up. Automated nudges at day 1, day 3, and day 7 so quotes don't go cold and jobs don't disappear.", stat: "+31% Quote Conversion" },
    { num: "03", title: "Review Generation", body: "Own the local map. Automated SMS requests for Google reviews after every completed job. More stars, more calls.", stat: "Top 3 Local Pack" },
    { num: "04", title: "Lead Response Bot", body: "24/7 qualification on Facebook, Instagram, and your website. Books them directly into your calendar while you sleep.", stat: "24/7 Response" },
    { num: "05", title: "Job Scheduling", body: "Zero-effort sync with ServiceM8 or Tradify. Confirmations sent, reminders fired, no-shows eliminated.", stat: "Syncs with ServiceM8" },
    { num: "06", title: "Reactivation Campaigns", body: "Mine your old customer database for warm leads. Pure profit repeat business from people who already trust you.", stat: "+$4k/mo from old leads" },
    { num: "07", title: "Invoice Chasing", body: "Stop being the bad guy. Automated, polite SMS reminders for unpaid invoices — professionally persistent so you get paid faster.", stat: "Paid 40% Faster", featured: true }
  ];

  return (
    <section className="py-24 px-6 bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">The 7 Automations That Pay for Themselves</h2>
          <p className="text-xl text-white/50">Every system below is designed to recover more than its cost in the first 30 days.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-xl border flex flex-col justify-between min-h-[300px] ${
                service.featured ? 'bg-card border-brand shadow-[0_0_40px_rgba(255,107,43,0.1)]' : 'bg-card border-border'
              }`}
            >
              <div>
                <span className="text-brand font-black text-xl mb-6 block">{service.num}</span>
                <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed mb-8 text-sm">{service.body}</p>
              </div>
              <div className="text-brand font-bold uppercase tracking-wider text-xs">
                ✦ {service.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReportingEngine() {
  const [reportText, setReportText] = useState("");
  const fullText = "April was your busiest quote month since October. Jobs completed: 42. Average job value up 15% to $1,850. Missed call text-back saved 12 potential leads (~$6,000 in pipe). ServiceM8 data shows Thursday is your highest cancellation day. Recommend automated deposits for all Thursday jobs.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setReportText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reporting-engine" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            The Dashboard for Tradies.
          </h2>
          <p className="text-xl text-white/50 mb-12 leading-relaxed">
            Stop guessing your numbers. Our AI Reporting Engine reads your ServiceM8 or Tradify data, understands what actually makes you money, and writes a plain-English business summary on demand.
          </p>
          
          <div className="space-y-10">
            {[
              { num: "01", title: "Connects to your job software", detail: "Hooks directly into ServiceM8, Tradify, Xero or Simpro. No manual data entry required." },
              { num: "02", title: "AI analyzes your performance", detail: "Detects which jobs are most profitable, flags slow-paying clients, and benchmarks your conversion rate." },
              { num: "03", title: "You receive a clear plan", detail: "Plain-English summary + charts + AI recommendations. Delivered via WhatsApp or Email every Monday morning." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-brand font-black text-lg">{step.num}</span>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-bold transition-all active:scale-95 flex items-center gap-2">
            See a Sample Report <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-[#0c0c0c] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/20">TRADIE REPORT v1.0</span>
          </div>
          
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {['Revenue', 'New Jobs', 'Quote Conversion', 'Average Lead', 'Reviews', 'Unpaid'].map((metric, i) => (
                <div key={metric} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className={`w-4 h-4 rounded border ${i < 3 ? 'bg-brand border-brand' : 'border-white/20'}`} />
                  <span className="text-xs font-medium text-white/60">{metric}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xs font-black uppercase tracking-wider text-brand">Business Summary</h5>
                <span className="text-[10px] text-white/30">AI Analysis Complete</span>
              </div>
              <p className="text-sm font-mono text-white/70 leading-relaxed min-h-[140px]">
                {reportText}<span className="animate-pulse">|</span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "$77,700", change: "↑15%" },
                { val: "42 Jobs", change: "↑21%" },
                { val: "31%", change: "↑5.4%" }
              ].map((kpi, i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-sm font-black text-white">{kpi.val}</div>
                  <div className="text-[10px] font-bold text-brand">{kpi.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
