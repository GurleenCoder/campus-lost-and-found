import "./FoundItems.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Search, MapPin, CalendarDays, ArrowRight } from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FoundItems() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
  const fetchFoundItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/found-items"
      );

      const data = await response.json();

      if (data.success) {
        setFoundItems(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchFoundItems();
}, []);

  const filteredItems = foundItems.filter((item) => {

    const matchesSearch =
  item.itemName.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;

  });

  return (

    <>
      <Navbar />

      <section className="found-items-page">

        <div className="page-header">

          <h1>Found Items</h1>

          <p>
            Browse all verified items currently available at the Campus
            Admin Office.
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

              <div className="item-card" key={item.id}>

                <img
                 src={
  item.image ||
  "https://placehold.co/600x400?text=No+Image"
}
                  alt={item.itemName}
                />

                <div className="item-content">

                  <h3>{item.itemName}</h3>

                  <p>
                    <MapPin size={16} />
                    {item.locationFound}
                  </p>

                  <p>
                    <CalendarDays size={16} />
                    {new Date(item.dateFound).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
})}
                  </p>

                  <span className="status">
                    {item.status}
                  </span>

                  <Link
                    to={`/found-items/${item._id}`}
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

export default FoundItems;