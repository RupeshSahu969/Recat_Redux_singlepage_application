import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import { Product } from '../Products/Product';
import { ProductDetails } from '../Products/ProductDetails';
import { Cart } from '../Products/Cart';
import { Order } from '../Products/Order';
import Nav from './Nav';
const AllRoute = () => {
  return (
    <div>
        <Nav/>
       <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default AllRoute
