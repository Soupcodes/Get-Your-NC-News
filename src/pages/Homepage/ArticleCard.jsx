import React from "react";

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
        <h2>{article.title}</h2>
        <span>Author: {article.author}</span>
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
