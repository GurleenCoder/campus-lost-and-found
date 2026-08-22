import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


import {
  Package,
  Search,
  CheckCircle,
  PlusCircle,
  LogOut,
} from "lucide-react";

function AdminDashboard() {
    const navigate = useNavigate();
    const [lostItems, setLostItems] = useState([]);
    const [foundItems, setFoundItems] = useState([]);
    const foundCount = foundItems.length;
    const lostCount = lostItems.length;
    const claimedCount = 0;

    useEffect(() => {
  const fetchLostItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/lost-items"
      );

      const data = await response.json();

      if (data.success) {
        setLostItems(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
  fetchLostItems();
}, []);

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this report?"
  );

  if (!confirmDelete) return;

  try {
    const response = await fetch(
  `http://localhost:5000/api/lost-items/${id}`,
  {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("adminToken"),
    },
  }
);

    const data = await response.json();

    if (data.success) {
      setLostItems((prevItems) =>
        prevItems.filter((item) => item._id !== id)
      );
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

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

    <div className="dashboard">

      <aside className="sidebar">

        <h2>Admin Portal</h2>

        <ul>

          <li onClick={() => navigate("/admin/manage-found-items")}>
            <Package size={18}/>
            Manage Found Items
        </li>

          <li onClick={() => navigate("/lost-items")}>
            <Search size={18}/>
            Reported Lost Items
        </li>

          <li onClick={() => navigate("/claimed-items")}>
            <CheckCircle size={18}/>
            Claimed Items
         </li>

         <li
  onClick={() => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");
  }}
>
  <LogOut size={18}/>
  Logout
</li>

        </ul>

      </aside>

      <main className="dashboard-content">

        <div className="dashboard-header">

          <h1>
            Dashboard
          </h1>

          <button
          onClick={() => navigate("/admin/add-found-item")}>

            <PlusCircle size={18}/>

            Add Found Item

          </button>

        </div>

        <div className="stats-grid">

  <div className="stat-card">

    <div className="stat-icon found-icon">
      <Package size={28} />
    </div>

    <h2>{foundCount}</h2>

    <p>Found Items</p>

  </div>

  <div className="stat-card">

    <div className="stat-icon lost-icon">
      <Search size={28} />
    </div>

    <h2>{lostCount}</h2>

    <p>Lost Reports</p>

  </div>

  <div className="stat-card">

    <div className="stat-icon claimed-icon">
      <CheckCircle size={28} />
    </div>

    <h2>{claimedCount}</h2>

    <p>Claimed Items</p>

  </div>

</div>
        <div className="recent-items">

          <h2>Recent Lost Reports</h2>

          <table>

            <thead>

              <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Date</th>
              <th>Location</th>
              <th>Action</th>
              </tr>

            </thead>

            <tbody>

  {lostItems
  .slice()
  .reverse()
  .slice(0, 5)
  .map((item) => (
    <tr key={item._id}>
      <td>{item.itemName}</td>

      <td>{item.category}</td>

      <td>
        {new Date(item.dateLost).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </td>

      <td>{item.locationLost}</td>


      <td>
  <button
    className="delete-btn"
    onClick={() => handleDelete(item._id)}
  >
    Delete
  </button>
</td>

    </tr>
))}

</tbody>

          </table>

        </div>

      </main>

    </div>

  );

}

export default AdminDashboard;