import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { IridescentFluid } from './IridescentFluid';
import { Logo } from './Logo';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#contact-section" className="transition-transform hover:scale-105 active:scale-95">
          <Logo />
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/60 uppercase tracking-[0.05em]">
          {['Solutions', 'How It Works', 'Pricing'].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        <a href="#contact-section" className="bg-brand hover:bg-brand-hover text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all active:scale-95 text-center">
          Book Free Audit
        </a>
      </div>
    </nav>
  );
}

import { HeroGeometric } from './ui/shape-landing-hero';

export function Hero() {
  return (
    <HeroGeometric 
      badge="AI AUTOMATION · MELBOURNE TRADIES"
      title1="Answer Every Call."
      title2="Win Every Job."
    >
      <div className="max-w-xl mx-auto">
        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 leading-relaxed font-light tracking-wide px-4">
          The 24/7 AI Receptionist for Melbourne Tradies. While you're on the tools, we're closing the leads.
        </p>
        
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <a href="#contact-section" className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-semibold text-sm transition-all group active:scale-95 shadow-lg shadow-brand/20">
            Claim My Free Audit →
          </a>
          <a href="#how-it-works" className="text-white font-semibold text-sm border-b border-transparent hover:border-white transition-all py-1">
            See How It Works
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] w-full">
          47+ Melbourne Tradie Businesses Automated
        </div>
      </div>

      {/* Scrolling logo strip mockup */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden opacity-30 z-10 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-bold text-xs uppercase text-white/40">
          <span>ServiceM8</span>
          <span>Tradify</span>
          <span>Xero</span>
          <span>Stripe</span>
          <span>Google</span>
          <span>Facebook</span>
        </div>
      </div>
    </HeroGeometric>
  );
}
