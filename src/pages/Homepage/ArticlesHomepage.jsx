import React, { Component } from "react";
import * as api from "../../api";
import ArticleCard from "./ArticleCard";

class ArticlesHomepage extends Component {
  state = {
    articles: null,
    isLoading: true,
    sort_by: ""
  };

  render() {
    console.log("RENDERING");
    return this.state.isLoading ? (
      <p>Loading ......</p>
    ) : (
      <section>
        <ArticleCard articles={this.state.articles} />
      </section>
    );
  }

  componentDidMount() {
    console.log("MOUNTING");
    api
      .getArticles()
      .then(articles => this.setState({ articles, isLoading: false }));
  }

  // componentDidUpdate(prevProps) {
  //   console.log(this.props);
  //   if (prevProps.path !== this.props.path) {
  //     this.setState({});
  //     api
  //       .getArticles(this.state)
  //       .then(articles => console.log(articles, "UPDATE"));
  //   }
  // }
}

export default ArticlesHomepage;
