import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments, username, deleteComment }) => {
  return comments.map(comment => {
    return (
      <CommentCard
        key={comment.comment_id}
        comment={comment}
        username={username}
        deleteComment={deleteComment}
      />
    );
  });
};

export default CommentList;
