import React from "react";
import { Link } from "@reach/router";

const User = ({ user }) => {
  return <Link to={`/user/${user}`}>User: {user}</Link>;
};

export default User;
