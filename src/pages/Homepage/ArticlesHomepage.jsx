import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import PageChanger from "../../components/PageChanger";
import styles from "./styles/ArticlesHomepage.module.css";
import ArticleList from "./ArticleList";

class ArticlesHomepage extends Component {
  state = {
    articles: null,
    isLoading: true,
    errStatus: null,
    errMsg: null,
    page: 1,
    limit: false
  };

  render() {
    const { isLoading, articles, errStatus, errMsg, page, limit } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <h1>Latest</h1>
        <ArticleList articles={articles} />
        <div className={styles.pagination}>
          <p>{page}</p>
          <PageChanger page={page} browsePage={this.browsePage} limit={limit} />
        </div>
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    if (prevState.page !== page) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { page } = this.state;
    return api
      .getArticles({ p: page })
      .then(articles =>
        this.setState(currentState => {
          return articles.length < 10
            ? { isLoading: false, limit: true, articles }
            : { isLoading: false, limit: false, articles };
        })
      )
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  browsePage = inc_page => {
    this.setState(currentState => {
      return { page: currentState.page + inc_page, isLoading: true };
    });
  };
}

export default ArticlesHomepage;
