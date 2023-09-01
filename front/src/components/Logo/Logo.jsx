import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <div className={styles.logo__image}>
        <img src="img/Logo/logo.svg" alt="Logo" />
      </div>
      <div className={styles.logo__text}>Organick</div>
    </Link>
  );
}
export default Logo;
