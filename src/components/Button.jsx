import styles from "../scss/components/Button.module.scss";
function Button(props) {
  return <button className={styles.button}>{props.text}</button>;
}
export default Button;
