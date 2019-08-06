import React, { Component } from "react";
import * as api from "../../api";
import { Link } from "@reach/router";

class ArticleById extends Component {
  state = {
    article: null,
    isLoading: true
  };

  render() {
    const { article, isLoading } = this.state;
    return isLoading ? (
      <p>Loading......</p>
    ) : (
      <ul>
        <li>
          <h1>
            <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
          </h1>
        </li>
        <li>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <span>Author:</span>
          <Link to={`/user/${article.author}`}>{article.author}</Link>

          <p>Posted: {article.created_at}</p>
          <p>
            Comments: {article.comment_count} ---------NEED SPACING----------
            <span>Votes: {article.votes}</span>
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
