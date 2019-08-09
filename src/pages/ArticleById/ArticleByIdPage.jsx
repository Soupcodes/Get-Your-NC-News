import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import SingleArticleView from "./SingleArticleView";
import CommentsByArticleId from "./CommentsbyId/CommentsByArticleId";
import DefaultErrorPage from "../../components/DefaultErrorPage";

class ArticleById extends Component {
  state = {
    article: null,
    isLoading: true,
    errStatus: null,
    errMsg: null
  };

  render() {
    const { article, isLoading, errStatus, errMsg } = this.state;
    const { user, article_id } = this.props;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <SingleArticleView article={article} />
        <CommentsByArticleId id={article_id} username={user} />
      </>
    );
  }

  componentDidMount() {
    this.fetchArticlesById();
  }

  fetchArticlesById = () => {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => this.setState({ article, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };
}

export default ArticleById;
