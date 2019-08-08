import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import UserCard from "./UserCard";
import ArticleCard from "../Homepage/ArticleCard";

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
    const { user, isLoading, errStatus, errMsg, articles } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <UserCard user={user} />
        {articles ? (
          articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })
        ) : (
          <></>
        )}
      </>
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
