import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import UserCard from "./UserCard";
import ArticleList from "../Homepage/ArticleList";

class UserProfile extends Component {
  state = {
    articles: null,
    user: null,
    isLoading: true,
    errStatus: null,
    errMsg: null
  };

  render() {
    const { user, isLoading, errStatus, errMsg, articles } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <UserCard user={user} />
        {articles ? <ArticleList articles={articles} /> : <></>}
      </>
    );
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    const { username } = this.props;
    if (prevProps.username !== username) {
      this.fetchUser();
    }
  }

  fetchUser = () => {
    const { username } = this.props;
    api
      .getUser(username)
      .then(user => {
        this.setState({ user, isLoading: false, author: username });
        return this.fetchArticles();
      })
      .then(articles => {
        this.setState({ articles });
      })
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  fetchArticles = () => {
    const { username } = this.props;
    api
      .getArticles({ author: username })
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
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
}

export default UserProfile;
