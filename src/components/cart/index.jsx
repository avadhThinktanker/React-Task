import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product-card";
import "./style.css";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  console.log("🚀 ~ CartPage ~ items:", items[0]);
  if (items.length == 0) {
    return <h1>No item available</h1>;
  }
  return (
    <>
      <ProductCard product={items[0]} type="cart" />
    </>
  );
};

export default CartPage;
