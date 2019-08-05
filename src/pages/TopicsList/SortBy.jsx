import React, { Component } from "react";
import * as api from "../../api";
// import { navigate } from "@reach/router";

class SortBy extends Component {
  state = {
    sort_by: ""
  };

  render() {
    return (
      <form>
        <label>
          Sort by:
          <select onChange={this.handleChange}>
            <option value="comment_count">Most Commented</option>
            <option value="author">Author</option>
            <option value="created_at">Recently Posted</option>
            <option value="title">Title</option>
            <option value="votes">Votes</option>
            {/* <option value="Date (desc)" onChange={this.handleChange}>
              Date posted / desc
            </option> */}
          </select>
        </label>
      </form>
    );
  }

  handleChange = e => {
    const { value } = e.target;
    const { topic } = this.props;
    this.setState(currentState => {
      currentState.sort_by = value;
      const query = { topic, ...currentState };
      api.getArticles(query).then(articles => {
        this.props.sortArticles(articles);
      });
    });
  };
}

export default SortBy;
