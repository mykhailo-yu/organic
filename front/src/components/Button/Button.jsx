import React from "react";
import styles from "./Button.module.scss";
function Button(props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>{props.text}</span>
      <span className={styles.button__arrow}>
        <img src="/img/Button/button-arrow.svg" alt={props.text} />
      </span>
    </button>
  );
}
export default Button;
