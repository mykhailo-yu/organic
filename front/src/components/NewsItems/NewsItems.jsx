import "./NewsItems.scss";
import Button from "../Button/Button";
function NewsItems() {
  return (
    <div className="news-items">
      <BlogPost
        date={"25 Nov"}
        author={"Rachi Card"}
        title={"The Benefits of Vitamin D & How to Get It"}
        text={`Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum`}
        bgImage={"url(./img/NewsItems/news-items__bg-1.png)"}
      />
      <BlogPost
        date={"25 Nov"}
        author={"Rachi Card"}
        title={"Our Favourite Summertime Tommeto"}
        text={`Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum`}
        bgImage={"url(./img/NewsItems/news-items__bg-2.png)"}
      />
    </div>
  );
}
function BlogPost(props) {
  return (
    <div className="news__item" style={{ backgroundImage: `${props.bgImage}` }}>
      <div className="news__item-date">{props.date}</div>
      <div className="news__item-info">
        <div className="news__item-info-author">By {props.author}</div>
        <div className="news__item-info-title">{props.title}</div>
        <div className="news__item-info-text">{props.text}</div>
        <Button text={"Read More"} />
      </div>
    </div>
  );
}
export default NewsItems;
