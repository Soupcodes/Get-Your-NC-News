import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "./ArticleList";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";

class ArticlesHomepage extends Component {
  state = {
    articles: null,
    isLoading: true,
    err: null
  };

  render() {
    const { isLoading, articles, err } = this.state;
    if (isLoading) return <LoadingSpinner />;
    else if (err) return <DefaultErrorPage />;

    return (
      <section>
        <ArticleList articles={articles} />
      </section>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api
      .getArticles()
      .then(articles => this.setState({ articles, isLoading: false }))
      .catch(err => this.setState({ err: true, isLoading: false }));
  };
}

export default ArticlesHomepage;
