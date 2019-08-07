import React from "react";
import { Link } from "@reach/router";
import Voter from "../../components/Voter";
import styles from "./styles/ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  const timeStamp = new Date(article.created_at);
  const posted = timeStamp.toLocaleDateString();

  return (
    <ul className={styles.container}>
      <li>
        <h1 className={styles.rotateTopic90Deg}>
          {article.topic.toUpperCase()}
        </h1>

        <h2 className={styles.title}>
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
        </h2>

        <div className={styles.user}>
          <span
            class="iconify"
            data-icon="fa-solid:user-alt"
            data-inline="false"
          />
          <Link to={`/user/${article.author}`}>{article.author}</Link>
        </div>

        <p className={styles.comment_count}>
          <span
            class="iconify"
            data-icon="fa-regular:comment"
            data-inline="false"
          />{" "}
          {article.comment_count}
        </p>

        <p className={styles.posted}>Posted: {posted}</p>

        <Voter article={article} className={styles.votes} />
      </li>
    </ul>
  );
};

export default ArticleCard;
