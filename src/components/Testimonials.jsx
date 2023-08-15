function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-subtitle">Testimonial</div>
        <div className="testimonials-title">What Our Customer Saying?</div>
        <div className="testimonials-slider">
          <div className="testimonial-slider__item">
            <div className="testimonial-slider__item-image">
              <img src="" alt="Sara Taylor" />
            </div>
            <div className="testimonial-slider__item-rate">
              <div className="testimonial-slider__item-rate-star">
                <img src="" alt="Star" />
              </div>
              <div className="testimonial-slider__item-rate-star">
                <img src="" alt="Star" />
              </div>
              <div className="testimonial-slider__item-rate-star">
                <img src="" alt="Star" />
              </div>
              <div className="testimonial-slider__item-rate-star">
                <img src="" alt="Star" />
              </div>
              <div className="testimonial-slider__item-rate-star">
                <img src="" alt="Star" />
              </div>
            </div>
            <div className="testimonial-slider__item-text">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </div>
            <div className="testimonial-slider__item-name">Sara Taylor</div>
            <div className="testimonial-slider__item-role">Consumer</div>
          </div>
        </div>
        <hr className="testimonials-line" />
        <div className="testimonials-stats">
          <div className="testimonial-stats__item">
            <div className="testimonials-stats__item-title">100%</div>
            <div className="testimonials-stats__item-subtitle">Organic</div>
          </div>
          <div className="testimonial-stats__item">
            <div className="testimonials-stats__item-title">285</div>
            <div className="testimonials-stats__item-subtitle">
              Active Product
            </div>
          </div>
          <div className="testimonial-stats__item">
            <div className="testimonials-stats__item-title">350+</div>
            <div className="testimonials-stats__item-subtitle">
              Organic Orchads
            </div>
          </div>
          <div className="testimonial-stats__item">
            <div className="testimonials-stats__item-title">25+</div>
            <div className="testimonials-stats__item-subtitle">
              Years of Farming
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials();
