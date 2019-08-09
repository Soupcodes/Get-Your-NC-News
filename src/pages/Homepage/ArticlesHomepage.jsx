import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import ChangePage from "../../components/Pagination";
import styles from "./styles/ArticlesHomepage.module.css";
import ArticleList from "./ArticleList";

class ArticlesHomepage extends Component {
  state = {
    articles: null,
    isLoading: true,
    errStatus: null,
    errMsg: null,
    page: 1
  };

  render() {
    const { isLoading, articles, errStatus, errMsg, page } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <h1>Latest</h1>
        <ArticleList articles={articles} />
        <div className={styles.pagination}>
          <p>{page}</p>
          <ChangePage page={page} browsePage={this.browsePage} />
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
    api
      .getArticles({ p: page })
      .then(articles =>
        this.setState({
          articles,
          isLoading: false
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
      return { page: currentState.page + inc_page };
    });
  };
}

export default ArticlesHomepage;
