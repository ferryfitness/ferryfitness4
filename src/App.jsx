
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Contact Info",
  "Training Goals",
  "Training History",
  "Lifestyle & Health",
  "Consent"
];

export default function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const ProgressBar = () => (
    <div style={{ display: "flex", marginBottom: "1rem" }}>
      {steps.map((label, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: "10px",
            margin: "0 2px",
            backgroundColor: i <= step ? "#bb86fc" : "#444",
            borderRadius: "5px"
          }}
        />
      ))}
    </div>
  );

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0d0d0d",
      color: "#f2eaff",
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: "32rem",
          backgroundColor: "#1c1c2b",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 16px rgba(128,0,255,0.3)"
        }}
      >
        {submitted ? (
          <div style={{ textAlign: "center" }}>
            <h2>Thank you for joining Ferry Fitness!</h2>
            <p>We’ll review your info and follow up shortly. 💪</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} data-netlify="true" name="full-intake-form">
            <input type="hidden" name="form-name" value="full-intake-form" />
            <ProgressBar />
            {step === 0 && (
              <>
                <h3>Contact Info</h3>
                <input name="name" placeholder="Full Name" required onChange={handleChange} style={inputStyle} />
                <input name="email" type="email" placeholder="Email" required onChange={handleChange} style={inputStyle} />
                <input name="phone" type="tel" placeholder="Phone Number" required onChange={handleChange} style={inputStyle} />
                <input name="pronouns" placeholder="Pronouns" required onChange={handleChange} style={inputStyle} />
              </>
            )}
            {step === 1 && (
              <>
                <h3>Training Goals</h3>
                <input name="goal" placeholder="Main Goal" required onChange={handleChange} style={inputStyle} />
                <input name="vibe" placeholder="Training Vibe (e.g. hero’s journey)" required onChange={handleChange} style={inputStyle} />
              </>
            )}
            {step === 2 && (
              <>
                <h3>Training History</h3>
                <textarea name="status" placeholder="Current training status, experience level, etc." required onChange={handleChange} style={textareaStyle} />
              </>
            )}
            {step === 3 && (
              <>
                <h3>Lifestyle & Health</h3>
                <textarea name="availability" placeholder="Days & times available to train" required onChange={handleChange} style={textareaStyle} />
                <textarea name="injuries" placeholder="Injury history or limitations" onChange={handleChange} style={textareaStyle} />
                <textarea name="lifestyle" placeholder="Job, sleep, stress, etc." onChange={handleChange} style={textareaStyle} />
              </>
            )}
            {step === 4 && (
              <>
                <h3>Consent</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  I understand that Ferry Fitness training is voluntary and I accept all personal risk. I’ve disclosed relevant health conditions and give informed consent to begin training.
                </p>
                <label>
                  <input type="checkbox" name="consent" required onChange={handleChange} /> I agree to the terms above
                </label>
                <input name="signature" placeholder="Type full name as signature" required onChange={handleChange} style={inputStyle} />
              </>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
              {step > 0 && <button type="button" onClick={prevStep} style={buttonStyle}>Back</button>}
              {step < steps.length - 1 ? (
                <button type="button" onClick={nextStep} style={buttonStyle}>Next</button>
              ) : (
                <button type="submit" style={buttonStyle}>Submit</button>
              )}
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}

const inputStyle = {
  padding: "0.75rem",
  fontSize: "1rem",
  borderRadius: "0.5rem",
  border: "1px solid #bb86fc",
  backgroundColor: "#2a2a3d",
  color: "#f2eaff",
  marginTop: "0.5rem",
  marginBottom: "1rem",
  width: "100%"
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "80px"
};

const buttonStyle = {
  padding: "0.75rem 1.5rem",
  backgroundColor: "#bb86fc",
  color: "#0d0d0d",
  border: "none",
  borderRadius: "0.5rem",
  fontWeight: "bold",
  cursor: "pointer"
};
