import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import styles from "./styles/UserProfile.module.css";
import ArticleList from "../Homepage/ArticleList";

class UserProfile extends Component {
  state = {
    articles: null,
    comments: null,
    user: null,
    author: null,
    isLoading: true,
    errStatus: null,
    errMsg: null
  };

  render() {
    const { user, isLoading, errStatus, errMsg } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <ul>
        <li className={styles.centerItems}>
          <h3>
            <u>User: {user.name}</u>
          </h3>
          <img src={user.avatar_url} alt="profile-pic" />
          <p>Username: {user.username}</p>
        </li>
      </ul>
    );
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.state.user;
    if (this.state.user !== prevState.user) {
      api.getArticles({ author: username }).then(articles => {
        this.setState({ articles });
      });
    }
  }

  fetchUser = () => {
    const { username } = this.props;
    api
      .getUser(username)
      .then(user =>
        this.setState({ user, isLoading: false, author: user.username })
      )
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  fetchArticles = () => {
    api
      .getArticles()
      .then(articles =>
        this.setState({
          articles,
          isLoading: false
        })
      )
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
