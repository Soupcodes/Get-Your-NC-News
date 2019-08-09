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
        <img src={user.avatar_url} alt="profile-pic" />
        <p className={styles.username}>Username: {user.username}</p>
      </li>
    </ul>
  );
};

export default UserCard;
