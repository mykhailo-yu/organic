import "./ChooseCategory.scss";
function ChooseCategory() {
  return (
    <section className="choose-category">
      <div className="choose-category__item">
        <a href="/" className="choose-category__item-link">
          Organic Juice
        </a>
      </div>
      <div className="choose-category__item">
        <a href="/" className="choose-category__item-link">
          Organic Food
        </a>
      </div>
      <div className="choose-category__item">
        <a href="/" className="choose-category__item-link">
          Nuts Cookies
        </a>
      </div>
    </section>
  );
}
export default ChooseCategory;
