import React from "react";
import ProductCard from "../product-card";
import { products } from "../../data/products.js";
import "./style.css";

const ProductList = () => {
  function renderPostCard() {
    return products.map((product) => (
      <div className="product" key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div className="product_container">
      {products && products.length > 0 && renderPostCard()}
    </div>
  );
};

export default ProductList;
