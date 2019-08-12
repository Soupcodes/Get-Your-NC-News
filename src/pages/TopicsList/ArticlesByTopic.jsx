import React, { Component } from "react";
import styles from "./styles/TopicsPage.module.css";
import SortBy from "../../components/SortBy";
import OrderBy from "../../components/OrderBy";
import ArticleList from "../Homepage/ArticleList";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";

class ArticlesByTopic extends Component {
  state = {
    articles: null,
    isLoading: true,
    errStatus: null,
    errMsg: null,
    order: "desc",
    sort_by: "created_at"
  };

  render() {
    const { articles, isLoading, errMsg, errStatus } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <div className={styles.forms}>
          <SortBy sortArticles={this.sortArticles} />
          <OrderBy orderArticles={this.orderArticles} />
        </div>
        <ArticleList articles={articles} />
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { order, sort_by } = this.state;
    if (
      prevProps.topic !== topic ||
      prevState.order !== order ||
      prevState.sort_by !== sort_by
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { order, sort_by } = this.state;
    const { topic } = this.props;

    return api
      .getArticles({ order, sort_by, topic })
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
}

export default ArticlesByTopic;
