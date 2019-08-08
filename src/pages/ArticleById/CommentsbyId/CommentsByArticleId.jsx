import React, { Component } from "react";
import * as api from "../../../api";
import CommentList from "./CommentList";
import LoadingSpinner from "../../../components/LoadingSpinner";
import PostCommentBox from "./PostCommentForm";
import DefaultErrorPage from "../../../components/DefaultErrorPage";
import SortComments from "./SortComments";
import OrderComments from "./OrderComments";
import "./styles/CommentsByArticleId.module.css";

class CommentsByArticleId extends Component {
  state = {
    comments: null,
    isLoading: true,
    errStatus: null,
    errMsg: null,
    sort_by: "created_at",
    order: "desc"
  };

  render() {
    const { comments, isLoading, errStatus, errMsg } = this.state;
    const { username, id } = this.props;
    //NOTE: can't use article_id as it the key on request is 'id'

    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <PostCommentBox
          postNewComment={this.postNewComment}
          username={username}
          article_id={id}
        />
        <div className="forms">
          <SortComments sortComments={this.sortComments} />
          <OrderComments orderComments={this.orderComments} />
        </div>
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

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;
    if (prevState.sort_by !== sort_by || prevState.order !== order) {
      this.fetchCommentsByArticleId();
    }
  }

  fetchCommentsByArticleId = () => {
    const { id } = this.props;
    return api
      .getCommentsByArticleId(id, this.state)
      .then(comments => this.setState({ comments, isLoading: false }))
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  postNewComment = (article_id, comment) => {
    return api.postCommentToArticle(article_id, comment).then(comment => {
      this.setState(currentState => {
        return { comments: [comment, ...currentState.comments] };
      });
    });
  };

  deleteComment = comment_id => {
    api.deleteCommentById(comment_id).then(deleted => {
      if (deleted === 204) {
        this.setState(currentState => {
          const filterStateOnDelete = currentState.comments.filter(comment => {
            return comment.comment_id !== comment_id;
          });
          return { comments: filterStateOnDelete };
        });
      }
    });
  };

  sortComments = sort_by => {
    this.setState({ sort_by });
  };

  orderComments = order => {
    this.setState({ order });
  };
}

export default CommentsByArticleId;
