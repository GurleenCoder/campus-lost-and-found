import "./AddFoundItem.css";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function AddFoundItem() {

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

                <form>

                    <input
                        type="text"
                        placeholder="Item Name"
                    />

                    <select>

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
                        placeholder="Found Location"
                    />

                    <input
                        type="date"
                    />

                    <textarea
                        rows="5"
                        placeholder="Description"
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