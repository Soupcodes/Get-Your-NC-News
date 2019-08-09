import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import UserCard from "./UserCard";
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
    console.log("1 - mounting");
    this.fetchUser();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      prevProps.username,
      "4 updating with username passed through props (link)"
    );
    const { username } = this.state.user;
    if (this.state.user !== prevState.user) {
      console.log(prevProps.username, "5 state changes");
      this.fetchArticles({ author: username });
    }

    if (prevProps.username !== this.props.username) {
      this.fetchArticles({ author: this.props.username });
    }
  }

  fetchUser = () => {
    const { username } = this.props;
    console.log(
      username,
      "<---- 2 - fetching user based on username passed through props"
    );
    api
      .getUser(username)
      .then(user => {
        console.log(user, "3 - setting state with this user");
        this.setState({ user, isLoading: false, author: username });
      })
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  fetchArticles = author => {
    console.log("6 fetching articles by author?");
    api
      .getArticles(author)
      .then(articles => {
        console.log(articles, "What is here?");
        this.setState({
          articles,
          isLoading: false,
          author: author.author
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
