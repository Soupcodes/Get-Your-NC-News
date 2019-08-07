import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "../pages/Homepage/styles/Navbar.module.css";
import User from "./User";

const Navbar = ({ user }) => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Latest</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/trending" sort_by={"comment_count"}>
        Articles
      </Link>
      <User user={user} />
    </nav>
  );
};

export default Navbar;
