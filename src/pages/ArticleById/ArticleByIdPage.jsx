import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import SingleArticleView from "./SingleArticleView";
import CommentsByArticleId from "./CommentsbyId/CommentsByArticleId";

class ArticleById extends Component {
  state = {
    article: null,
    isLoading: true
  };

  render() {
    const { article, isLoading } = this.state;
    const { user, article_id } = this.props;
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <SingleArticleView article={article} />
        <CommentsByArticleId id={article_id} username={user} />
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
