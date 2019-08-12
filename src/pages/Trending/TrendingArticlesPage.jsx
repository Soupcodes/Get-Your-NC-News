import React, { Component } from "react";
import * as api from "../../api";
import SortBy from "../../components/SortBy";
import OrderBy from "../../components/OrderBy";
import styles from "./styles/TrendingArticles.module.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageChanger from "../../components/PageChanger";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import ArticleList from "../Homepage/ArticleList";

class TrendingArticlesPage extends Component {
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
            <PageChanger page={page} browsePage={this.browsePage} />
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order, page } = this.state;

    if (
      prevState.sort_by !== sort_by ||
      prevState.order !== order ||
      prevState.page !== page
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { order, sort_by, page } = this.state;
    api
      .getArticles({ order, sort_by, p: page })
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

  browsePage = inc_page => {
    this.setState(currentState => {
      return { page: currentState.page + inc_page, isLoading: true };
    });
  };
}

export default TrendingArticlesPage;
