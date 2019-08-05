import React, { Component } from "react";
import * as api from "../../api";
import ArticleCard from "../Homepage/ArticleCard";

class TrendingArticles extends Component {
  state = {
    sort_by: "comment_count",
    articles: null
  };

  render() {
    return !this.state.articles ? (
      <p>Loading......</p>
    ) : (
      <section>
        <SortBy />
        <ArticleCard articles={this.state.articles} />
      </section>
    );
  }

  componentDidMount() {
    console.log("MOUNTING");
    api.getArticles(this.state).then(articles => this.setState({ articles }));
  }
}

export default TrendingArticles;
