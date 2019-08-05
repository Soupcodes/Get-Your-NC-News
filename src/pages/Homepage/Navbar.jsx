import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./styles/Navbar.module.css";
import UserList from "./UserList";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav>
        {/* <img src="https://pbs.twimg.com/media/Dc6Z6GbWkAELnoS.png"/> */}
        {/* <Link to="/">Logo</Link> */}
        <Link to="/">Latest</Link>
        <Link to="/trending">Top [Comments atm, need to add votes]</Link>
        <Link to="/topics">Topics</Link>
        <UserList user={this.props.user} />
      </nav>
    );
  }
}

export default Navbar;
