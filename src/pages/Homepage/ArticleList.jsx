import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return articles.map(article => {
    return <ArticleCard article={article} key={article.article_id} />;
  });
};

export default ArticleList;
