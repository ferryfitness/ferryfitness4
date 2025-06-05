import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FerryFitness() {
  const [submitted, setSubmitted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      <AnimatePresence>
        {showContent && !submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', maxWidth: '32rem', width: '100%' }}
          >
            <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>Start Your Journey</h2>
            <form
              name="client-checkin"
              method="POST"
              data-netlify="true"
              onSubmit={() => setSubmitted(true)}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <input type="hidden" name="form-name" value="client-checkin" />
              <input name="name" placeholder="Your Name" required style={inputStyle} />
              <input name="goal" placeholder="Main Goal (e.g. muscle, tone, endurance)" required style={inputStyle} />
              <input name="vibe" placeholder="Your Training Vibe (e.g. anime hero, zen mode)" required style={inputStyle} />
              <textarea name="message" placeholder="Anything else I should know?" style={{ ...inputStyle, minHeight: '80px' }} />
              <button type="submit" style={buttonStyle}>Let’s Get Started</button>
            </form>
          </motion.div>
        )}

        {showContent && submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', maxWidth: '36rem' }}
          >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to Ferry Fitness</h1>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Thanks for checking in! I’ll review your info and follow up soon.
              Until then, remember: <strong>“Progress, not perfection.”</strong>
            </p>
            <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>About Ferry Fitness</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Ferry Fitness is a personal training experience rooted in energy, fun, and real-life goals. Whether you’re an actor getting camera-ready or someone returning to movement after injury, we build strength and confidence without the stress. Coaching is grounded, encouraging, and tailored just for you.
              </p>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '0.75rem',
  fontWeight: 'bold',
  backgroundColor: '#f97316',
  color: 'white',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer'
};