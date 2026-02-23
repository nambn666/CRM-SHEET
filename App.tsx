
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Landing from './components/Landing';
import ThankYou from './components/ThankYou';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'thanks'>('home');

  const handleSuccess = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('thanks');
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('home');
  };

  return (
    <div className="min-h-screen selection:bg-gold/30 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Landing onSuccess={handleSuccess} />
          </motion.div>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ThankYou onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
