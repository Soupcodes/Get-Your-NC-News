import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import SortBy from "../SortArticles/SortBy";
import OrderBy from "../SortArticles/OrderBy";

class SortArticles extends Component {
  state = {
    articles: null,
    isLoading: true,
    sort_by: "",
    order: "desc"
  };

  render() {
    const { isLoading, sort_by, articles } = this.state;
    return isLoading ? (
      <p>Loading ......</p>
    ) : (
      <section>
        <div className="forms">
          <SortBy sortArticles={this.sortArticles} />
          <OrderBy orderArticles={this.orderArticles} sort_by={sort_by} />
        </div>
        <ArticleList articles={articles} />
      </section>
    );
  }

  componentDidMount() {
    const { sort_by } = this.props;
    this.setState(currentState => {
      currentState.sort_by = sort_by;
      this.fetchArticles();
    });
  }

  fetchArticles = () => {
    return api
      .getArticles(this.state)
      .then(articles => this.setState({ articles, isLoading: false }));
  };

  sortArticles = articles => {
    this.setState({ articles });
  };

  orderArticles = articles => {
    this.setState({ articles });
  };
}

export default SortArticles;
