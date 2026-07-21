import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ReportLost from "./pages/ReportLost/ReportLost";
import FoundItems from "./pages/FoundItems/FoundItems";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import LostItems from "./pages/LostItems/LostItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/found-items" element={<FoundItems />} />
        <Route path="/found-items/:id" element={<ItemDetails />}/>
        <Route path="/lost-items" element={<LostItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;