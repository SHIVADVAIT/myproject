// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">🕉️ गुरुदेव</div>

        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>मुख्य पृष्ठ</Link>
          <Link to="/biography" className="nav-link" onClick={closeMenu}>जीवन और शिक्षाएं</Link>
          <Link to="/books" className="nav-link" onClick={closeMenu}>पवित्र ग्रंथ</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>संपर्क सूत्र</Link>
        </div>
      </div>
    </nav>
  );
}
