import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard";
import "./NewsContent.css";
const NewsContent = ({ news, result, loadMore, setLoadMore }) => {
  console.log(news);
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMsg">
          <span className="txt">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="ios"
          />
          <img
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="andorid"
          />
        </div>

        {news.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
      </div>
      {/* Then this */}
      {loadMore <= result && (
        <>
          <hr />
          <button
            className="loadMore"
            onClick={() => setLoadMore(loadMore + 20)}
          >
            Load More
          </button>
        </>
      )}
    </Container>
  );
};

export default NewsContent;
