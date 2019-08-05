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
          <select value={this.state.sort_by} onChange={this.handleChange}>
            <option value="author" onChange={this.handleChange}>
              Author
            </option>
            <option value="title" onChange={this.handleChange}>
              Title
            </option>
            <option value="Date (asc)" onChange={this.handleChange}>
              Date posted / asc
            </option>
            <option value="Date (desc)" onChange={this.handleChange}>
              Date posted / desc
            </option>
          </select>
        </label>
      </form>
    );
  }

  handleChange = e => {
    console.log(this, "THIS");
    api.getArticles(this.state).then(() => {});
  };
}

export default SortBy;
