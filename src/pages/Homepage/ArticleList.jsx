import React from "react";
import "./styles/ArticleList.module.css";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  // console.log(articles.created_at);

  return articles.map(article => {
    return <ArticleCard article={article} key={article.article_id} />;
  });
};

export default ArticleList;
