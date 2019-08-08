import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import * as api from "../../api";

class ArticleList extends Component {
  state = {
    articles: null,
    isLoading: true,
    errStatus: null,
    errMsg: null
  };

  render() {
    const { isLoading, articles, errStatus, errMsg } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return articles.map(article => {
      return <ArticleCard article={article} key={article.article_id} />;
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    const { sort_by, order } = this.props;
    if (prevProps.sort_by !== sort_by || prevProps.order !== order) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    api
      .getArticles(this.props)
      .then(articles =>
        this.setState({
          articles,
          isLoading: false
        })
      )
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };
}

export default ArticleList;
