import React, { Component } from "react";
import * as api from "../../api";

class OrderBy extends Component {
  state = {
    order: "desc"
  };

  render() {
    return (
      <form className="order">
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
    const { sort_by } = this.props;
    this.setState(currentState => {
      currentState.order = value;
      api.getArticles({ order: value, sort_by }).then(articles => {
        this.props.orderArticles(value, articles);
      });
    });
  };
}

export default OrderBy;
