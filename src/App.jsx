import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function FerryFitness() {
  const [form, setForm] = useState({ name: '', goal: '', vibe: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6 flex flex-col items-center">
      <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Ferry Fitness
      </motion.h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Welcome to Ferry Fitness – where we train like it's your job, but make it feel like play. Whether you're new to fitness or getting back on track, I’ve got you.
      </p>

      <Card className="w-full max-w-md shadow-lg">
        <CardContent>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-semibold">Client Check-In</h2>
              <Input name="name" placeholder="Your Name" onChange={handleChange} required />
              <Input name="goal" placeholder="What's your main goal? (e.g. muscle, tone, endurance)" onChange={handleChange} required />
              <Input name="vibe" placeholder="What's your training vibe? (e.g. anime hero, zen mode, goofball)" onChange={handleChange} required />
              <Textarea name="message" placeholder="Anything else I should know? Injuries, time commitment, preferences?" onChange={handleChange} />
              <Button type="submit" className="w-full">Let’s Get Started</Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold">You're in, {form.name}!</h2>
              <p className="text-base">I'll review your info and follow up soon. Until then: "Progress, not perfection." 💪</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}