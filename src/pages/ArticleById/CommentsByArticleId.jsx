import React, { Component } from "react";
import * as api from "../../api";
import CommentList from "./CommentList";
import LoadingSpinner from "../Assets/LoadingSpinner";
import PostCommentBox from "./PostCommentBox";

class CommentsByArticleId extends Component {
  state = {
    comments: null,
    isLoading: true
  };

  render() {
    const { comments, isLoading } = this.state;
    const { username, id } = this.props;
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <PostCommentBox
          postNewComment={this.postNewComment}
          username={username}
          id={id}
        />
        <CommentList comments={comments} />
      </>
    );
  }
  componentDidMount() {
    this.fetchCommentsByArticleId();
  }

  fetchCommentsByArticleId = () => {
    const { id } = this.props;
    return api
      .getCommentsByArticleId(id)
      .then(comments => this.setState({ comments, isLoading: false }));
  };

  postNewComment = (id, comment) => {
    return api.postCommentToArticle(id, comment).then(comment => {
      this.setState(currentState => {
        return { comments: [comment, ...currentState.comments] };
      });
    });
  };
}

export default CommentsByArticleId;
