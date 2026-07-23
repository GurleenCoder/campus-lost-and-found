import "./ItemDetails.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link, useParams } from "react-router-dom";

import foundItems from "../../data/foundItems";

import {
  MapPin,
  CalendarDays,
  Package,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

function ItemDetails() {

  const { id } = useParams();

  const item = foundItems.find(
    (item) => item.id === Number(id)
  );

  if (!item) {
    return (
      <>
        <Navbar />

        <div className="item-not-found">
          <h2>Item not found</h2>

          <Link to="/found-items">
            Back to Found Items
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
                <strong>Found At:</strong>
                {item.location}
              </p>

              <p>
                <CalendarDays size={18} />
                <strong>Date Found:</strong>
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

                <h4>Claim Instructions</h4>

                <p>
                  Visit the <strong>{item.officeLocation}</strong>
                  {" "}with your College ID and be prepared
                  to describe the item for verification
                  before collecting it.
                </p>

              </div>

            </div>

            <Link
              to="/found-items"
              className="back-btn"
            >
              <ArrowLeft size={18} />

              Back to Found Items

            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default ItemDetails;