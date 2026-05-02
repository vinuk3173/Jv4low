import { Navigation, Hero } from './components/Sections';
import { PainPoints, Services, ReportingEngine } from './components/MoreSections';
import { Timeline, Results, BrandMoment, Integrations } from './components/LastSections';
import { Pricing, FAQ, FinalCTA, Footer } from './components/FooterAndCo';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="bg-bg min-h-screen text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <PainPoints />
            <Services />
            <ReportingEngine />
            <Timeline />
            <Results />
            <BrandMoment />
            <Integrations />
            <Pricing />
            <FAQ />
            <FinalCTA />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
