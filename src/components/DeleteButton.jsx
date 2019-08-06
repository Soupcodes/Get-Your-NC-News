import React from "react";

const DeleteButton = ({ deleteComment, comment_id }) => {
  return <button onClick={() => deleteComment(comment_id)}>Delete</button>;
};

export default DeleteButton;
