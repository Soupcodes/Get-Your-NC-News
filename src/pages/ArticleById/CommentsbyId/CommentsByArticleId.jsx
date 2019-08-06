import React, { Component } from "react";
import * as api from "../../../api";
import CommentList from "./CommentList";
import LoadingSpinner from "../../../components/LoadingSpinner";
import PostCommentBox from "./PostCommentForm";

class CommentsByArticleId extends Component {
  state = {
    comments: null,
    isLoading: true
  };

  render() {
    const { comments, isLoading } = this.state;
    const { username, id } = this.props;
    //NOTE: can't use article_id as it the key on request is 'id'
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <PostCommentBox
          postNewComment={this.postNewComment}
          username={username}
          article_id={id}
        />
        <CommentList
          comments={comments}
          username={username}
          deleteComment={this.deleteComment}
        />
      </>
    );
  }
  componentDidMount() {
    this.fetchCommentsByArticleId();
  }

  fetchCommentsByArticleId = () => {
    const { id } = this.props;
    console.log(this.props, "HERE");
    return api
      .getCommentsByArticleId(id)
      .then(comments => this.setState({ comments, isLoading: false }));
  };

  postNewComment = (article_id, comment) => {
    return api.postCommentToArticle(article_id, comment).then(comment => {
      this.setState(currentState => {
        return { comments: [comment, ...currentState.comments] };
      });
    });
  };

  deleteComment = comment_id => {
    // console.log("delete clicked");
    api.deleteCommentById(comment_id).then(deleted => {
      if (deleted === 204) {
        this.componentDidMount();
      }
    });
  };
}

export default CommentsByArticleId;
