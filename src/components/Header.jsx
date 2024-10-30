import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);  // Toggle between true and false
  };

  const toggleSearch = () => {
    setSearch(!search);  // Toggle between true and false
  };

  return (
    <>
      <div className="header">

        <div className="logo">
          <Link to="/"><img src={logo} alt="Ecommerce" /></Link>
        </div>

        <div className={`search ${search ? 'active' : ''}`}>
          <input type="text" name="search" id="search" placeholder="Search for products" />
          <button><i className="fi fi-rr-search"></i></button>
        </div>

        <div className="right-nav">
          <a href="#"><i className="fi fi-rr-user"></i></a>
          <a href="#"><i className="fi fi-rr-heart"></i></a>
          <Link to="/cart"><i className="fi fi-rr-shopping-bag"></i></Link>
          <button onClick={toggleSearch} className="mobile-nav"><i className="fi fi-rr-search"></i></button>
          <button onClick={toggleMenu} className="mobile-nav"><i className="fi fi-rr-menu-burger"></i></button>
        </div>

      </div>

      <div className={`navbar ${menu ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/new-arrival">New Arrival</Link></li>
          <li><Link to="/cart">My List</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
