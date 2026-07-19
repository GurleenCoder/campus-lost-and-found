import "./Navbar.css";
import { Backpack } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  <Backpack className="logo-icon" />

  <span>Campus Lost & Found</span>
</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Lost Items</a></li>
        <li><a href="#">Found Items</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <button className="report-btn">
        Report Lost
      </button>
    </nav>
  );
}

export default Navbar;