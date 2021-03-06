import React, { Component } from "react";
import styles from "./styles/Voter.module.css";
import * as api from "../api";
import LoadingSpinner from "./LoadingSpinner";
import DefaultErrorPage from "./DefaultErrorPage";

class Voter extends Component {
  state = {
    changeVotes: 0,
    errStatus: null,
    errMsg: null,
    isLoading: false
  };

  render() {
    const { votes } = this.props;
    const { changeVotes, isLoading, errStatus, errMsg } = this.state;

    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <section>
        <p>Votes: {votes + changeVotes}</p>
        <button
          className={styles.buttons}
          onClick={() => this.handleClick(1)}
          disabled={changeVotes >= 1}
        >
          <span
            className="iconify"
            data-icon="noto:red-heart"
            data-inline="false"
          />
        </button>
        <button
          className={styles.buttons}
          onClick={() => this.handleClick(-1)}
          disabled={changeVotes <= -1}
        >
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
    const { id, comment_id, type } = this.props;
    if (id) {
      this.updateVotes(id, inc_votes, type);
    } else if (comment_id) {
      this.updateVotes(comment_id, inc_votes, type);
    }
  };

  updateVotes = (id, inc_votes, type) => {
    api.patchVotesByTypeAndId(id, { inc_votes }, type).catch(({ response }) =>
      this.setState({
        errStatus: response.status,
        errMsg: response.data.msg,
        isLoading: false
      })
    );
    this.setState(currentState => {
      return { changeVotes: currentState.changeVotes + inc_votes };
    });
  };
}

export default Voter;
