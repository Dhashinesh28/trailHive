import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="TrailHive" />
      </div>
      <div className={menuOpen ? "nav-links show-menu" : "nav-links"}>
        <a href="#features" onClick={() => setMenuOpen(false)}> Features </a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#blog" onClick={() => setMenuOpen(false)} >  Blog</a>
        <a href="#about" onClick={() => setMenuOpen(false)}> About us</a>
        <button className="contact-btn" onClick={() => setMenuOpen(false)}>
             Contact us
        </button>
        <button className="download-btn" onClick={() => setMenuOpen(false)} >
          Download the app
        </button>
      </div>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  )
}