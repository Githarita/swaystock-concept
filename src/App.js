import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accountpage from "./Pages/Accountpage/Accountpage";
import Categories from "./Pages/Categories/Categories";
import Categoryproducts from "./Pages/Categoryproducts/Categoryproducts";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Categoryproducts />} />
        <Route path="/account" element={<Accountpage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
