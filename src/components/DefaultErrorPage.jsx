import React from "react";
import styles from "./styles/DefaultErrorPage.module.css";

const DefaultErrorPage = ({ errStatus, errMsg }) => {
  if (errStatus && errMsg) {
    return (
      <div className={styles.center}>
        <h1>
          <u>ERROR {errStatus}</u>
        </h1>
        <h2>{errMsg} please hang up and try again later...</h2>
      </div>
    );
  }
};

export default DefaultErrorPage;
