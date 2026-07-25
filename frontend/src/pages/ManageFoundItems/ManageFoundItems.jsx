import "./ManageFoundItems.css";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ManageFoundItems() {

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

  const handleClaim = async (id) => {

  const confirmClaim = window.confirm(
    "Mark this item as claimed?"
  );

  if (!confirmClaim) return;

  try {

    const response = await fetch(
      `http://localhost:5000/api/found-items/${id}/claim`,
      {
        method: "PATCH",
      }
    );

    const data = await response.json();

    if (data.success) {

      setFoundItems((prevItems) =>
        prevItems.map((item) =>
          item._id === id
            ? { ...item, status: "Claimed" }
            : item
        )
      );

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  }

};

  return (

    <div className="manage-found-page">

      <div className="manage-found-card">

        <Link
          to="/admin-dashboard"
          className="back-link"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <h1>Manage Found Items</h1>

        <p>
          View and manage all items currently stored in the Campus Admin Office.
        </p>

        <table>

          <thead>

            <tr>

              <th>Item</th>

              <th>Category</th>

              <th>Date Found</th>

              <th>Location</th>

              <th>Status</th>

              <th>Action</th>


            </tr>

          </thead>

          <tbody>

            {foundItems.map((item) => (

              <tr key={item._id}>

                <td>{item.itemName}</td>

                <td>{item.category}</td>

                <td>

                  {new Date(item.dateFound).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}

                </td>

                <td>{item.locationFound}</td>

                <td>
                    <span
                     className={
                     item.status === "Claimed"
                     ? "status claimed"
                     : "status available"
                     }>
                    {item.status}
                    </span>
                </td>

                <td>

  {item.status === "Available" ? (

    <button
      className="claim-btn"
      onClick={() => handleClaim(item._id)}
    >
      Mark as Claimed
    </button>

  ) : (

    <span className="claimed-text">
      ✓ Claimed
    </span>

  )}

</td>
  

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ManageFoundItems;