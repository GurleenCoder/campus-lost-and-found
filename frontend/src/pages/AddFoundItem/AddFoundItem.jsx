import "./AddFoundItem.css";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function AddFoundItem() {
    const [formData, setFormData] = useState({
  itemName: "",
  category: "",
  locationFound: "",
  dateFound: "",
  description: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/found-items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Found item added successfully!");

      setFormData({
        itemName: "",
        category: "",
        locationFound: "",
        dateFound: "",
        description: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

    return (

        <div className="add-item-page">

            <div className="add-item-card">

                <Link
                    to="/admin-dashboard"
                    className="back-link"
                >
                    <ArrowLeft size={18}/>
                    Back to Dashboard
                </Link>

                <h1>Add Found Item</h1>

                <p>
                    Enter the details of the item received at the Campus Admin Office.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="itemName"
                        placeholder="Item Name"
                        value={formData.itemName}
                        onChange={handleChange}
                    />

                

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        >

                        <option>Category</option>

                        <option>Bag</option>

                        <option>Electronics</option>

                        <option>Keys</option>

                        <option>ID Card</option>

                        <option>Wallet</option>

                        <option>Others</option>

                    </select>

                    <input
                        type="text"
                        name="locationFound"
                        placeholder="Found Location"
                        value={formData.locationFound}
                        onChange={handleChange}
                    />

                    <input
                    type="date"
                    name="dateFound"
                    value={formData.dateFound}
                    onChange={handleChange}
                    />

                    <textarea
                        rows="5"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        ></textarea>

                    <input
                        type="file"
                    />

                    <button
                        type="submit"
                    >
                        Add Found Item
                    </button>

                </form>

            </div>

        </div>

    );

}

export default AddFoundItem;