import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import Subscribe from "../Subscribe/Subscribe";
import Logo from "../Logo/Logo";
function Footer(props) {
  const isSubscribe = () => {
    if (props.subscribe) {
      return <Subscribe />;
    }
  };
  return (
    <footer className="footer">
      <div className="container">
        {isSubscribe()}
        <div className="footer__inner">
          <div className="footer__contact-us">
            <div className="footer__title">Contact Us</div>
            <dl className="footer__contact-us-list">
              <dt className="footer__contact-us-list-title">Email</dt>
              <dd>
                <a href="mailto:needhelp@Organia.com" className="footer__link">
                  needhelp@Organia.com
                </a>
              </dd>
              <dt className="footer__contact-us-list-title">Phone</dt>
              <dd>
                <a href="tel:666 888 888" className="footer__link">
                  666 888 888
                </a>
              </dd>
              <dt className="footer__contact-us-list-title">Address</dt>
              <dd>
                <a
                  href="https://goo.gl/maps/WxqamP5PTTDY8eVC6"
                  target="_blank"
                  className="footer__link"
                  rel="noopener noreferrer"
                >
                  88 Road, Brooklyn Street, USA
                </a>
              </dd>
            </dl>
          </div>
          <div className="footer__main">
            <Logo />
            <div className="footer__text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </div>
            <div className="footer__social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
                rel="noopener noreferrer"
              >
                <img src="img/Footer/Instagram.svg" alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
                rel="noopener noreferrer"
              >
                <img src="img/Footer/Facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
                rel="noopener noreferrer"
              >
                <img src="img/Footer/Twitter.svg" alt="Twitter" />
              </a>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                className="footer__social-link"
                rel="noopener noreferrer"
              >
                <img src="img/Footer/Pinterest.svg" alt="Pinterest" />
              </a>
            </div>
          </div>
          <div className="footer__utility-pages">
            <div className="footer__title">Utility Pages</div>
            <ul className="footer__links">
              <li>
                <NavLink to="/orders" className="footer__link">
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/404" className="footer__link">
                  404 Not Found
                </NavLink>
              </li>
              <li>
                <NavLink to="/404" className="footer__link">
                  Password Protected
                </NavLink>
              </li>
              <li>
                <NavLink to="/404" className="footer__link">
                  Licences
                </NavLink>
              </li>
              <li>
                <NavLink to="/404" className="footer__link">
                  Changelog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer__line" />
      <div className="container">
        <div className="footer__rights">
          Copyright ©
          <a href="/home" className="footer__rights-link">
            {" "}
            Organick
          </a>
          | Designed by
          <a href="/home" className="footer__rights-link">
            {" "}
            VictorFlow{" "}
          </a>
          Templates - Powered by
          <a href="/home" className="footer__rights-link">
            {" "}
            Webflow{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
