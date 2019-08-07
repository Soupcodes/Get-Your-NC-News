import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "../pages/Homepage/styles/Navbar.module.css";
import User from "./User";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className={styles.nav}>
        {/* <img src="https://pbs.twimg.com/media/Dc6Z6GbWkAELnoS.png"/> */}
        {/* <Link to="/">Logo</Link> */}
        <Link to="/">Latest</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/trending" sort_by={"comment_count"}>
          Articles
        </Link>
        <User user={this.props.user} />
      </nav>
    );
  }
}

export default Navbar;
