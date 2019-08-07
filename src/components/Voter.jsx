import React, { Component } from "react";
import styles from "./styles/Voter.module.css";
import * as api from "../api";

class Voter extends Component {
  state = {
    changeVotes: 0
  };

  render() {
    const { votes } = this.props;
    const { changeVotes } = this.state;
    return (
      <section>
        <p>Votes: {votes + changeVotes}</p>
        <button className={styles.buttons} onClick={() => this.handleClick(1)}>
          <span
            className="iconify"
            data-icon="noto:red-heart"
            data-inline="false"
          />
        </button>
        <button className={styles.buttons} onClick={() => this.handleClick(-1)}>
          <span
            className="iconify"
            data-icon="noto:broken-heart"
            data-inline="false"
          />
        </button>
      </section>
    );
  }

  handleClick = inc_votes => {
    const { id } = this.props;
    api.patchArticleById(id, { inc_votes }).then(() =>
      this.setState(currentState => {
        return { changeVotes: currentState.changeVotes + inc_votes };
      })
    );
  };
}

export default Voter;
