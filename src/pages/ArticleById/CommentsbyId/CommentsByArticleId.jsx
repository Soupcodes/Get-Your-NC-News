import React, { Component } from "react";
import * as api from "../../../api";
import CommentList from "./CommentList";
import LoadingSpinner from "../../../components/LoadingSpinner";
import PostCommentBox from "./PostCommentForm";
import DefaultErrorPage from "../../../components/DefaultErrorPage";
import SortBy from "../../../components/SortBy";
import OrderBy from "../../../components/OrderBy";
import styles from "./styles/CommentsByArticleId.module.css";

class CommentsByArticleId extends Component {
  state = {
    comments: null,
    isLoading: true,
    errStatus: null,
    errMsg: null,
    sort_by: "created_at",
    order: "desc",
    deleted: false,
    filterSort: "comments"
  };

  render() {
    const {
      comments,
      isLoading,
      errStatus,
      errMsg,
      deleted,
      filterSort
    } = this.state;
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
        <div className={styles.forms}>
          <SortBy sortComments={this.sortComments} filterSort={filterSort} />
          <OrderBy orderComments={this.orderComments} />
        </div>
        {deleted ? (
          <p className={styles.deleted}>Your comment has been deleted !</p>
        ) : (
          <></>
        )}
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
    const { sort_by, order } = this.state;
    const { id } = this.props;
    return api
      .getCommentsByArticleId(id, { sort_by, order })
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
    return api
      .postCommentToArticle(article_id, comment)
      .then(comment => {
        this.setState(currentState => {
          return {
            comments: [comment, ...currentState.comments],
            deleted: false
          };
        });
      })
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  deleteComment = comment_id => {
    api
      .deleteCommentById(comment_id)
      .then(deleted => {
        if (deleted === 204) {
          this.setState(currentState => {
            const filterStateOnDelete = currentState.comments.filter(
              comment => {
                return comment.comment_id !== comment_id;
              }
            );
            return { comments: filterStateOnDelete, deleted: true };
          });
        }
      })
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  sortComments = sort_by => {
    this.setState({ sort_by });
  };

  orderComments = order => {
    this.setState({ order });
  };
}

export default CommentsByArticleId;
