import React from "react";
import { Link } from "@reach/router";
import styles from "./SingleArticleView.module.css";
import Voter from "../../components/Voter";

const SingleArticleView = ({ article }) => {
  const timeStamp = new Date(article.created_at);
  const posted = timeStamp.toLocaleDateString();
  const type = "articles";

  return (
    <ul className={styles.article}>
      <li className={styles.articles}>
        <Link to={`/topics/${article.topic}`}>
          <h1 className={styles.topic}>{article.topic.toUpperCase()}</h1>
        </Link>

        <h2 className={styles.title}>{article.title}</h2>

        <p className={styles.body}>{article.body}</p>

        <div className={styles.user}>
          <span
            className="iconify"
            data-icon="fa-solid:user-alt"
            data-inline="false"
          />
          <Link to={`/user/${article.author}`}>{article.author}</Link>
          <p className={styles.comment_count}>
            <span
              className="iconify"
              data-icon="fa-regular:comment"
              data-inline="false"
            />{" "}
            {article.comment_count}
          </p>
        </div>

        <p className={styles.posted}>
          {" "}
          <span
            className="iconify"
            data-icon="icomoon-free:calendar"
            data-inline="false"
          />{" "}
          {posted}
        </p>

        <Voter
          id={article.article_id}
          votes={article.votes}
          className={styles.votes}
          type={type}
        />
      </li>
    </ul>
  );
};

export default SingleArticleView;
