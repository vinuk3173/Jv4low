import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';

export function Timeline() {
  const steps = [
    { num: "01", title: "Free Job Site Audit", timing: "Day 1", body: "30-min call. We analyse your workflow, software (ServiceM8/Tradify), and biggest time drains." },
    { num: "02", title: "Tradie AI Blueprint", timing: "Day 2", body: "We map which automations generate the highest ROI for your crew size and trade type." },
    { num: "03", title: "Build & Integrate", timing: "Days 3–4", body: "We build and integrate with your existing tools. No new software to install." },
    { num: "04", title: "Launch & Train", timing: "Day 5", body: "Go live. 30-min crew walkthrough. You start winning more jobs immediately." },
    { num: "05", title: "Ongoing Optimisation", timing: "Monthly", body: "Reporting, refinements, and new automations as your business grows." }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-20 leading-tight">
          Up and Running<br />in 5 Business Days.
        </h2>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-white/10">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-brand origin-left" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10"
              >
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-black mb-8 border-4 border-bg lg:mb-12">
                  {step.num}
                </div>
                <div className="text-brand font-bold text-xs uppercase tracking-widest mb-3">{step.timing}</div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string, label: string, key?: React.Key }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-card border border-border p-10 rounded-xl text-center">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-6xl font-black text-white mb-4 tracking-tighter"
      >
        {number}
      </motion.div>
      <div className="text-brand font-bold uppercase tracking-widest text-xs leading-tight">{label}</div>
    </div>
  );
}

export function Results() {
  const stats = [
    { number: "47+", label: "Melbourne Businesses Automated" },
    { number: "24/7", label: "AI Never Sleeps, Never Misses a Lead" },
    { number: "< 2hrs", label: "Average Response Time to New Leads" }
  ];

  return (
    <section id="results" className="py-24 px-6 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Built for Melbourne. From the job site in Frankston to the office in the CBD.
          </h2>
          <p className="text-xl text-white/50 leading-relaxed font-medium">
            JV 4low was built specifically for Australian tradespeople. We understand ServiceM8, Tradify, and the reality of running a tools-first business. Every automation is tested against real Melbourne tradie workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, i) => (
            <StatCard key={i} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrandMoment() {
  return (
    <section className="py-12 bg-bg overflow-hidden relative">
      <div className="wordmark-huge font-black tracking-tighter text-white opacity-10 pointer-events-none select-none whitespace-nowrap -translate-x-12">
        JV <span className="text-brand">4</span>LOW JV <span className="text-brand">4</span>LOW JV <span className="text-brand">4</span>LOW
      </div>
    </section>
  );
}

export function Integrations() {
  const logos = ["ServiceM8", "Tradify", "Xero", "Stripe", "Google", "Facebook"];
  
  return (
    <section className="py-24 px-6 bg-bg border-t border-border text-center">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-black text-white mb-4">Works With Your Existing Software.</h2>
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">No ripping anything out.</p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-20 py-4 grayscale opacity-40 hover:opacity-80 transition-opacity items-center">
          {logos.concat(logos).concat(logos).map((logo, i) => (
            <span key={i} className="text-4xl font-black tracking-tighter text-white uppercase italic">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
