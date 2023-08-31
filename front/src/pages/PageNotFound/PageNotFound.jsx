import React from "react";
import { Link } from "react-router-dom";

import styles from "./PageNotFound.module.scss";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function PageNotFound() {
  return (
    <>
      <Header />
      <div className={styles.pageNotFound}>
        <div className={styles.pageNotFound__image}>
          <img src="" alt="" />
        </div>
        <div className="container">
          <div className={styles.pageNotFound__main}>
            <div className={styles.pageNotFound__bigText}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="503"
                height="220"
                viewBox="0 0 503 220"
                fill="none"
              >
                <path
                  d="M156.358 134.766V170.215H2.84277L0.352539 142.383L87.6572 2.92969H123.839L84.5811 67.9688L44.8838 134.766H156.358ZM133.507 2.92969V216.211H87.8037V2.92969H133.507Z"
                  fill="#8FA8A8"
                />
                <path
                  d="M324.669 90.5273V128.467C324.669 144.092 322.911 157.617 319.396 169.043C315.978 180.469 310.997 189.893 304.454 197.314C298.009 204.736 290.294 210.254 281.31 213.867C272.423 217.383 262.56 219.141 251.72 219.141C243.028 219.141 234.923 218.018 227.403 215.771C219.884 213.525 213.097 210.059 207.042 205.371C201.085 200.586 195.958 194.629 191.661 187.5C187.364 180.371 184.044 171.875 181.7 162.012C179.454 152.148 178.331 140.967 178.331 128.467V90.5273C178.331 74.707 180.04 61.1328 183.458 49.8047C186.974 38.4766 192.003 29.1016 198.546 21.6797C205.089 14.2578 212.804 8.78906 221.69 5.27344C230.675 1.75781 240.587 0 251.427 0C260.118 0 268.175 1.12305 275.597 3.36914C283.116 5.61523 289.903 9.08203 295.958 13.7695C302.013 18.457 307.14 24.3652 311.339 31.4941C315.636 38.623 318.907 47.1191 321.153 56.9824C323.497 66.748 324.669 77.9297 324.669 90.5273ZM278.966 134.18V84.5215C278.966 77.1973 278.526 70.8496 277.647 65.4785C276.866 60.0098 275.694 55.3711 274.132 51.5625C272.667 47.7539 270.812 44.6777 268.565 42.334C266.319 39.9902 263.731 38.2812 260.802 37.207C257.97 36.0352 254.845 35.4492 251.427 35.4492C247.13 35.4492 243.272 36.3281 239.854 38.0859C236.437 39.8438 233.556 42.627 231.212 46.4355C228.868 50.1465 227.062 55.1758 225.792 61.5234C224.62 67.7734 224.034 75.4395 224.034 84.5215V134.18C224.034 141.504 224.425 147.9 225.206 153.369C226.085 158.838 227.257 163.525 228.722 167.432C230.284 171.24 232.188 174.365 234.435 176.807C236.681 179.15 239.269 180.859 242.198 181.934C245.128 183.008 248.302 183.545 251.72 183.545C256.017 183.545 259.825 182.715 263.146 181.055C266.466 179.297 269.298 176.514 271.642 172.705C274.083 168.799 275.89 163.672 277.062 157.324C278.331 150.977 278.966 143.262 278.966 134.18Z"
                  fill="#8FA8A8"
                />
                <path
                  d="M502.647 134.766V170.215H349.132L346.642 142.383L433.946 2.92969H470.128L430.87 67.9688L391.173 134.766H502.647ZM479.796 2.92969V216.211H434.093V2.92969H479.796Z"
                  fill="#8FA8A8"
                />
              </svg>
            </div>
            <div className={styles.pageNotFound__title}>Page not found</div>
            <div className={styles.pageNotFound__text}>
              The page you are looking for doesn't exist or has been moved
            </div>
            <Link to="/">
              <Button text="Go to homepage" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default PageNotFound;