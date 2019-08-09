import React from "react";

const DefaultErrorPage = ({ errStatus, errMsg }) => {
  if (errStatus && errMsg) {
    return (
      <>
        <h1>
          <u>ERROR {errStatus}</u>
        </h1>
        <h2>{errMsg} please hang up and try again later...</h2>
      </>
    );
  }
};

export default DefaultErrorPage;
