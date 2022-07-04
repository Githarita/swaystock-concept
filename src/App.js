import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accountpage from "./Pages/Accountpage/Accountpage";
import BuyingInfopage from "./Pages/BuyingInfopage/BuyingInfopage";
import Categories from "./Pages/Categories/Categories";
import Categoryproducts from "./Pages/Categoryproducts/Categoryproducts";
import Homepage from "./Pages/Homepage/Homepage";
import Settingspage from "./Pages/Settingspage/Settingspage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Categoryproducts />} />
        <Route path="/account" element={<Accountpage />} />
        <Route path="/account/settings" element={<Settingspage />} />
        <Route path="/account/settings/buying_info" element={<BuyingInfopage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
