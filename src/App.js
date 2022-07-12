import React, { useEffect, useState } from "react";
import "./App.css";
import NavBarApp from "./componets/NavBarApp";
import NewsContent from "./componets/NewsContent/NewsContent";
import axios from "axios";
import apiKey from "./data/config";
import Footer from "./componets/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [result, setResult] = useState([]);
  const [loadMore, setLoadMore] = useState(20);
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${loadMore}`
      );

      console.log(news.data);
      setNews(news.data.articles);
      setResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(news);
  useEffect(() => {
    newsApi();
    //eslint-disable-next-line
  }, [category, result, loadMore]);
  return (
    <div className="App">
      <NavBarApp setCategory={setCategory} />
      <NewsContent
        news={news}
        result={result}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
