import "./ManageFoundItems.css";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ManageFoundItems() {

  const [showClaimModal, setShowClaimModal] = useState(false);

const [selectedItemId, setSelectedItemId] = useState(null);

const [claimForm, setClaimForm] = useState({
  name: "",
  rollNo: "",
  branch: "",
});

  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {

    const fetchFoundItems = async () => {

      try {

        const response = await fetch(
          "https://campus-lost-and-found-backend-mo3s.onrender.com/api/found-items"
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
  try {
    const response = await fetch(
      `https://campus-lost-and-found-backend-mo3s.onrender.com/api/found-items/${id}/claim`,
      {
        method: "PATCH",
       headers: {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("adminToken"),
},
        body: JSON.stringify(claimForm),
      }
    );

    const data = await response.json();

    if (data.success) {
      setFoundItems((prevItems) =>
        prevItems.map((item) =>
          item._id === id
            ? {
                ...item,
                status: "Claimed",
                claimedBy: data.data.claimedBy,
              }
            : item
        )
      );

      setShowClaimModal(false);

      setClaimForm({
        name: "",
        rollNo: "",
        branch: "",
      });

      setSelectedItemId(null);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

  return (
    <>

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
  onClick={() => {
    setSelectedItemId(item._id);
    setShowClaimModal(true);
  }}
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

    {showClaimModal && (
  <div className="claim-modal-overlay">

    <div className="claim-modal">

      <h2>Claim Item</h2>

      <p>
        Enter the claimant's details before marking this item as claimed.
      </p>

      <input
        type="text"
        placeholder="Student Name"
        value={claimForm.name}
        onChange={(e) =>
          setClaimForm({
            ...claimForm,
            name: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Roll Number"
        value={claimForm.rollNo}
        onChange={(e) =>
          setClaimForm({
            ...claimForm,
            rollNo: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Branch"
        value={claimForm.branch}
        onChange={(e) =>
          setClaimForm({
            ...claimForm,
            branch: e.target.value,
          })
        }
      />

      <div className="claim-modal-buttons">

        <button
          className="cancel-btn"
          onClick={() => {
            setShowClaimModal(false);

            setClaimForm({
              name: "",
              rollNo: "",
              branch: "",
            });
          }}
        >
          Cancel
        </button>

        <button
          className="confirm-btn"
          onClick={() =>
            handleClaim(selectedItemId)
          }
        >
          Confirm Claim
        </button>

      </div>

    </div>

  </div>
)}

</>

  );

  
}

export default ManageFoundItems;