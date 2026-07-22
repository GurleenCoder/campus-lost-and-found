import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ReportLost from "./pages/ReportLost/ReportLost";
import FoundItems from "./pages/FoundItems/FoundItems";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import LostItems from "./pages/LostItems/LostItems";
import LostItemDetails from "./pages/LostItemDetails/LostItemDetails";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AddFoundItem from "./pages/AddFoundItem/AddFoundItem";
import ClaimedItems from "./pages/ClaimedItems/ClaimedItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/found-items" element={<FoundItems />} />
        <Route path="/found-items/:id" element={<ItemDetails />}/>
        <Route path="/lost-items" element={<LostItems />} />
        <Route path="/lost-items/:id" element={<LostItemDetails />}/>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route path="/admin/add-found-item" element={<AddFoundItem />}/>
        <Route path="/claimed-items" element={<ClaimedItems />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;