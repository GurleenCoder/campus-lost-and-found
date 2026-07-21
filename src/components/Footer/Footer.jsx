import "./Footer.css";
import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, Clock } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <div className="footer-logo">
            <ShieldCheck size={30} />
            <h2>Campus Lost & Found</h2>
          </div>

          <p>
            Helping students recover their belongings quickly,
            securely and responsibly across the campus.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/report-lost">Report Lost</Link>
          <Link to="/found-items">Found Items</Link>
          <Link to="/lost-items">Lost Items</Link>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>
            <MapPin size={16}/>
            Admin Office
          </p>

          <p>
            <Clock size={16}/>
            Mon - Fri | 9 AM - 5 PM
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Campus Lost & Found Portal. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;