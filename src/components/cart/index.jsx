import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import ProductCard from "../product-card";
import "./style.css";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const ref = useRef(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [error, setError] = useState("");

  function renderCartItems() {
    return items.map((item) => (
      <ProductCard key={item.id} product={item} type="cart" />
    ));
  }

  const totalAmount = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCoupon = () => {
    const couponCode = ref?.current?.value;
    console.log(couponCode);
    if (!couponCode) {
      setError("");
      return;
    }
    switch (couponCode) {
      case "avadh123":
        if (totalAmount > 1000) {
          setDiscountAmount((totalAmount * 0.9).toFixed(2));
        } else {
          setDiscountAmount((totalAmount - 100).toFixed(2));
        }
        break;
      case "1333":
        if (totalAmount > 1500) {
          setDiscountAmount((totalAmount * 0.85).toFixed(2));
        } else {
          setDiscountAmount((totalAmount - 250).toFixed(2));
        }
        setError("");
        break;
      case "1222":
        if (totalAmount > 2500) {
          setDiscountAmount((totalAmount * 0.75).toFixed(2));
        } else {
          setDiscountAmount((totalAmount - 500).toFixed(2));
        }
        setError("");
        break;
      default:
        setError("Invalid Coupon Code");
        setDiscountAmount(totalAmount);
    }
  };
  useEffect(() => handleCoupon(), [totalAmount]);

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

            <div>
              <input type="text" ref={ref} placeholder="Enter coupon code" />
              <button onClick={handleCoupon}>Submit</button>
            </div>

            {error && <p className="error">{error}</p>}

            {discountAmount > 0 && (
              <div>
                <p>
                  <span>Total after Discount: </span>
                  <span>{discountAmount}</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(CartPage);
