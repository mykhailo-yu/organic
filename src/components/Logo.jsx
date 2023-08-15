import styles from "../scss/components/Logo.module.scss";
function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__image}>
        <img src="/img/Logo/logo.svg" alt="Logo" />
      </div>
      <div className={styles.logo__text}>Organick</div>
    </div>
  );
}
export default Logo;
