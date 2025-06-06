
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', color: '#f2eaff', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <h1 style={{ fontSize: '1.5rem' }}>Ferry Fitness</h1>
        <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: 'pointer' }}>
          <div style={{ width: 25, height: 3, backgroundColor: '#bb86fc', marginBottom: 5 }} />
          <div style={{ width: 25, height: 3, backgroundColor: '#bb86fc', marginBottom: 5 }} />
          <div style={{ width: 25, height: 3, backgroundColor: '#bb86fc' }} />
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              backgroundColor: "#1c1c2b",
              padding: "1rem",
              borderRadius: "0.5rem",
              margin: "1rem",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ margin: "0.5rem 0", cursor: "pointer" }} onClick={() => setPage("home")}>Home</li>
              <li style={{ margin: "0.5rem 0", cursor: "pointer" }} onClick={() => setPage("client")}>Client Intake</li>
              <li style={{ margin: "0.5rem 0", cursor: "pointer" }} onClick={() => setPage("packages")}>Packages</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <main style={{ padding: "2rem" }}>
        {page === "home" && <p>Welcome to Ferry Fitness – your journey starts here.</p>}
        {page === "client" && (
          <form name="client-intake" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="client-intake" />
            <input name="name" placeholder="Name" required style={inputStyle} />
            <input name="email" type="email" placeholder="Email" required style={inputStyle} />
            <input name="goal" placeholder="Your goal (e.g. build strength)" style={inputStyle} />
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        )}
        {page === "packages" && (
          <section>
            <h2>Training Packages</h2>
            <ul>
              <li><a href="https://buy.stripe.com/dRmeVe857a1U06I1bK8bS00">Single Session – $40</a></li>
              <li><a href="https://buy.stripe.com/00w14o1GJ8XQf1CdYw8bS01">5-Pack – $175</a></li>
              <li><a href="https://buy.stripe.com/eVq5kE3OR4HA5r2dYw8bS02">10-Pack – $300</a></li>
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  marginBottom: '1rem',
  padding: '0.75rem',
  width: '100%',
  maxWidth: '400px',
  borderRadius: '0.5rem',
  border: '1px solid #bb86fc',
  backgroundColor: '#2a2a3d',
  color: '#f2eaff'
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#bb86fc',
  color: '#0d0d0d',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer'
};
