import React, { useState } from "react";
import styles from "./ProductModal.module.scss";
import Rate from "../Rate/Rate";
import Button from "../Button/Button";
import { useModalContext } from "../../hooks/ModalContext";
import { useCartContext } from "../../hooks/CartContext";
function ProductModal() {
  const minQuantity = 1;
  const maxQuantity = 100;
  const { isProduct, isModalOpen, closeModal } = useModalContext();
  const { setCartCount } = useCartContext();
  const [addInfoActive, setAddInfoActive] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const handleInputChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= minQuantity && newQuantity <= maxQuantity) {
      setInputValue(newQuantity);
    }
  };
  const handleButtonClick = () => {
    const data = JSON.parse(localStorage.getItem("cart")) || {};
    const productId = isProduct.productId;
    const quantity = inputValue;
    if (data[productId]) {
      data[productId] += Number(quantity);
    } else {
      data[productId] = Number(quantity);
    }
    localStorage.setItem("cart", JSON.stringify(data));
    setCartCount(Object.keys(data).length);
    setInputValue(1);
  };
  const el = document.querySelector(`.${styles.productModal}`);
  if (el) {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      el.style.display = "flex";
      setTimeout(() => {
        el.style.opacity = "1";
      }, 200);
    } else {
      document.body.style.overflow = "unset";
      el.style.opacity = "0";
      setTimeout(() => {
        el.style.display = "none";
      }, 200);
    }
  }
  if (isProduct) {
    const priceNew = () => {
      if (isProduct.productPriceNew) {
        return (
          <>
            <div className={styles.productModal__productPrice_old}>
              ${isProduct.productPrice.toFixed(2)}
            </div>
            <div className={styles.productModal__productPrice_new}>
              ${isProduct.productPriceNew.toFixed(2)}
            </div>
          </>
        );
      } else {
        return (
          <div className={styles.productModal__productPrice_new}>
            ${isProduct.productPrice.toFixed(2)}
          </div>
        );
      }
    };
    return (
      <div className={styles.productModal} onClick={closeModal}>
        <div
          className={styles.productModal__wrapper}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.productModal__inner}>
            <button
              onClick={() => {
                closeModal();
                setInputValue(1);
              }}
              className={styles.productModal__closeBtn}
            >
              x
            </button>
            <div className={styles.productModal__info}>
              <div className={styles.productModal__image}>
                <div className={styles.productModal__category}>
                  {isProduct.productCategory}
                </div>
                <img
                  src={`./img/Products/${isProduct.productId}.png`}
                  alt={`${isProduct.productName}`}
                />
              </div>
              <div className={styles.productModal__mainInfo}>
                <div className={styles.productModal__productName}>
                  {isProduct.productName}
                </div>
                <Rate size="1.14rem" rate={isProduct.productRate} />
                <div className={styles.productModal__productPrice}>
                  {priceNew()}
                </div>
                <div className={styles.productModal__text}>
                  {isProduct.productShortDescr}
                </div>
                <div className={styles.productModal__addToCart}>
                  <label htmlFor="quantity">Quantity: </label>
                  <input
                    name="quantity"
                    type="number"
                    onChange={handleInputChange}
                    value={inputValue}
                    min={minQuantity}
                    max={maxQuantity}
                  />
                  <Button text="Add To Cart" onClick={handleButtonClick} />
                </div>
              </div>
            </div>
            <div className={styles.productModal__description}>
              <div className={styles.productModal__descriptionBtns}>
                <button
                  onClick={() => setAddInfoActive(false)}
                  className={
                    addInfoActive
                      ? styles.productModal__descriptionBtn
                      : `${styles.productModal__descriptionBtn} ${styles["productModal__descriptionBtn--active"]}`
                  }
                >
                  Product Description
                </button>
                <button
                  onClick={() => setAddInfoActive(true)}
                  className={
                    addInfoActive
                      ? `${styles.productModal__descriptionBtn} ${styles["productModal__descriptionBtn--active"]}`
                      : styles.productModal__descriptionBtn
                  }
                >
                  Additional Info
                </button>
              </div>
              <div
                className={
                  addInfoActive
                    ? styles.productModal__descriptionText
                    : `${styles.productModal__descriptionText} ${styles["productModal__descriptionText--active"]}`
                }
              >
                {isProduct.productDescr}
              </div>
              <div
                className={
                  addInfoActive
                    ? `${styles.productModal__descriptionText} ${styles["productModal__descriptionText--active"]}`
                    : styles.productModal__descriptionText
                }
              >
                {isProduct.productAdInfo}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className={styles.productModal} onClick={closeModal}></div>;
  }
}

export default ProductModal;
