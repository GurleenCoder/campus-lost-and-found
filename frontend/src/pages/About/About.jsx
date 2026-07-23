import "./About.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Search,
  Package,
  CheckCircle,
  Lock,
  Database,
} from "lucide-react";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">

        {/* Hero */}

        <div className="about-hero">

          <h1>About Campus Lost & Found</h1>

          <p>
            Helping students recover their belongings through a secure,
            organized and admin-managed system.
          </p>

        </div>

        {/* Mission */}

        <div className="about-section">

          <h2>Our Mission</h2>

          <p>
            Campus Lost & Found is designed to simplify the process of
            recovering lost belongings within the college campus.
            Instead of relying on informal communication or social media,
            this platform provides a centralized and secure system where
            students can report lost items while the campus administration
            manages found items efficiently.
          </p>

        </div>

        {/* How it Works */}

        <div className="about-section">

          <h2>How It Works</h2>

          <div className="workflow-grid">

            <div className="workflow-card">

              <Search size={40} />

              <h3>Report Lost</h3>

              <p>
                Students report details of the item they have lost.
              </p>

            </div>

            <div className="workflow-card">

              <Package size={40} />

              <h3>Admin Collects</h3>

              <p>
                Found items are submitted directly to the Campus Admin Office.
              </p>

            </div>

            <div className="workflow-card">

              <Database size={40} />

              <h3>Inventory Updated</h3>

              <p>
                The admin verifies and publishes found items on the portal.
              </p>

            </div>

            <div className="workflow-card">

              <CheckCircle size={40} />

              <h3>Claim & Verify</h3>

              <p>
                Students reclaim their belongings after identity verification.
              </p>

            </div>

          </div>

        </div>

        {/* Why Admin Managed */}

        <div className="about-section">

          <h2>Why an Admin-Managed System?</h2>

          <p>
            Unlike peer-to-peer lost and found platforms, this system protects
            student privacy by avoiding the direct sharing of personal contact
            information. Every found item is managed by the Campus Admin Office
            and returned only after proper verification.
          </p>

        </div>

        {/* Features */}

        <div className="about-section">

          <h2>Key Features</h2>

          <div className="features-grid">

            <div className="feature-box">
              <ShieldCheck size={30}/>
              Secure Process
            </div>

            <div className="feature-box">
              <CheckCircle size={30}/>
              Verified Claims
            </div>

            <div className="feature-box">
              <Search size={30}/>
              Easy Search
            </div>

            <div className="feature-box">
              <Database size={30}/>
              Organized Records
            </div>

            <div className="feature-box">
              <Package size={30}/>
              Campus Friendly
            </div>

            <div className="feature-box">
              <Lock size={30}/>
              Privacy Focused
            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="about-cta">

          <h2>
            Together, we can build a more responsible and connected campus community.
          </h2>

          <Link to="/report-lost">

            <button>

              Report Lost Item

            </button>

          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;