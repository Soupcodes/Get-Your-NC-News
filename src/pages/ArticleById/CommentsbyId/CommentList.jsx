import React from "react";
import { Link } from "@reach/router";
import DeleteButton from "../../../components/DeleteButton";
import Voter from "../../../components/Voter";

const CommentList = ({ comments, username, deleteComment }) => {
  return comments.map(comment => {
    const timeStamp = new Date(comment.created_at);
    const posted = timeStamp.toLocaleDateString();
    return (
      <ul key={comment.comment_id}>
        <li>
          <h3>
            <Link to={`/user/${comment.author}`}>{comment.author}</Link>
          </h3>
          <p>{comment.body}</p>
          <Voter votes={comment.votes} comment_id={comment.comment_id} />
          <p>Posted: {posted}</p>
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
    );
  });
};

export default CommentList;
