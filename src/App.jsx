
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FerryFitness() {
  const [stage, setStage] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0d0d0d', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif', overflow: 'hidden', color: '#f2eaff' }}>
      <AnimatePresence>
        {showContent && !submitted && (
          <motion.div
            key={stage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: '#1c1c2b', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(128,0,255,0.3)', maxWidth: '32rem', width: '100%' }}
          >
            {stage === 1 ? (
              <>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>Client Info</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStage(2);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <input name="name" placeholder="Your Name" required style={inputStyle} />
                  <input name="email" type="email" placeholder="Email Address" required style={inputStyle} />
                  <input name="phone" type="tel" placeholder="Phone Number" required style={inputStyle} />
                  <input name="pronouns" placeholder="Pronouns (e.g. they/them, she/her, he/him)" required style={inputStyle} />
                  <button type="submit" style={buttonStyle}>Next</button>
                </form>
              </>
            ) : (
              <>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>Let’s Get Started</h2>
                <form
                  name="client-checkin"
                  method="POST"
                  data-netlify="true"
                  onSubmit={() => setSubmitted(true)}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <input type="hidden" name="form-name" value="client-checkin" />
                  <input name="goal" placeholder="Main Goal (e.g. muscle gain, tone, performance)" required style={inputStyle} />
                  <input name="vibe" placeholder="Training Vibe (e.g. hero’s journey, zen, playful)" required style={inputStyle} />
                  <textarea name="message" placeholder="Anything else I should know? (e.g. occupation, availability, injury history)" style={{ ...inputStyle, minHeight: '80px' }} />
                  <button type="submit" style={buttonStyle}>Submit</button>
                </form>
              </>
            )}
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
            <section style={{ backgroundColor: '#1c1c2b', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(128,0,255,0.3)' }}>
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
  border: '1px solid #bb86fc',
  backgroundColor: '#2a2a3d',
  color: '#f2eaff'
};

const buttonStyle = {
  padding: '0.75rem',
  fontWeight: 'bold',
  backgroundColor: '#bb86fc',
  color: '#0d0d0d',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer'
};
