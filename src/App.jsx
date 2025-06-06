
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: "home", label: "Home" },
    { key: "intake", label: "Client Intake" },
    { key: "portal", label: "Client Portal" },
    { key: "testimonials", label: "Testimonials" },
    { key: "booking", label: "Book a Session" },
    { key: "payments", label: "Payments" }
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const renderPage = () => {
    switch (page) {
      case "intake":
        return (
          <form name="full-intake" method="POST" data-netlify="true" style={formStyle}>
            <input type="hidden" name="form-name" value="full-intake" />
            <h2>Client Intake</h2>
            <input name="name" placeholder="Name" required style={inputStyle} />
            <input name="email" type="email" placeholder="Email" required style={inputStyle} />
            <input name="phone" type="tel" placeholder="Phone" required style={inputStyle} />
            <textarea name="goals" placeholder="Your goals" required style={inputStyle}></textarea>
            <textarea name="history" placeholder="Training history / lifestyle" style={inputStyle}></textarea>
            <label><input type="checkbox" required /> I consent to begin training</label>
            <input name="signature" placeholder="Signature" required style={inputStyle} />
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        );
      case "portal":
        return (
          <div>
            <h2>Client Portal</h2>
            <p>Weekly check-ins, resources, and progress logs will live here.</p>
            <ul>
              <li><a href="#">Download Workout PDF</a></li>
              <li><a href="#">Submit Weekly Check-In</a></li>
              <li><a href="#">View Progress Log</a></li>
            </ul>
          </div>
        );
      case "testimonials":
        return (
          <div>
            <h2>Client Testimonials</h2>
            <p>"Ferry Fitness helped me fall in love with movement again!"</p>
            <p>"Tyler is the most encouraging coach I’ve ever had."</p>
          </div>
        );
      case "booking":
        return (
          <div>
            <h2>Book a Session</h2>
            <p><a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Click here to schedule via Calendly</a></p>
          </div>
        );
      case "payments":
        return (
          <div>
            <h2>Make a Payment</h2>
            <p><a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Pay via Stripe</a></p>
          </div>
        );
      default:
        return (
          <div>
            <h1>Welcome to Ferry Fitness</h1>
            <p>Your personal training journey starts here. 💪</p>
          </div>
        );
    }
  };

  return (
    <div style={pageWrapper}>
      <div style={header}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Ferry Fitness</h1>
        <button onClick={toggleMenu} style={menuButton}>☰</button>
        {menuOpen && (
          <div style={menu}>
            {navItems.map((item) => (
              <button key={item.key} onClick={() => { setPage(item.key); setMenuOpen(false); }} style={navButton}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "640px" }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const pageWrapper = {
  backgroundColor: "#0d0d0d",
  color: "#f2eaff",
  fontFamily: "sans-serif",
  minHeight: "100vh",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const header = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem"
};

const menuButton = {
  background: "transparent",
  border: "none",
  color: "#bb86fc",
  fontSize: "1.5rem",
  cursor: "pointer"
};

const menu = {
  position: "absolute",
  top: "3.5rem",
  right: "2rem",
  backgroundColor: "#1c1c2b",
  padding: "1rem",
  borderRadius: "0.5rem",
  boxShadow: "0 4px 16px rgba(128,0,255,0.3)",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem"
};

const navButton = {
  backgroundColor: "#2a2a3d",
  color: "#f2eaff",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "0.3rem",
  cursor: "pointer"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid #bb86fc",
  backgroundColor: "#2a2a3d",
  color: "#f2eaff"
};

const buttonStyle = {
  padding: "0.75rem",
  fontWeight: "bold",
  backgroundColor: "#bb86fc",
  color: "#0d0d0d",
  border: "none",
  borderRadius: "0.5rem",
  cursor: "pointer"
};
