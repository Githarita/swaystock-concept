import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
