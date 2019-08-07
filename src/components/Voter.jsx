import React, { Component } from "react";
import styles from "./styles/Voter.module.css";

class Voter extends Component {
  state = {};

  render() {
    const { votes } = this.props.article;
    return (
      <section className={styles.voteButtons}>
        <p>Votes: {votes}</p>
        <button className={styles.buttons}>
          <span
            className="iconify"
            data-icon="noto:red-heart"
            data-inline="false"
          />
        </button>
        <button className={styles.buttons}>
          <span
            className="iconify"
            data-icon="noto:broken-heart"
            data-inline="false"
          />
        </button>
      </section>
    );
  }
}

export default Voter;
