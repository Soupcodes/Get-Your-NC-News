import React from "react";
import styles from "./styles/ArticleList.module.css";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return articles.map(article => {
    return (
      <ArticleCard
        article={article}
        key={article.article_id}
        // className={styles.ArticleCard}
      />
    );
  });
};

export default ArticleList;
