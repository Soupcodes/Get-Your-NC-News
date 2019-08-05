import React, { Component } from "react";
import * as api from "../../api";
import { Link } from "@reach/router";

class UserList extends Component {
  state = {
    userInfo: null
  };

  render() {
    return (
      this.state.userInfo && (
        <Link to="/user/profile">{this.state.userInfo.username}</Link>
      )
    );
  }

  componentDidMount() {
    api.getUsers(this.props.user).then(userInfo => this.setState({ userInfo }));
  }
}

export default UserList;
