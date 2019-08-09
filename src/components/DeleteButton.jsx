import React from "react";
import styles from "./styles/DeleteButton.module.css";

const DeleteButton = ({ deleteComment, comment_id }) => {
  return (
    <button onClick={() => deleteComment(comment_id)} className={styles.delete}>
      Delete
    </button>
  );
};

export default DeleteButton;
