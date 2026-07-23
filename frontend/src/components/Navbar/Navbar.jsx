import "./Navbar.css";

import { Backpack, Menu, X } from "lucide-react";

import { Link } from "react-router-dom";

import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      <div className="logo">

        <Backpack className="logo-icon" />

        <span>Campus Lost & Found</span>

      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/lost-items" onClick={closeMenu}>
            Lost Items
          </Link>
        </li>

        <li>
          <Link to="/found-items" onClick={closeMenu}>
            Found Items
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        {/* Visible only on mobile */}

        <li className="mobile-report">

          <Link
            to="/report-lost"
            onClick={closeMenu}
            className="mobile-report-btn"
          >
            Report Lost
          </Link>

        </li>

      </ul>

      {/* Desktop Button */}

      <Link to="/report-lost">

        <button className="report-btn">

          Report Lost

        </button>

      </Link>

      {/* Hamburger */}

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <X size={28} /> : <Menu size={28} />}

      </div>

    </nav>

  );

}

export default Navbar;