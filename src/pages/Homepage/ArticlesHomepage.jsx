import React, { Component } from "react";
import * as api from "../../api";
// import ArticleList from "./ArticleList";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import ChangePage from "../../components/Pagination";
import ArticleCard from "./ArticleCard";

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
        {/* <ArticleList articles={articles} /> */}
        {articles.map(article => {
          return (
            <ArticleCard
              article={article}
              key={article.article_id}
              // className={styles.ArticleCard}
            />
          );
        })}
        <p>{page}</p>
        <ChangePage page={page} browsePage={this.browsePage} />
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
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
    api
      .getArticles()
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

  browsePage = inc_votes => {
    this.setState(currentState => {
      return { page: currentState.page + inc_votes };
    });
  };
}

export default ArticlesHomepage;
