import React, { Component } from "react";
import ArticleList from "./ArticleList";
import ChangePage from "../../components/Pagination";
import * as api from "../../api";

class ArticlesHomepage extends Component {
  state = {
    page: 1
  };

  render() {
    const { page } = this.state;

    return (
      <>
        <h1>Latest</h1>
        <ArticleList p={page} />
        <p>{page}</p>
        <ChangePage page={page} browsePage={this.browsePage} />
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    if (prevState.page !== page) {
      api.getArticles({ p: page });
    }
  }

  browsePage = inc_votes => {
    this.setState(currentState => {
      console.log(currentState.page + inc_votes, "<---");
      return { page: currentState.page + inc_votes };
    });
  };
}

export default ArticlesHomepage;
