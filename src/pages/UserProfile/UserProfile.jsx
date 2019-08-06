import React, { Component } from "react";
import * as api from "../../api";

class UserProfile extends Component {
  state = {
    user: null,
    isLoading: true
  };

  render() {
    return this.state.isLoading ? (
      <p>Loading......</p>
    ) : (
      <ul>
        <li>
          <h1>LEFT ALIGN</h1>
          <p>{this.state.user.name}</p>
          <img src={this.state.user.avatar_url} alt="profile-pic" />
          <p>{this.state.user.username}</p>
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
