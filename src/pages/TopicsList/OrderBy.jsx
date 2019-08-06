import React, { Component } from "react";
import * as api from "../../api";

class OrderBy extends Component {
  state = {
    order: "desc"
  };

  render() {
    return (
      <form>
        <label>
          <select onChange={this.handleChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </form>
    );
  }

  handleChange = e => {
    const { value } = e.target;
    // const { sort_by } = this.props;
    const { topic, sort_by } = this.props;
    this.setState(currentState => {
      currentState.order = value;
      const query = { topic, sort_by, ...currentState };
      api.getArticles(query).then(articles => {
        this.props.orderArticles(articles, value, sort_by);
      });
    });
  };
}

export default OrderBy;
