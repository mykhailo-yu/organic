import React from "react";
import "./Categories.scss";
import Products from "../../../components/Products/Products";

function Categories(props) {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__subtitle">Categories</div>
        <div className="categories__title">Our Products</div>
        <Products quantity={8} isButton={true} />
      </div>
    </section>
  );
}
export default Categories;
