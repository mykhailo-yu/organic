import "./Subscribe.scss";
import Button from "../Button/Button";
function Subscribe() {
  return (
    <div className="subscribe">
      <h2 className="subscribe__title">Subscribe to our Newsletter</h2>
      <form action="" className="subscribe__form">
        <input
          type="email"
          className="subscribe__form-input"
          placeholder="Your Email Address"
        />
        <Button text={"Subscribe"} />
      </form>
    </div>
  );
}
export default Subscribe;
