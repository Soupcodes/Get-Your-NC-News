import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";

class UserProfile extends Component {
  state = {
    user: null,
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
        <li>
          <h1>LEFT ALIGN</h1>
          <p>{user.name}</p>
          <img src={user.avatar_url} alt="profile-pic" />
          <p>{user.username}</p>
        </li>
      </ul>
    );
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { username } = this.props;
    api
      .getUser(username)
      .then(user => this.setState({ user, isLoading: false }))
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
