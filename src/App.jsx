import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FerryFitness() {
  const [form, setForm] = useState({ name: '', goal: '', vibe: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff7ed', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Ferry Fitness
      </motion.h1>
      <p style={{ fontSize: '1.125rem', textAlign: 'center', maxWidth: '36rem', marginBottom: '2rem' }}>
        Welcome to Ferry Fitness – where we train like it's your job, but make it feel like play. Whether you're new to fitness or getting back on track, I’ve got you.
      </p>

      <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '28rem' }}>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Client Check-In</h2>
            <input name="name" placeholder="Your Name" onChange={handleChange} required />
            <input name="goal" placeholder="What's your main goal? (e.g. muscle, tone, endurance)" onChange={handleChange} required />
            <input name="vibe" placeholder="What's your training vibe? (e.g. anime hero, zen mode, goofball)" onChange={handleChange} required />
            <textarea name="message" placeholder="Anything else I should know? Injuries, time commitment, preferences?" onChange={handleChange} />
            <button type="submit" style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '0.5rem' }}>
              Let’s Get Started
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>You're in, {form.name}!</h2>
            <p style={{ fontSize: '1rem' }}>I'll review your info and follow up soon. Until then: "Progress, not perfection." 💪</p>
          </div>
        )}
      </div>
    </div>
  );
}