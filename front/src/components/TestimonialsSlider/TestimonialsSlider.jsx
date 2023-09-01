import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "./TestimonialsSlider.scss";
import Rate from "../Rate/Rate";

function TestimonialsSlider() {
  return (
    <div className="testimonial-slider">
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: "#testimonial-slider__pagination",
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide className="testimonial-slider__item">
          <div className="testimonial-slider__item-image">
            <img src="/img/TestimonialsSlider/User-1.jpg" alt="Sara Taylor" />
          </div>
          <Rate rate={5} size={"1.5rem"} />
          <div className="testimonial-slider__item-text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </div>
          <div className="testimonial-slider__item-name">Sara Taylor</div>
          <div className="testimonial-slider__item-role">Consumer</div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slider__item">
          <div className="testimonial-slider__item-image">
            <img src="/img/TestimonialsSlider/User-1.jpg" alt="Sara Taylor" />
          </div>
          <Rate rate={3} size={"1.5rem"} />
          <div className="testimonial-slider__item-text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </div>
          <div className="testimonial-slider__item-name">Sara Taylor</div>
          <div className="testimonial-slider__item-role">Consumer</div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slider__item">
          <div className="testimonial-slider__item-image">
            <img src="/img/TestimonialsSlider/User-1.jpg" alt="Sara Taylor" />
          </div>
          <Rate rate={4} size={"1.5rem"} />
          <div className="testimonial-slider__item-text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </div>
          <div className="testimonial-slider__item-name">Sara Taylor</div>
          <div className="testimonial-slider__item-role">Consumer</div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slider__item">
          <div className="testimonial-slider__item-image">
            <img src="/img/TestimonialsSlider/User-1.jpg" alt="Sara Taylor" />
          </div>
          <Rate rate={4} size={"1.5rem"} />
          <div className="testimonial-slider__item-text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </div>
          <div className="testimonial-slider__item-name">Sara Taylor</div>
          <div className="testimonial-slider__item-role">Consumer</div>
        </SwiperSlide>
      </Swiper>
      <div id="testimonial-slider__pagination"></div>
    </div>
  );
}
export default TestimonialsSlider;
