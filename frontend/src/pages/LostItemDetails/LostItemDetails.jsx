import "./LostItemDetails.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link, useParams } from "react-router-dom";

import lostItems from "../../data/lostItems";

import {
  MapPin,
  CalendarDays,
  Package,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

function LostItemDetails() {

  const { id } = useParams();

  const item = lostItems.find(
  (item) => item.id === Number(id)
);

  if (!item) {
    return (
      <>
        <Navbar />

        <div className="item-not-found">
          <h2>Item not found</h2>

          <Link to="/lost-items">
            Back to Lost Items
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="item-details-page">

        <div className="details-container">

          <div className="details-image">

            <img
              src={item.image}
              alt={item.name}
            />

          </div>

          <div className="details-content">

            <span className="details-status">
              {item.status}
            </span>

            <h1>{item.name}</h1>

            <div className="details-info">

              <p>
                <MapPin size={18} />
                <strong>Last Seen At:</strong>
                {item.location}
              </p>

              <p>
                <CalendarDays size={18} />
               <strong>Date Lost:</strong>
                {item.date}
              </p>

              <p>
                <Package size={18} />
                <strong>Category:</strong>
                {item.category}
              </p>

            </div>

            <h3>Description</h3>

            <p className="description">
              {item.description}
            </p>

            <div className="claim-box">

              <ShieldCheck size={22} />

              <div>

                <h4>Have you found this item?</h4>

<p>
  If you have found this item anywhere on campus,
  please submit it to the <strong>Campus Admin Office</strong>.
  Our team will verify the item and notify the rightful owner.
</p>

              </div>

            </div>

            <Link
              to="/lost-items"
              className="back-btn"
            >
              <ArrowLeft size={18} />

              Back to Lost Items

            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default LostItemDetails;