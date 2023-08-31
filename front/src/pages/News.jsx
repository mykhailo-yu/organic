import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewsItems from "../components/NewsItems/NewsItems";

function News() {
  return (
    <>
      <Header />
      <div
        className="banner"
        style={{
          backgroundImage: `url(./img/RecentNews/RecentNews__banner.png)`,
        }}
      >
        Recent News
      </div>
      <div className="container">
        <NewsItems />
      </div>
      <Footer subscribe={true} />
    </>
  );
}
export default News;
