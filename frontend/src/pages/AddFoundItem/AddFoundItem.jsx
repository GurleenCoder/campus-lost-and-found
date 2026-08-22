
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./AddFoundItem.css";

function AddFoundItem() {
    const [formData, setFormData] = useState({
  itemName: "",
  category: "",
  locationFound: "",
  dateFound: "",
  description: "",
});

const [image, setImage] = useState(null);

const handleChange = (e) => {
  // const { name, value } = e.target;

  setFormData({
    ...formData,
    // [name]: value,
    [e.target.name]: e.target.value,
  });
};

const handleImageChange = (e) => {
  setImage(e.target.files[0]);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("itemName", formData.itemName);
  data.append("category", formData.category);
  data.append("locationFound", formData.locationFound);
  data.append("dateFound", formData.dateFound);
  data.append("description", formData.description);

  if (image) {
    data.append("image", image);
  }

  try {

    const response = await fetch(
  "http://localhost:5000/api/found-items",
  {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("adminToken"),
    },
    body: data,
  }
);

    const result = await response.json();

    if (result.success) {

      alert("Found item added successfully!");

      setFormData({
        itemName: "",
        category: "",
        locationFound: "",
        dateFound: "",
        description: "",
      });

      setImage(null);

    } else {

      alert(result.message);

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

                        <option value="">Select Category</option>

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
  onChange={handleImageChange}
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