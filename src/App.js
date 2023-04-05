import logo from './logo.svg';
import './App.css';
import { Product } from './Products/Product';
import { ProductDetails } from './Products/ProductDetails';
import { Routes, Route, NavLink } from "react-router-dom";
import { Cart } from './Products/Cart';
import { Order } from './Products/Order';
function App() {
  return (
    <div className="App">
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/order">Order</NavLink>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
