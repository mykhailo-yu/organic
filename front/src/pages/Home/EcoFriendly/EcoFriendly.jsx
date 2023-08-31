import "./EcoFriendly.scss";
function EcoFriendly() {
  return (
    <section className="eco-friendly">
      <div className="eco-friendly__bg-image">
        <img
          src="/img/EcoFriendly/eco-friendly__bg-image.jpg"
          alt="eco-friendly"
        />
      </div>
      <div className="eco-friendly__inner">
        <div className="eco-friendly__subtitle">Eco Friendly</div>
        <div className="eco-friendly__title">
          Econis is a Friendly Organic Store
        </div>
        <dl className="eco-friendly__list">
          <dt className="eco-friendly__list-item-title">
            Start with Our Company First
          </dt>
          <dd className="eco-friendly__list-item-description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </dd>
          <dt className="eco-friendly__list-item-title">
            Learn How to Grow Yourself
          </dt>
          <dd className="eco-friendly__list-item-description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </dd>
          <dt className="eco-friendly__list-item-title">
            Farming Strategies of Today
          </dt>
          <dd className="eco-friendly__list-item-description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </dd>
        </dl>
      </div>
    </section>
  );
}
export default EcoFriendly;
