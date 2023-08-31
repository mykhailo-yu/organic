import "./Testimonials.scss";
import TestimonialsSlider from "../../../components/TestimonialsSlider/TestimonialsSlider";
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__subtitle">Testimonial</div>
        <div className="testimonials__title">What Our Customer Saying?</div>
        <TestimonialsSlider />
        <hr className="testimonials-line" />
        <div className="testimonials-stats">
          <div className="testimonials-stats__item">
            <div className="testimonials-stats__item-title">100%</div>
            <div className="testimonials-stats__item-subtitle">Organic</div>
          </div>
          <div className="testimonials-stats__item">
            <div className="testimonials-stats__item-title">285</div>
            <div className="testimonials-stats__item-subtitle">
              Active Product
            </div>
          </div>
          <div className="testimonials-stats__item">
            <div className="testimonials-stats__item-title">350+</div>
            <div className="testimonials-stats__item-subtitle">
              Organic Orchads
            </div>
          </div>
          <div className="testimonials-stats__item">
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
export default Testimonials;
