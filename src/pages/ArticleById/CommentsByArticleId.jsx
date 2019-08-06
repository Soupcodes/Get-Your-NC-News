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
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <PostCommentBox />
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
}

export default CommentsByArticleId;
