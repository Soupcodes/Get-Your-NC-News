import React from "react";
import { Link } from "@reach/router";
import styles from "./styles/Navbar.module.css";
import User from "./User";

const Navbar = ({ user }) => {
  return (
    <nav className={styles.highlightHover}>
      <Link to="/">
          <span
            className="iconify"
            data-icon="emojione-monotone:newspaper"
            data-inline="false"
            id={styles.logo}
          />
      </Link>
      <div className={styles.right}>
        <Link to="/">Latest</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/trending" sort_by={"comment_count"}>
          Articles
        </Link>
        <User user={user} />
      </div>
    </nav>
  );
};

export default Navbar;
