import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Products.module.scss";
import Card from "./Card/Card";
import Button from "../Button/Button";

function Products(props) {
  let productsQuantity = props.quantity;
  const [isMoreProducts, setIsMoreProducts] = useState(false);
  const [isClick, setIsClick] = useState(0);
  const [btnText, setbtnText] = useState("Load More");
  const handleClick = () => {
    setIsClick(isClick + 1);
    setIsMoreProducts(true);
    setbtnText("Hide All");
    if (isClick > 0) {
      setIsMoreProducts(false);
      setIsClick(0);
      setbtnText("Load More");
    }
  };
  const [products, setProduct] = useState([]);
  const filters = {
    discount: "1",
    category: "",
  };
  if (props.discount) filters.discount = props.discount;
  if (props.category) filters.category = props.category;
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products", {
          params: filters,
        });
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);
  if (isMoreProducts) productsQuantity = products.length;
  const productsSlice = products.slice(0, productsQuantity);
  const btn = () => {
    if (props.isButton) {
      return <Button text={btnText} onClick={handleClick} />;
    }
  };
  return (
    <div className={styles.products}>
      <div className={styles.products__wrapper}>
        {productsSlice.map((product) => (
          <Card
            key={product.productId}
            name={product.productName}
            category={product.productCategory}
            rate={product.productRate}
            price={product.productPrice}
            priceNew={product.productPriceNew}
            img={product.productId}
            obj={product}
          />
        ))}
      </div>
      {btn()}
    </div>
  );
}
export default Products;
