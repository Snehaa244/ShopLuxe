import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import Cart from './modules/Cart';
import { Categories } from './Components/Categories';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<Categories />} />
        {/* Corrected path for Cart */}
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}
