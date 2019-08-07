import React from "react";
import { Link } from "@reach/router";
import Voter from "../../components/Voter";

const ArticleCard = ({ article }) => {
  const timeStamp = new Date(article.created_at);
  const posted = timeStamp.toLocaleDateString();

  return (
    <ul>
      <li>
        <header className="rotateTopic90Deg">
          <h1>
            {article.topic.toUpperCase()} ------ note: rotate 90 deg sidecard
            title
          </h1>
        </header>

        <h2 className="title">
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
        </h2>

        <div classname="user">
          <span
            class="iconify"
            data-icon="fa-solid:user-alt"
            data-inline="false"
          />
          <Link to={`/user/${article.author}`}>{article.author}</Link>
        </div>

        <p className="comment_count">
          <span
            class="iconify"
            data-icon="fa-regular:comment"
            data-inline="false"
          />{" "}
          {article.comment_count}
        </p>

        <Voter article={article} />

        <p>Posted: {posted}</p>
      </li>
    </ul>
  );
};

export default ArticleCard;
