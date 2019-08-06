import React, { Component } from "react";
import * as api from "../../api";
import { Link } from "@reach/router";

class UserList extends Component {
  state = {
    userInfo: null,
    isLoading: true
  };

  render() {
    return this.state.isLoading ? (
      <p>Loading ......</p>
    ) : (
      <Link to={`/user/${this.state.userInfo.username}`}>
        User: {this.state.userInfo.username}
      </Link>
    );
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { user } = this.props;
    api
      .getUser(user)
      .then(userInfo => this.setState({ userInfo, isLoading: false }));
  };
}

export default UserList;
