import React from "react";
import { Link } from "@reach/router";
import DeleteButton from "../../../components/DeleteButton";

const CommentList = ({ comments, username, deleteComment }) => {
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
      {username === comment.author ? (
        <DeleteButton
          comment_id={comment.comment_id}
          deleteComment={deleteComment}
        />
      ) : (
        <></>
      )}
    </ul>
  ));
};

export default CommentList;
