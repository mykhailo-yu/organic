import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { useCartContext } from "../../hooks/CartContext";
function Header() {
  const { cartCount, setCartCount } = useCartContext();
  const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
  const [isMobNavClick, setIsMobNavClick] = useState(false);
  useEffect(() => {
    setCartCount(Object.keys(storedCart).length);
  }, []);
  const mobNav = document.querySelector(".mob-nav");
  if (mobNav) {
    if (isMobNavClick) {
      mobNav.parentElement.style.display = "block";
      setTimeout(() => {
        mobNav.parentElement.style.opacity = "1";
        mobNav.style.width = "45vw";
      }, 200);
    } else {
      mobNav.style.width = "0";
      mobNav.parentElement.style.opacity = "0";
      setTimeout(() => {
        mobNav.parentElement.style.display = "none";
      }, 300);
    }
  }
  return (
    <>
      <div
        className="mob-nav__wrapper"
        onClick={(event) => {
          let isClickInsideMenu = mobNav.contains(event.target);
          if (!isClickInsideMenu) {
            setIsMobNavClick(false);
          }
        }}
      >
        <div id="mob-nav" className="mob-nav">
          <button
            className="mob-nav__close-btn"
            onClick={() => setIsMobNavClick(false)}
          >
            ×
          </button>
          <div className="mob-nav__inner">
            <ul className="mob-nav__links">
              <li>
                <NavLink
                  className="mob-nav__link"
                  to="/home"
                  onClick={() => setIsMobNavClick(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mob-nav__link"
                  to="/404"
                  onClick={() => setIsMobNavClick(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mob-nav__link"
                  to="/404"
                  onClick={() => setIsMobNavClick(false)}
                >
                  Pages
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mob-nav__link"
                  to="/shop"
                  onClick={() => setIsMobNavClick(false)}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mob-nav__link"
                  to="/404"
                  onClick={() => setIsMobNavClick(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mob-nav__link"
                  to="/news"
                  onClick={() => setIsMobNavClick(false)}
                >
                  News
                </NavLink>
              </li>
            </ul>
            <div className="mob-nav__bottom">
              <div className="header__search">
                <input type="text" className="header__search-input" />
                <button
                  className="header__search-button"
                  onClick={() => setIsMobNavClick(false)}
                >
                  <img src="img/Header/header__search.svg" alt="Search" />
                </button>
              </div>
              <NavLink
                to="/cart"
                className="header__cart"
                onClick={() => setIsMobNavClick(false)}
              >
                <div className="header__cart-icon">
                  <img src="img/Header/header__cart.svg" alt="Cart" />
                </div>
                <div className="header__cart-text">
                  (<span className="header__cart-quantity">{cartCount}</span>)
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div
              className="header__menu-toggle"
              onClick={() => setIsMobNavClick(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-links">
                <li>
                  <NavLink to="/home" className="header__nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="header__nav-link">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pages"
                    className="header__nav-link header__nav-link--arrow"
                  >
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" className="header__nav-link">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="header__nav-link">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" className="header__nav-link">
                    News
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__right">
              <div className="header__search">
                <input type="text" className="header__search-input" />
                <button className="header__search-button">
                  <img src="img/Header/header__search.svg" alt="Search" />
                </button>
              </div>
              <NavLink to="/cart" className="header__cart">
                <div className="header__cart-icon">
                  <img src="img/Header/header__cart.svg" alt="Cart" />
                </div>
                <div className="header__cart-text">
                  <span className="header__cart-t">Cart</span> (
                  <span className="header__cart-quantity">{cartCount}</span>)
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
