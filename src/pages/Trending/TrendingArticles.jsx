import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import SortBy from "../../components/SortBy";
import OrderBy from "../../components/OrderBy";
import styles from "./styles/TrendingArticles.module.css";
import LoadingSpinner from "../../components/LoadingSpinner";

class TrendingArticles extends Component {
  state = {
    sort_by: "comment_count",
    order: "desc",
    articles: null,
    isLoading: true
  };

  render() {
    const { articles, sort_by, isLoading } = this.state;
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <div className={styles.forms}>
          <SortBy sortArticles={this.sortArticles} className="sort" />
          <OrderBy
            orderArticles={this.orderArticles}
            sort_by={sort_by}
            className="order"
          />
        </div>
        <ArticleList articles={articles} />
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;

    if (prevState.sort_by !== sort_by || prevState.order !== order) {
      this.fetchArticles();
    }

    //IT IS POSSIBLE TO PASS DOWN PROPS FROM ROUTER BUT prevProps & prevState becomes invalid comparisons
    // if (prevProps.sort_by === this.props.sort_by) {
    //   this.fetchArticles();
    // }
  }

  fetchArticles = () => {
    api
      .getArticles(this.state)
      .then(articles => this.setState({ articles, isLoading: false }));
  };

  sortArticles = sort_by => {
    this.setState({ sort_by });
  };

  orderArticles = order => {
    this.setState({ order });
  };
}

export default TrendingArticles;
