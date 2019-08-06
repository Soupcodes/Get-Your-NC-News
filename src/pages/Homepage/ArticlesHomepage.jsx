import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "./ArticleList";
import LoadingSpinner from "../../components/LoadingSpinner";

class ArticlesHomepage extends Component {
  state = {
    articles: null,
    isLoading: true
  };

  render() {
    const { isLoading, articles } = this.state;
    return isLoading ? (
      <LoadingSpinner />
    ) : (
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
      .then(articles => this.setState({ articles, isLoading: false }));
  };
}

export default ArticlesHomepage;
