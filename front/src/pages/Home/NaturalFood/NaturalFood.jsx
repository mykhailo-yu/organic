import "./NaturalFood.scss";
import Button from "../../../components/Button/Button";
function NaturalFood() {
  return (
    <section className="natural-food">
      <div className="natural-food__decor">
        <div className="natural-food__decor-item">
          <img
            src="/img/NaturalFood/natural-food__decor-img-1.svg"
            alt="Onion"
          />
        </div>
        <div className="natural-food__decor-item">
          <img
            src="/img/NaturalFood/natural-food__decor-img-2.svg"
            alt="Lettuce"
          />
        </div>
        <div className="natural-food__decor-item">
          <img
            src="/img/NaturalFood/natural-food__decor-img-3.svg"
            alt="Strawberry"
          />
        </div>
        <div className="natural-food__decor-item">
          <img
            src="/img/NaturalFood/natural-food__decor-img-4.svg"
            alt="Lettuce"
          />
        </div>
        <div className="natural-food__decor-item">
          <img
            src="/img/NaturalFood/natural-food__decor-img-5.svg"
            alt="Lettuce"
          />
        </div>
      </div>
      <div className="container">
        <div className="natural-food__inner">
          <h2 className="natural-food__subtitle">100% Natural Food</h2>
          <h1 className="natural-food__title">
            Choose the best healthier way of life
          </h1>
          <Button text={"Explore Now"} />
        </div>
      </div>
    </section>
  );
}
export default NaturalFood;
