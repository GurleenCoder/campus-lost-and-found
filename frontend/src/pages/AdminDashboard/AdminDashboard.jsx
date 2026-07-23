import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import foundItems from "../../data/foundItems";
import lostItems from "../../data/lostItems";

import {
  Package,
  Search,
  CheckCircle,
  PlusCircle,
  LogOut,
} from "lucide-react";

function AdminDashboard() {
    const navigate = useNavigate();
    const foundCount = foundItems.length;
    const lostCount = lostItems.length;
    const claimedCount = 0;

  return (

    <div className="dashboard">

      <aside className="sidebar">

        <h2>Admin Portal</h2>

        <ul>

          <li onClick={() => navigate("/found-items")}>
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

          <li onClick={() => navigate("/")}>
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

          <h2>Recent Activity</h2>

          <table>

            <thead>

              <tr>

                <th>Item</th>

                <th>Status</th>

                <th>Location</th>

              </tr>

            </thead>

            <tbody>

  {foundItems.slice(0, 5).map((item) => (

    <tr key={item.id}>

      <td>{item.name}</td>

      <td>

        <span
          className={
            item.status === "Claimed"
              ? "claimed"
              : "available"
          }
        >
          {item.status}
        </span>

      </td>

      <td>{item.location}</td>

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