import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { useCartContext } from "../../hooks/CartContext";
function Header() {
  const { cartCount, setCartCount } = useCartContext();
  const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
  useEffect(() => {
    setCartCount(Object.keys(storedCart).length);
  }, []);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
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
                <img src="/img/Header/header__search.svg" alt="Search" />
              </button>
            </div>
            <NavLink to="/cart" className="header__cart">
              <div className="header__cart-icon">
                <img src="/img/Header/header__cart.svg" alt="Cart" />
              </div>
              <div className="header__cart-text">
                Cart (<span className="header__cart-quantity">{cartCount}</span>
                )
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;