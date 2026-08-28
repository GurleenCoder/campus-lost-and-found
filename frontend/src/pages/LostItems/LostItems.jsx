import "./LostItems.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Search, MapPin, CalendarDays, ArrowRight } from "lucide-react";


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LostItems() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
  const fetchLostItems = async () => {
    try {
      const response = await fetch(
       "https://campus-lost-and-found-backend-mo3s.onrender.com/api/lost-items"
      );

      const data = await response.json();

      if (data.success) {
        setLostItems(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchLostItems();
}, []);

  const filteredItems = lostItems.filter((item) => {

    const matchesSearch =
    item.itemName.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;

  });

  return (

    <>
      <Navbar />

      <section className="lost-items-page">

        <div className="page-header">

          <h1>Lost Items</h1>

          <p>
            Browse reported lost items across the campus.
            If you have found any of these items, please submit them to the Campus Admin Office.
          </p>

        </div>

        <div className="search-filter">

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Bag</option>
            <option>Electronics</option>
            <option>Keys</option>
          </select>

        </div>

        <div className="items-grid">

          {filteredItems.length > 0 ? (

            filteredItems.map((item) => (

              <div className="item-card" key={item._id}>

                <div className="item-content">

                  <h3>{item.itemName}</h3>

                  <p>
                    <MapPin size={16} />
                    {item.locationLost}
                  </p>

                  <p>
                    <CalendarDays size={16} />
                    {new Date(item.dateLost).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    })}
                  </p>

                  <span className="status">
                    {item.status}
                  </span>

                  <Link
                   to={`/lost-items/${item._id}`}
                    className="details-btn"
                  >
                    View Details
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            ))

          ) : (

            <div className="empty-state">

              <h2>No items found</h2>

              <p>
                Try changing the search keyword or category.
              </p>

            </div>

          )}

        </div>

      </section>

      <Footer />

    </>

  );

}

export default LostItems;