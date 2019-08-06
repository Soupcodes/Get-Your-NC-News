import React from "react";

const DefaultErrorPage = ({ errStatus, errMsg }) => {
  return (
    <section>
      <h1>
        <u>ERROR {errStatus}</u>
        <br />
        {errMsg}, please hang up and try again later...
      </h1>
    </section>
  );
};

export default DefaultErrorPage;
