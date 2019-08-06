import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "./ArticleList";
import LoadingSpinner from "../Assets/LoadingSpinner";

class ArticlesHomepage extends Component {
  state = {
    articles: null,
    isLoading: true
    // sort_by: ""
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
  // componentDidUpdate(prevProps) {
  //   console.log(this.props);
  //   if (prevProps.path !== this.props.path) {
  //     this.setState({});
  //     api
  //       .getArticles(this.state)
  //       .then(articles => console.log(articles, "UPDATE"));
  //   }
  // }
}

export default ArticlesHomepage;
