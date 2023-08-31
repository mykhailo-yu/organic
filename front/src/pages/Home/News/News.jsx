import "./News.scss";
import Button from "../../../components/Button/Button";
import NewsItems from "../../../components/NewsItems/NewsItems";
function News() {
  return (
    <section className="news">
      <div className="container">
        <div className="news__header">
          <div className="news__titles">
            <div className="news__subtitle">News</div>
            <div className="news__title">
              Discover weekly content about organic food, & more
            </div>
          </div>
          <Button text={"More News"} />
        </div>
        <NewsItems />
      </div>
    </section>
  );
}
export default News;
