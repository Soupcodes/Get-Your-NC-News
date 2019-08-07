import React from "react";
import { Link } from "@reach/router";

const User = ({ user }) => {
  return (
    <Link to={`/user/${user}`}>
      {" "}
      <span
        class="iconify"
        data-icon="fa-solid:user-alt"
        data-inline="false"
      />{" "}
      {user}
    </Link>
  );
};

export default User;
