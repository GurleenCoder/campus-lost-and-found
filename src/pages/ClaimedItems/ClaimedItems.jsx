import "./ClaimedItems.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { CheckCircle2 } from "lucide-react";

function ClaimedItems() {

    return (

        <>
            <Navbar />

            <section className="claimed-page">

                <div className="claimed-card">

                    <CheckCircle2
                        size={70}
                        className="claimed-icon"
                    />

                    <h1>Claimed Items</h1>

                    <p>
                        No items have been marked as claimed yet.
                    </p>

                    <span>
                        Once an item is successfully returned to its owner,
                        it will appear here.
                    </span>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default ClaimedItems;