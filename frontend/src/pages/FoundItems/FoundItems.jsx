import "./FoundItems.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Search, MapPin, CalendarDays, ArrowRight } from "lucide-react";

import foundItems from "../../data/foundItems";

import { useState } from "react";
import { Link } from "react-router-dom";

function FoundItems() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = foundItems.filter((item) => {

    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

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
                  src={item.image}
                  alt={item.name}
                />

                <div className="item-content">

                  <h3>{item.name}</h3>

                  <p>
                    <MapPin size={16} />
                    {item.location}
                  </p>

                  <p>
                    <CalendarDays size={16} />
                    {item.date}
                  </p>

                  <span className="status">
                    {item.status}
                  </span>

                  <Link
                    to={`/found-items/${item.id}`}
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