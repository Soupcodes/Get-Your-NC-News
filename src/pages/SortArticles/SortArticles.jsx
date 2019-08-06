import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import SortBy from "../SortArticles/SortBy";
import OrderBy from "../SortArticles/OrderBy";

class SortArticles extends Component {
  state = {
    articles: null,
    isLoading: true,
    sort_by: "",
    order: "desc"
  };

  render() {
    return this.state.isLoading ? (
      <p>Loading ......</p>
    ) : (
      <section>
        <div className="forms">
          <SortBy sortArticles={this.sortArticles} />
          <OrderBy
            orderArticles={this.orderArticles}
            sort_by={this.state.sort_by}
          />
        </div>
        <ArticleList articles={this.state.articles} />
      </section>
    );
  }

  componentDidMount() {
    console.log("MOUNTING");
    console.log(this.props.sort_by, "SORTING BY THIS IN SORTARTICLES");
    this.setState(currentState => {
      currentState.sort_by = this.props.sort_by;
      api
        .getArticles(currentState)
        .then(articles => this.setState({ articles, isLoading: false }));
    });
  }

  sortArticles = articles => {
    this.setState({ articles });
  };

  orderArticles = articles => {
    this.setState({ articles });
  };
}

export default SortArticles;
