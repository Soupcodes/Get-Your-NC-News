import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../Assets/LoadingSpinner";
import SingleArticle from "./SingleArticle";
import CommentsByArticleId from "./CommentsByArticleId";

class ArticleById extends Component {
  state = {
    article: null,
    isLoading: true
  };

  render() {
    const { article, isLoading } = this.state;
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <SingleArticle article={article} />
        <CommentsByArticleId id={article.article_id} />
      </>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => this.setState({ article, isLoading: false }));
  }
}

export default ArticleById;
