import React, { Component } from "react";
import * as api from "../../api";
import { Link } from "@reach/router";

class ArticleById extends Component {
  state = {
    article: null,
    isLoading: true
  };

  render() {
    return this.state.isLoading ? (
      <p>Loading......</p>
    ) : (
      <ul>
        <li>
          <h1>
            <Link to={`/topics/${this.state.article.topic}`}>
              {this.state.article.topic}
            </Link>
          </h1>
        </li>
        <li>
          <h2>{this.state.article.title}</h2>
          <p>{this.state.article.body}</p>
          <p>Written by: {this.state.article.author}</p>
          <p>Posted: {this.state.article.created_at}</p>
          <p>
            Comments: {this.state.article.comment_count} ---------NEED
            SPACING----------
            <span>Votes: {this.state.article.votes}</span>
          </p>
        </li>
      </ul>
    );
  }

  componentDidMount() {
    console.log(this.props, "PROP ID");
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => this.setState({ article, isLoading: false }));
  }
}

export default ArticleById;
