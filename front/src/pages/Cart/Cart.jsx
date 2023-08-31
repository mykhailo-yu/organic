import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import { useCartContext } from "../../hooks/CartContext";

import "./Cart.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Order(props) {
  return (
    <>
      <form
        action="http://localhost:8000/send"
        method="post"
        className="orderForm"
      >
        <div className="orderForm__inputs">
          <label htmlFor="name">
            <div className="orderForm__input-label-text">Full Name*</div>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
            />
          </label>
          <label htmlFor="email">
            <div className="orderForm__input-label-text">Your Email*</div>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
            />
          </label>
          <label htmlFor="adress">
            <div className="orderForm__input-label-text">Address*</div>
            <input
              name="adress"
              type="text"
              required
              placeholder="Enter your adress"
            />
          </label>
          <label htmlFor="tel">
            <div className="orderForm__input-label-text">Phone number*</div>
            <input
              name="tel"
              id="tel"
              type="tel"
              required
              placeholder="Enter your full phone number: (+380123456789)"
              pattern="[+][0-9]{0,12}"
            />
          </label>
          <label htmlFor="comment" className="comment">
            <div className="orderForm__input-label-text">Message</div>
            <textarea name="comment" type="text" placeholder="Comment" />
          </label>
          <input
            name="products"
            type="hidden"
            value={JSON.stringify(props.order)}
            required
          />
          <input name="price" type="hidden" value={props.price} required />
          <input
            name="discount"
            type="hidden"
            value={props.discount}
            required
          />
          <input
            name="quantity"
            type="hidden"
            value={JSON.stringify(props.quantity)}
            required
          />
        </div>
        <Button text={"Confirm"} onClick={props.onClick} />
      </form>
    </>
  );
}
function CartItem({
  id,
  name,
  price,
  priceNew,
  onInputChange,
  onRemove,
  defaultQuantity,
}) {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const minQuantity = 1;
  const maxQuantity = 100;
  const handleInputChange = (event, id) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= minQuantity && newQuantity <= maxQuantity) {
      onInputChange(Number(event.target.value), id);
      setQuantity(newQuantity);
    }
  };
  const isPriceNew = () => {
    if (priceNew) {
      return (
        <>
          <div className="cart-item__price_old">${price.toFixed(2)}</div>
          <div className="cart-item__price_new">${priceNew.toFixed(2)}</div>
        </>
      );
    } else {
      return <div className="cart-item__price_new">${price.toFixed(2)}</div>;
    }
  };
  return (
    <div className="cart-item" key={id}>
      <div className="cart-item__info">
        <div className="cart-item__image">
          <img src={`./img/Products/${id}.png`} alt={name} />
        </div>
        <div className="cart-item__title">{name}</div>
        <div className="cart-item__price">{isPriceNew()}</div>
      </div>
      <div className="cart-item__addToCart">
        <label htmlFor="quantity">Quantity: </label>
        <input
          name="quantity"
          type="number"
          min={minQuantity}
          max={maxQuantity}
          value={quantity}
          onChange={(event) => {
            handleInputChange(event, id);
          }}
        />
        <button className="cart-item__removeBtn" onClick={() => onRemove(id)}>
          x
        </button>
      </div>
    </div>
  );
}
function Cart() {
  const { setCartCount } = useCartContext();
  const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
  useEffect(() => {
    setCartCount(Object.keys(storedCart).length);
  }, [setCartCount, storedCart]);
  const [cart, setCart] = useState(storedCart);
  const [products, setProduct] = useState([]);
  const [isToOrderBtn, setIsToOrderBtn] = useState(false);
  const handleIsToOrderClick = () => setIsToOrderBtn(true);
  const handleRemoveProduct = (productId) => {
    const updatedCart = Object.fromEntries(
      Object.entries(cart).filter(([key]) => !key.includes(productId))
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    setCartCount(Object.keys(updatedCart).length);
  };
  const handleInputChange = (value, productId) => {
    storedCart[productId] = Number(value);
    localStorage.setItem("cart", JSON.stringify(storedCart));
    setCart(storedCart);
  };

  useEffect(() => {
    const neededProducts = Object.keys(cart);
    const filters = {
      id: neededProducts,
    };
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
    if (Object.keys(cart).length) {
      fetchAllProducts();
    } else setProduct([]);
  }, [cart]);
  // Функція для повідомлення про відсутність товарів у корзині
  const isEmptyCart = () => {
    if (!products.length) {
      return <div className="cart--empty">There are no orders yet</div>;
    }
  };
  // Функція для обчислення загальної вартості та знижки
  const totalPrice = () => {
    const discount = products
      .reduce((acc, product) => {
        if (product.productPriceNew) {
          acc +=
            (product.productPrice - product.productPriceNew) *
            cart[product.productId];
        }
        return acc;
      }, 0)
      .toFixed(2);
    const price = products
      .reduce((acc, product) => {
        return acc + product.productPrice * cart[product.productId];
      }, 0)
      .toFixed(2);
    const total = (price - discount).toFixed(2);
    return [total, discount];
  };
  //
  const clearCart = () => {
    localStorage.removeItem("cart");
  };
  const toOrder = (products) => {
    const price = totalPrice()[0];
    const discount = totalPrice()[1];
    if (isToOrderBtn)
      return (
        <Order
          order={products}
          quantity={cart}
          price={price}
          discount={discount}
          onClick={clearCart}
        />
      );
    else return <Button text="To Order" onClick={handleIsToOrderClick} />;
  };
  return (
    <>
      <Header />
      <div
        className="banner"
        style={{ backgroundImage: `url(./img/Cart/Cart__banner.png)` }}
      >
        Cart
      </div>
      <div className="cart__wrapper">
        <div className="container">
          <div className="cart__inner">
            {isEmptyCart()}
            {products.map((product) => (
              <CartItem
                key={product.productId}
                id={product.productId}
                name={product.productName}
                price={product.productPrice}
                priceNew={product.productPriceNew}
                onInputChange={handleInputChange}
                onRemove={handleRemoveProduct}
                defaultQuantity={cart[product.productId]}
              />
            ))}
            <div className="cart__total">
              <div className="cart__total-cost">
                <span>Total Cost </span> <span>{totalPrice()[0]}$</span>
              </div>
              <div className="cart__total-discount">
                <span>Discount</span> <span>{totalPrice()[1]}$</span>
              </div>
            </div>
            {toOrder(products)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Cart;
