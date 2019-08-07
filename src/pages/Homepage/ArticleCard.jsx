import React from "react";
import { Link } from "@reach/router";
import Voter from "../../components/Voter";
import styles from "./styles/ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  const timeStamp = new Date(article.created_at);
  const posted = timeStamp.toLocaleDateString();
  const { article_id, votes } = article;

  return (
    <ul className={styles.container}>
      <li>
        <h1 className={styles.topic}>{article.topic.toUpperCase()}</h1>

        <Link to={`/articles/${article.article_id}`}>
          <h2 className={styles.title}>{article.title} </h2>
        </Link>

        <>
          <Link to={`/user/${article.author}`}>
            <span
              className="iconify"
              data-icon="fa-solid:user-alt"
              data-inline="false"
            />
            <span className={styles.highlightUser}>{article.author}</span>
          </Link>
        </>
        <p className={styles.comment_count}>
          <span
            className="iconify"
            data-icon="fa-regular:comment"
            data-inline="false"
          />{" "}
          {article.comment_count}
        </p>

        <p className={styles.posted}>Posted: {posted}</p>

        <Voter id={article_id} votes={votes} className={styles.votes} />
      </li>
    </ul>
  );
};

export default ArticleCard;
