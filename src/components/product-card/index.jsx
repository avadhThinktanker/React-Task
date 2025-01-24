import React from "react";
import "./style.css";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProductCard = ({ product, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const select = useSelector((state) =>
    state.cart.items.find((item) => item.id == product.id)
  );
  function handleClick() {
    dispatch(addToCart(product));
    navigate("/cart");
  }

  function increCount() {
    dispatch(incrementQuantity(product));
  }

  function decreaseCount() {
    dispatch(decrementQuantity(product.id));
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {product.discount && (
          <div className="discount-badge">-{product.discount}%</div>
        )}
      </div>
      <div className="product-content content-spacing">
        <div>
          <h3 className="product-title">{product.title}</h3>
          {type !== "cart" && (
            <p className="product-description">{product.description}</p>
          )}
        </div>
        <div className="price-container">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        <div className="ratings-container">
          <div className="stars-container">
            <span className="ratings-average">
              {product?.ratings?.average}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 2L15 8h6l-5 4 2 6-5-3-5 3 2-6-5-4h6L12 2z"
                  fill="yellow"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
          </div>
          {type == "cart" && (
            <span className="ratings-count">
              ({product.ratings.count} Reviews)
            </span>
          )}
        </div>
        <div className="product-couter-container">
          <button onClick={decreaseCount} className="product-count">
            -
          </button>
          <span>{select?.quantity || 0} </span>
          <button onClick={increCount} className="product-count">
            +
          </button>
        </div>
        <div className="content-spacing">
          <p
            className={`stock-status ${
              product.stock ? "in-stock" : "out-of-stock"
            }`}
          >
            {product.stock ? "In Stock" : "Out of Stock"}
          </p>
          {type !== "cart" && (
            <button
              onClick={handleClick}
              className="add-to-cart-button"
              disabled={!product.stock}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
