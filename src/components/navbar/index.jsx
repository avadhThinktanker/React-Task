import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";

const Navbar = ({ type }) => {
  const totalItems = useSelector((state) => state.cart.items.length);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo-link">
          <div className="logo-container">
            <img
              width={40}
              height={40}
              src="https://redux-toolkit.js.org/img/redux.svg"
              alt="redux_logo"
              className="logo-image"
            />
            <span className="logo-text">Ecommerce</span>
          </div>
        </NavLink>
        {type !== "cart" && (
          <Link to="/cart" className="logo-link">
            <button className="cart-button">
              <div id="nav-cart-count-container">
                <span id="nav-cart-count" className="nav-cart-count">
                  {totalItems}
                </span>
                <svg
                  className="cart-icon"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="nav-cart-icon nav-sprite"></span>
              </div>
              <span>Cart</span>
            </button>
          </Link>
        )}
        {type == "cart" && (
          <Link to="/" className="logo-link">
            <button className="cart-button">
              <span>Home</span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
