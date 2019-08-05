import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styles/Navbar.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav>
        {/* <img src="https://pbs.twimg.com/media/Dc6Z6GbWkAELnoS.png"/> */}
        <Link to="/">Latest</Link>
        <Link to="/articles?sort_by=votes">Top</Link>
        <Link to="/topics">Topics</Link>
        <form>
          <label>
            User: <input type="text" className="login" />
          </label>
        </form>
      </nav>
    );
  }
}

export default Navbar;
