import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <ul>
      <li>
        <header>
          <h1>
            {article.topic.toUpperCase()} ------ note: rotate 90 deg sidecard
            title
          </h1>
        </header>
        <h2>
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
        </h2>

        <span>Author:</span>
        <Link to={`/user/${article.author}`}>{article.author}</Link>
        <p>
          Comments: {article.comment_count} ------ note: change into an icon
        </p>
        <p>Votes: {article.votes} ------ note: change into an icon</p>
        <p>Posted: {article.created_at}</p>
      </li>
    </ul>
  );
};

export default ArticleCard;
