import React from "react";
import styles from "./styles/CommentCard.module.css";
import DeleteButton from "../../../components/DeleteButton";
import Voter from "../../../components/Voter";
import { Link } from "@reach/router";

const CommentCard = ({ comment, username, deleteComment }) => {
  const timeStamp = new Date(comment.created_at);
  const posted = timeStamp.toLocaleDateString();
  return (
    <ul className={styles.comments}>
      <li className={styles.commentList}>
        <Link to={`/user/${comment.author}`}>
          <h3 className={styles.author}>{comment.author}</h3>
        </Link>

        <p className={styles.body}>{comment.body}</p>
        <Voter
          votes={comment.votes}
          comment_id={comment.comment_id}
          className={styles.votes}
        />
        <p className={styles.posted}>
          {" "}
          <span
            className="iconify"
            data-icon="icomoon-free:calendar"
            data-inline="false"
          />{" "}
          {posted}
        </p>
      </li>
      {username === comment.author ? (
        <DeleteButton
          comment_id={comment.comment_id}
          deleteComment={deleteComment}
          className={styles.delete}
        />
      ) : (
        <></>
      )}
    </ul>
  );
};

export default CommentCard;
