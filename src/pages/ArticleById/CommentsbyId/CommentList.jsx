import React from "react";
import { Link } from "@reach/router";
import DeleteButton from "../../../components/DeleteButton";
import Voter from "../../../components/Voter";
import styles from "./styles/CommentList.module.css";

const CommentList = ({ comments, username, deleteComment }) => {
  return comments.map(comment => {
    const timeStamp = new Date(comment.created_at);
    const posted = timeStamp.toLocaleDateString();
    return (
      <ul key={comment.comment_id} className={styles.comments}>
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
  });
};

export default CommentList;
