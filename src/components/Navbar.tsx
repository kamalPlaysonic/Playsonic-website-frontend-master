import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/Playsonic-logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when resizing above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="nav-links">
        <a href="#what-is-playsonic"><strong>About us</strong></a>
        <div className="dropdown">
          <a href="#"><strong>For Clubs ▾</strong></a>
          <div className="dropdown-menu">
            {/* add dropdown items here */}
          </div>
        </div>
        <a href="#download-section">
          <button className="profile-btn"><strong>Download</strong></button>
        </a>
      </div>

      {/* Burger icon */}
      <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#what-is-playsonic" onClick={toggleMenu}><strong>About us</strong></a>
        <a href="#" onClick={toggleMenu}><strong>For Clubs</strong></a>
        <a href="#download-section" onClick={toggleMenu}>
          <button className="profile-btn"><strong>Download</strong></button>
        </a>
      </div>
    </nav>
  );
}
