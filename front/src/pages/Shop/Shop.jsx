import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";
function Shop() {
  return (
    <>
      <Header />
      <div
        className="banner"
        style={{ backgroundImage: `url(./img/Cart/Cart__banner.png)` }}
      >
        Shop
      </div>
      <div className="container">
        <Products />
      </div>
      <Footer subscribe={true} />
    </>
  );
}
export default Shop;
