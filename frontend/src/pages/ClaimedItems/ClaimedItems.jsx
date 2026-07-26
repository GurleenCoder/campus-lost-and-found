import "./ClaimedItems.css";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ClaimedItems() {
  const [claimedItems, setClaimedItems] = useState([]);

  useEffect(() => {
    const fetchClaimedItems = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/found-items"
        );

        const data = await response.json();

        if (data.success) {
          const claimed = data.data.filter(
            (item) => item.status === "Claimed"
          );

          setClaimedItems(claimed);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchClaimedItems();
  }, []);

  return (
    <div className="claimed-page">
      <div className="claimed-card">

        <Link
          to="/admin-dashboard"
          className="back-link"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <h1>Claimed Items</h1>

        <p>
          These items have already been returned to their rightful owners.
        </p>

        <table>

          <thead>

            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Date Found</th>
              <th>Location</th>
              <th>Claimant</th>
              <th>Roll No.</th>
              <th>Branch</th>
              <th>Claimed On</th>
            </tr>

          </thead>

          <tbody>

            {claimedItems.map((item) => (

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

                <td>{item.claimedBy?.name || "-"}</td>

                <td>{item.claimedBy?.rollNo || "-"}</td>

                <td>{item.claimedBy?.branch || "-"}</td>

                <td>
                  {item.claimedBy?.claimedDate
                    ? new Date(item.claimedBy.claimedDate).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "-"}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

