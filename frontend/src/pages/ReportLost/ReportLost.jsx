import { useState } from "react";
import "./ReportLost.css";

import {
  Package,
  FolderOpen,
  CalendarDays,
  MapPin,
  FileText,
  ImagePlus,
} from "lucide-react";

function ReportLost() {
  const [formData, setFormData] = useState({
  itemName: "",
  category: "",
  dateLost: "",
  locationLost: "",
  description: "",
  image: null,
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
    const response = await fetch("http://localhost:5000/api/lost-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Lost item reported successfully!");

      setFormData({
        itemName: "",
        category: "",
        dateLost: "",
        locationLost: "",
        description: "",
        image: null,
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
    <section className="report-lost">

      <div className="report-container">

        <div className="report-header">
          <h1>Report a Lost Item</h1>

          <p>
            Help us identify and recover your belongings by providing the
            details below.
          </p>
        </div>

        <form className="report-form" onSubmit={handleSubmit}>

          <div className="input-group">
            <label>
              <Package size={18} />
              Item Name
            </label>

            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              placeholder="Enter item name"
            />
          </div>

          <div className="input-group">
            <label>
              <FolderOpen size={18} />
              Category
            </label>

            <select
            name="category"
            value={formData.category}
            onChange={handleChange}
>
              <option value="">Select Category</option>
              <option>Bag</option>
              <option>Electronics</option>
              <option>ID Card</option>
              <option>Keys</option>
              <option>Books</option>
              <option>Wallet</option>
              <option>Water Bottle</option>
              <option>Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>
              <CalendarDays size={18} />
              Date Lost
            </label>

           <input
          type="date"
          name="dateLost"
          value={formData.dateLost}
          onChange={handleChange}
        />
          </div>

          <div className="input-group">
            <label>
              <MapPin size={18} />
              Location Lost
            </label>

            <input
            type="text"
            name="locationLost"
            value={formData.locationLost}
            onChange={handleChange}
            placeholder="Where did you lose it?"
          />
          </div>

          <div className="input-group full-width">
            <label>
              <FileText size={18} />
              Description
            </label>

            <textarea
            row="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide additional details..."
            ></textarea>
          </div>

          <div className="input-group full-width">
            <label>
              <ImagePlus size={18} />
              Upload Item Image
            </label>

            <div className="upload-box">
              <ImagePlus size={45} />

              <p>Click to upload an image</p>

              <span>PNG, JPG or JPEG</span>

              <input type="file" />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Report
          </button>

        </form>

      </div>

    </section>
  );
}

export default ReportLost;