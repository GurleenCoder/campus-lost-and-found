import "./LostItemDetails.css";

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

function LostItemDetails() {

  const { id } = useParams();

  const [item, setItem] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchItem = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/lost-items/${id}`
      );

      const data = await response.json();

      if (data.success) {
        setItem(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchItem();
}, [id]);

  if (loading) {
  return (
    <>
      <Navbar />
      <div className="item-not-found">
        <h2>Loading...</h2>
      </div>
      <Footer />
    </>
  );
}
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
            src="https://placehold.co/600x400?text=No+Image"
            alt={item.itemName}
            />

          </div>

          <div className="details-content">

            <span className="details-status">
              Searching
            </span>

            <h1>{item.itemName}</h1>

            <div className="details-info">

              <p>
                <MapPin size={18} />
                <strong>Last Seen At:</strong>
                {item.locationLost}
              </p>

              <p>
                <CalendarDays size={18} />
               <strong>Date Lost:</strong>
                {new Date(item.dateLost).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
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