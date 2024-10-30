import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Assuming you have a Home page component
import Cart from './pages/Cart'; // Assuming you have a Cart page component

import './assets/css/main.css';
import './assets/css/mobile.css';
import Products from './pages/Products';
import Shop from './pages/Shop';
import NewArrival from './pages/NewArrival';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route path="/products/:id" element={<Products />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
