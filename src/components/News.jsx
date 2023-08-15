function News() {
  return (
    <section className="news">
      <div className="container">
        <div className="news__subtitle">News</div>
        <div className="news__title">
          Discover weekly content about organic food, & more
        </div>
        <button className="news__button">More News</button>
        <div className="news-items">
          <div className="news__item">
            <div className="news__item-date">25 Nov</div>
            <div className="news__item-info">
              <div className="news__item-info-author">By Rachi Card</div>
              <div className="news__item-info-title">
                The Benefits of Vitamin D & How to Get It
              </div>
              <div className="news__item-info-text">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </div>
              <button className="news__item-button">Read More</button>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item-date">25 Nov</div>
            <div className="news__item-info">
              <div className="news__item-info-author">By Rachi Card</div>
              <div className="news__item-info-title">
                Our Favourite Summertime Tommeto
              </div>
              <div className="news__item-info-text">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </div>
              <button className="news__item-button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default News();
