import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import ProductCard from "../product-card";
import "./style.css";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);

  function renderCartItems() {
    return items.map((item) => (
      <ProductCard key={item.id} product={item} type="cart" />
    ));
  }

  const totalAmount = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <Navbar type="cart" />
      <div className="cart_container">
        {items.length <= 0 && <h1>Cart is Empty..</h1>}
        <div className="cart_items">{renderCartItems()}</div>
        {items.length > 0 && (
          <div className="cart_bill">
            <p>
              <span>Name: </span> <span>Avadh</span>
            </p>
            <p>
              <span>Address: </span> <span>Ahmedabad</span>
            </p>
            <p>
              <span>Email: </span> <span>example@gmail.com</span>
            </p>
            <p>
              <span>Total Amount: </span>
            </p>
            <span>{totalAmount}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
