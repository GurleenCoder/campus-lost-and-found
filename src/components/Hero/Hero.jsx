import { ShieldCheck } from "lucide-react";
import "./Hero.css";
import heroImage from "../../assets/images/hero-image.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-tagline">
            <ShieldCheck size={18} strokeWidth={2.5} />
            <span>Keeping Our Campus Secure & Connected</span>
        </div>

        <h1>
            Lost Something
            <br />
            on Campus?
        </h1>

        <p>
            Report lost belongings, browse recently found items,
            and collect recovered items securely through the
            campus admin office.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Report a Lost Item
          </button>

          <button className="secondary-btn">
            Browse Found Items
          </button>
        </div>

      </div>

    <div className="hero-image">
    <img
        src={heroImage}
        alt="Campus Lost & Found Illustration"
    />
    </div>

    </section>
  );
}

export default Hero;