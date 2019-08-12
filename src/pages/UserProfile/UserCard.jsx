import React from "react";
import styles from "./styles/UserCard.module.css";

const UserCard = ({ user }) => {
  return (
    <ul className={styles.userCard}>
      <li className={styles.centerItems}>
        <h3 className={styles.name}>
          <u>
            {" "}
            <span
              className="iconify"
              data-icon="fa-solid:user-alt"
              data-inline="false"
              id={styles.marginRight}
            />{" "}
            {user.name}
          </u>
        </h3>
        <img
          src={user.avatar_url}
          alt="profile-pic"
          onError={e =>
            (e.target.src =
              "https://media.istockphoto.com/vectors/standing-business-man-reading-news-paper-vector-id635805062?k=6&m=635805062&s=612x612&w=0&h=kUtj4RL8vcFqj1W4PTMZ-jL8RgnCGHaXY-WrdZdnEeU=")
          }
        />
        <p className={styles.username}>Username: {user.username}</p>
      </li>
    </ul>
  );
};

export default UserCard;
