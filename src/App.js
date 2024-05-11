import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import PlaceOrder from "./components/PlaceOrder";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:id" element={<ProductItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
