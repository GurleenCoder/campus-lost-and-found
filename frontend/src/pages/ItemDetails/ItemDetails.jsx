import "./ItemDetails.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  MapPin,
  CalendarDays,
  Package,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

function ItemDetails() {

  const { id } = useParams();

  const [item, setItem] = useState(null);

useEffect(() => {
  const fetchItem = async () => {
    try {
      const response = await fetch(
        `https://campus-lost-and-found-backend-mo3s.onrender.com/api/found-items/${id}`
      );

      const data = await response.json();

      if (data.success) {
        setItem(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchItem();
}, [id]);

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
  src={
    item.image
      ? `https://campus-lost-and-found-backend-mo3s.onrender.com${item.image}`
      : "https://placehold.co/600x400?text=No+Image"
  }
  alt={item.itemName}
/>

          </div>

          <div className="details-content">

            <span className="details-status">
              {item.status}
            </span>

            <h1>{item.itemName}</h1>

            <div className="details-info">

              <p>
                <MapPin size={18} />
                <strong>Found At:</strong>
                {item.locationFound}
              </p>

              <p>
                <CalendarDays size={18} />
                <strong>Date Found:</strong>
                {new Date(item.dateFound).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                })}
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
                 Visit the <strong>Campus Admin Office</strong> with your College ID and be prepared to describe
                 the item for verification before collecting it.
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