import React from "react";
import styles from "./styles/UserCard.module.css";

const UserCard = ({ user }) => {
  console.log("in usercard");
  return (
    <ul>
      <li className={styles.centerItems}>
        <h3>
          <u>User: {user.name}</u>
        </h3>
        <img src={user.avatar_url} alt="profile-pic" />
        <p>Username: {user.username}</p>
      </li>
    </ul>
  );
};

export default UserCard;
