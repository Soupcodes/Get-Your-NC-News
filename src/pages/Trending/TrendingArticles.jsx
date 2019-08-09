import React, { Component } from "react";
import * as api from "../../api";
import SortBy from "../../components/SortBy";
import OrderBy from "../../components/OrderBy";
import styles from "./styles/TrendingArticles.module.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import ChangePage from "../../components/Pagination";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import ArticleList from "../Homepage/ArticleList";

class TrendingArticles extends Component {
  state = {
    sort_by: "comment_count",
    order: "desc",
    articles: null,
    isLoading: true,
    errStatus: null,
    errMsg: null,
    page: 1
  };

  render() {
    const { articles, isLoading, page, errStatus, errMsg } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <div>
          <div className={styles.forms}>
            <SortBy sortArticles={this.sortArticles} />
            <OrderBy orderArticles={this.orderArticles} />
          </div>
          <ArticleList articles={articles} />
          <p>{page}</p>
          <div className={styles.pagination}>
            <ChangePage page={page} browsePage={this.browsePage} />
          </div>
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

    const { page } = this.state;
    if (prevState.page !== page) {
      api
        .getArticles({ p: page })
        .then(articles => {
          this.setState(currentState => {
            return { articles };
          });
        })
        .catch(({ response }) =>
          this.setState({
            errStatus: response.status,
            errMsg: response.data.msg,
            isLoading: false
          })
        );
    }
  }

  fetchArticles = () => {
    const { order, sort_by } = this.state;

    api
      .getArticles({ order, sort_by })
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  sortArticles = sort_by => {
    this.setState({ sort_by });
  };

  orderArticles = order => {
    this.setState({ order });
  };

  browsePage = inc_votes => {
    this.setState(currentState => {
      return { page: currentState.page + inc_votes };
    });
  };
}

export default TrendingArticles;
