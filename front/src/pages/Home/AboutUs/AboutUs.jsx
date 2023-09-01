import "./AboutUs.scss";
import Button from "../../../components/Button/Button";
function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us__inner">
          <div className="about-us__image">
            <img src="img/AboutUs/about-us__image.png" alt="About us" />
          </div>
          <div className="about-us__info">
            <div className="about-us__info-subtitle">About us</div>
            <div className="about-us__info-title">
              We Believe in Working Accredited Farmers
            </div>
            <div className="about-us__info-text">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </div>
            <ul className="about-us__list">
              <li className="about-us__list-item">
                <div className="about-us__list-item-image-wrapper">
                  <div className="about-us__list-item-image">
                    <img
                      src="img/AboutUs/about-us__list-item-1.svg"
                      alt="Vegan Food"
                    />
                  </div>
                </div>
                <div className="about-us__list-item-info">
                  <div className="about-us__list-item-title">
                    Organic Foods Only
                  </div>
                  <div className="about-us__list-item-text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </div>
                </div>
              </li>
              <li className="about-us__list-item">
                <div className="about-us__list-item-image-wrapper">
                  <div className="about-us__list-item-image">
                    <img
                      src="img/AboutUs/about-us__list-item-2.svg"
                      alt="Mailbox"
                    />
                  </div>
                </div>
                <div className="about-us__list-item-info">
                  <div className="about-us__list-item-title">
                    Quality Standards
                  </div>
                  <div className="about-us__list-item-text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </div>
                </div>
              </li>
            </ul>
            <Button text={"Shop Now"} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
