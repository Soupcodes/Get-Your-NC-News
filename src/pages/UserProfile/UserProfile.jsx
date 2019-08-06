import React, { Component } from "react";
import * as api from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";

class UserProfile extends Component {
  state = {
    user: null,
    isLoading: true
  };

  render() {
    const { user, isLoading } = this.state;
    return isLoading ? (
      <LoadingSpinner />
    ) : (
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
      .then(user => this.setState({ user, isLoading: false }));
  };
}

export default UserProfile;
