import React, { Component } from "react";
import * as api from "../../api";

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
    this.setState(currentState => {
      currentState.sort_by = value;
      api.getArticles(currentState).then(articles => {
        this.props.sortArticles(value, articles);
      });
    });
  };
}

export default SortBy;
