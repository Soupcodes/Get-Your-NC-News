import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";
import "./styles/TrendingArticles.css";
import LoadingSpinner from "../Assets/LoadingSpinner";

class TrendingArticles extends Component {
  state = {
    sort_by: "comment_count",
    order: "desc",
    articles: null,
    isLoading: true
  };

  render() {
    const { articles, sort_by, order, isLoading } = this.state;
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <section>
        <div className="forms">
          <SortBy sortArticles={this.sortArticles} className="sort" />
          <OrderBy
            orderArticles={this.orderArticles}
            sort_by={sort_by}
            className="order"
          />
        </div>
        <ArticleList articles={articles} />
      </section>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api
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

export default TrendingArticles;
