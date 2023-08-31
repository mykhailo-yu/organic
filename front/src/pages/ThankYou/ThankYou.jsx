import React from "react";
import styles from "./ThankYou.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function ThankYou() {
  return (
    <>
      <Header />
      <div className={styles.thankYou}>
        <div className={styles.thankYou__title}>Thank you for your order</div>
        <div className={styles.thankYou__image}>
          <img
            src="/img/ThankYou/thankYou__bg.png"
            alt="Thank you for your order"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ThankYou;
