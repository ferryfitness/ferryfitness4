
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0d0d0d', color: '#f2eaff', padding: '2rem', fontFamily: 'sans-serif' }}>
      <AnimatePresence>
        {!submitted ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1c1c2b', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(128,0,255,0.3)' }}
          >
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ferry Fitness Intake</h1>
            <form name="client-intake" method="POST" data-netlify="true" onSubmit={() => setSubmitted(true)}>
              <input type="hidden" name="form-name" value="client-intake" />
              {step === 1 && <>
                <input name="name" placeholder="Name" required style={inputStyle} />
                <input name="email" type="email" placeholder="Email" required style={inputStyle} />
                <input name="phone" type="tel" placeholder="Phone Number" required style={inputStyle} />
                <input name="pronouns" placeholder="Pronouns" style={inputStyle} />
                <button onClick={handleNext} style={buttonStyle}>Next</button>
              </>}
              {step === 2 && <>
                <input name="goal" placeholder="Your primary goal (e.g. gain muscle, lose fat)" required style={inputStyle} />
                <input name="training_vibe" placeholder="Training vibe (e.g. anime hero, zen)" style={inputStyle} />
                <input name="experience" placeholder="Training experience (e.g. beginner, intermediate, advanced)" style={inputStyle} />
                <button onClick={handleNext} style={buttonStyle}>Next</button>
              </>}
              {step === 3 && <>
                <input name="occupation" placeholder="Occupation or daily activity level" style={inputStyle} />
                <input name="availability" placeholder="Preferred training times (e.g. mornings, evenings)" style={inputStyle} />
                <textarea name="injury_history" placeholder="Injury history or physical concerns" style={{ ...inputStyle, minHeight: '80px' }} />
                <textarea name="extra_notes" placeholder="Is there anything else I should know?" style={{ ...inputStyle, minHeight: '80px' }} />
                <button type="submit" style={buttonStyle}>Submit</button>
              </>}
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", padding: "2rem" }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Thank you!</h2>
            <p>Your form has been submitted. I’ll be in touch soon!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #bb86fc',
  backgroundColor: '#2a2a3d',
  color: '#f2eaff',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  fontWeight: 'bold',
  backgroundColor: '#bb86fc',
  color: '#0d0d0d',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer'
};
