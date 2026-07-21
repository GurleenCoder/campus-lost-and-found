import "./Navbar.css";
import { Link } from "react-router-dom";
import { Backpack } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  <Backpack className="logo-icon" />

  <span>Campus Lost & Found</span>
</div>

      <ul className="nav-links">
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/lost-items">Lost Items</Link>
  </li>

  <li>
    <Link to="/found-items">Found Items</Link>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>
</ul>

      <Link to="/report-lost" className="report-btn">
  Report Lost
</Link>
    </nav>
  );
}

export default Navbar;