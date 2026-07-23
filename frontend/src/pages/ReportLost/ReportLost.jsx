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

        <form className="report-form">

          <div className="input-group">
            <label>
              <Package size={18} />
              Item Name
            </label>

            <input
              type="text"
              placeholder="Enter item name"
            />
          </div>

          <div className="input-group">
            <label>
              <FolderOpen size={18} />
              Category
            </label>

            <select>
              <option>Select Category</option>
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

            <input type="date" />
          </div>

          <div className="input-group">
            <label>
              <MapPin size={18} />
              Location Lost
            </label>

            <input
              type="text"
              placeholder="Where did you lose it?"
            />
          </div>

          <div className="input-group full-width">
            <label>
              <FileText size={18} />
              Description
            </label>

            <textarea
              rows="5"
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

          <button className="submit-btn">
            Submit Report
          </button>

        </form>

      </div>

    </section>
  );
}

export default ReportLost;