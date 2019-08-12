import React, { Component } from "react";
import styles from "./styles/TopicsPage.module.css";
import SortBy from "../../components/SortBy";
import OrderBy from "../../components/OrderBy";
import ArticleList from "../Homepage/ArticleList";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import PageChanger from "../../components/PageChanger";

class ArticlesByTopic extends Component {
  state = {
    articles: null,
    isLoading: true,
    errStatus: null,
    errMsg: null,
    order: "desc",
    page: 1
  };

  render() {
    const { articles, isLoading, errMsg, errStatus, page } = this.state;
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
        <div className={styles.pagination}>
          <p>{page}</p>
          <PageChanger page={page} browsePage={this.browsePage} />
        </div>
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { order, sort_by, page } = this.state;
    if (
      prevProps.topic !== topic ||
      prevState.order !== order ||
      prevState.sort_by !== sort_by ||
      prevState.page !== page
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { order, sort_by, page } = this.state;
    const { topic } = this.props;

    return api
      .getArticles({ order, sort_by, topic, p: page })
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

export default ArticlesByTopic;
