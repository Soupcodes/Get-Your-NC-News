import React from "react";
import { Link } from "@reach/router";

const CommentList = ({ comments }) => {
  return comments.map(comment => (
    <ul key={comment.comment_id}>
      <li>
        <h3>
          <Link to={`/user/${comment.author}`}>{comment.author}</Link>
        </h3>
        <p>{comment.body}</p>
        <p>Votes: {comment.votes}</p>
        <p>{comment.created_at}</p>
      </li>
    </ul>
  ));
};

export default CommentList;
