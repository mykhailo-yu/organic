import "./Offer.scss";
import Products from "../../../components/Products/Products";
function Offer() {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__subtitle">Offer</div>
        <div className="offer__title">We Offer Organic For You</div>
        <Products quantity="4" category="Vegetable" />
      </div>
    </section>
  );
}
export default Offer;
