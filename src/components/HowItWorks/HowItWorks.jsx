import "./HowItWorks.css";
import {
  FileText,
  Search,
  Building2,
  PackageCheck,
} from "lucide-react";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="section-title">
        <h2>How It Works</h2>
        <p>
          Recovering lost belongings is simple,
          secure and verified.
        </p>
      </div>

      <div className="steps">

        <div className="step">
          <div className="step-icon">
            <FileText size={34}/>
          </div>

          <h3>Report Lost Item</h3>

          <p>
            Submit details of the item you misplaced.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <Search size={34}/>
          </div>

          <h3>Browse Found Items</h3>

          <p>
            Search through items deposited at the admin office.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <Building2 size={34}/>
          </div>

          <h3>Visit Admin Office</h3>

          <p>
            Verify ownership with the administrator.
          </p>
        </div>

        <div className="step">
          <div className="step-icon">
            <PackageCheck size={34}/>
          </div>

          <h3>Collect Your Item</h3>

          <p>
            Receive your belongings safely after verification.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;