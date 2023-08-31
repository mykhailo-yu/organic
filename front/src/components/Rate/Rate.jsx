import styles from "./Rate.module.scss";

function Rate(props) {
  let rate = props.rate;
  if (rate < 0) rate = 0;
  else if (rate > 5) rate = 5;
  let stars = Array(5).fill("./img/Rate/star--unfilled.svg");
  for (let i = 0; i < rate; i++) {
    stars[i] = "./img/Rate/star--filled.svg";
  }
  return (
    <div className={styles.rate}>
      <div className={styles.rate__star} style={{ width: props.size }}>
        <img src={stars[0]} alt="Star" />
      </div>
      <div className={styles.rate__star} style={{ width: props.size }}>
        <img src={stars[1]} alt="Star" />
      </div>
      <div className={styles.rate__star} style={{ width: props.size }}>
        <img src={stars[2]} alt="Star" />
      </div>
      <div className={styles.rate__star} style={{ width: props.size }}>
        <img src={stars[3]} alt="Star" />
      </div>
      <div className={styles.rate__star} style={{ width: props.size }}>
        <img src={stars[4]} alt="Star" />
      </div>
    </div>
  );
}

export default Rate;
