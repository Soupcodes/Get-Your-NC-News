import React, { Component } from "react";
import * as api from "../../api";
import ArticleCard from "../Homepage/ArticleList";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";
import "./styles/TrendingArticles.css";

class TrendingArticles extends Component {
  state = {
    sort_by: "comment_count",
    order: "desc",
    articles: null
  };

  render() {
    console.log("rendering");
    return !this.state.articles ? (
      <p>Loading......</p>
    ) : (
      <section>
        <div className="forms">
          <SortBy sortArticles={this.sortArticles} className="sort" />
          <OrderBy
            orderArticles={this.orderArticles}
            sort_by={this.state.sort_by}
            className="order"
          />
        </div>
        <ArticleCard articles={this.state.articles} />
      </section>
    );
  }

  componentDidMount() {
    console.log("MOUNTING");
    api.getArticles(this.state).then(articles => this.setState({ articles }));
  }

  sortArticles = (sort_by, articles) => {
    this.setState({ sort_by, articles });
  };

  orderArticles = (order, articles) => {
    this.setState({ order, articles });
  };
}

export default TrendingArticles;
