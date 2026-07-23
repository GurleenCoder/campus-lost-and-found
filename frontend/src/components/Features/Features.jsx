import "./Features.css";
import {
  Search,
  ClipboardList,
  ShieldCheck,
  Zap,
} from "lucide-react";

function Features() {
  return (
    <section className="features">

      <div className="features-heading">
        <h2>Why Choose Our Platform?</h2>

        <p>
          Making campus item recovery simple,
          secure and efficient.
        </p>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <ClipboardList size={42} />

          <h3>Report Lost Items</h3>

          <p>
            Quickly submit details about your
            misplaced belongings.
          </p>
        </div>

        <div className="feature-card">
          <Search size={42} />

          <h3>Browse Found Items</h3>

          <p>
            Explore items securely submitted
            to the admin office.
          </p>
        </div>

        <div className="feature-card">
          <ShieldCheck size={42} />

          <h3>Verified Recovery</h3>

          <p>
            Items are returned only after
            ownership verification.
          </p>
        </div>

        <div className="feature-card">
          <Zap size={42} />

          <h3>Quick Process</h3>

          <p>
            A fast, transparent and
            hassle-free recovery experience.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;