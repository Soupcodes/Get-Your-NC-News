import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";

import Loader from "react-loader-spinner";
export default class LoadingSpinner extends React.Component {
  render() {
    return (
      <Loader type="CradleLoader" color="#00BFFF" height="100" width="100" />
    );
  }
}