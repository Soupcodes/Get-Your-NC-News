import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../Assets/LoadingSpinner";
import SingleArticle from "./SingleArticle";

class ArticleById extends Component {
  state = {
    article: null,
    isLoading: true
  };

  render() {
    const { article, isLoading } = this.state;
    return isLoading ? <LoadingSpinner /> : <SingleArticle article={article} />;
  }

  componentDidMount() {
    console.log(this.props, "PROP ID");
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => this.setState({ article, isLoading: false }));
  }
}

export default ArticleById;
