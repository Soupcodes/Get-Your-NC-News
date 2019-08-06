import React from "react";
import { Link } from "@reach/router";

const SingleArticle = ({ article }) => {
  return (
    <ul>
      <li>
        <h1>
          <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
        </h1>
      </li>
      <li>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <span>Author:</span>
        <Link to={`/user/${article.author}`}>{article.author}</Link>

        <p>Posted: {article.created_at}</p>
        <p>
          Comments: {article.comment_count} ---------NEED SPACING----------
          <span>Votes: {article.votes}</span>
        </p>
      </li>
    </ul>
  );
};

export default SingleArticle;
