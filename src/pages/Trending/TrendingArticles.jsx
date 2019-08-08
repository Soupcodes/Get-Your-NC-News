import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import SortBy from "../../components/SortBy";
import OrderBy from "../../components/OrderBy";
import styles from "./styles/TrendingArticles.module.css";
// import LoadingSpinner from "../../components/LoadingSpinner";

class TrendingArticles extends Component {
  state = {
    sort_by: "comment_count",
    order: "desc",
    isLoading: true
  };

  render() {
    const { sort_by, order } = this.state;
    return (
      <>
        <div>
          <div className={styles.forms}>
            <SortBy sortArticles={this.sortArticles} className="sort" />
            <OrderBy
              orderArticles={this.orderArticles}
              sort_by={sort_by}
              className="order"
            />
          </div>
          <ArticleList sort_by={sort_by} order={order} />
        </div>
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
  }

  fetchArticles = () => {
    const { order, sort_by } = this.state;

    api.getArticles({ order, sort_by }).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  sortArticles = sort_by => {
    this.setState({ sort_by });
  };

  orderArticles = order => {
    this.setState({ order });
  };
}

export default TrendingArticles;
