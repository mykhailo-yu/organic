import React from "react";
import styles from "./Card.module.scss";
import Rate from "../../Rate/Rate";
import { useModalContext } from "../../../hooks/ModalContext";
function Card(props) {
  const { openModal } = useModalContext();
  const priceNew = () => {
    if (props.priceNew) {
      return (
        <>
          <div className={styles.card__productPrice_old}>
            ${props.price.toFixed(2)}
          </div>
          <div className={styles.card__productPrice_new}>
            ${props.priceNew.toFixed(2)}
          </div>
        </>
      );
    } else {
      return (
        <div className={styles.card__productPrice_new}>
          ${props.price.toFixed(2)}
        </div>
      );
    }
  };
  return (
    <div className={styles.card} onClick={() => openModal(props.obj)}>
      <div className={styles.card__category}>{props.category}</div>
      <div className={styles.card__image}>
        <img src={`./img/Products/${props.img}.png`} alt={props.name} />
      </div>
      <div className={styles.card__productName}>{props.name}</div>
      <hr className={styles.card__line} />
      <div className={styles.card__productPriceAndRate}>
        <div className={styles.card__productPrice}>{priceNew()}</div>
        <Rate rate={props.rate} size={"0.8125rem"} />
      </div>
    </div>
  );
}
export default Card;
