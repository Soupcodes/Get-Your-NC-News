import React, { Component } from "react";
import * as api from "../../api";
import styles from "./styles/TopicsPage.module.css";
import SortBy from "../../components/SortBy";
import OrderBy from "../../components/OrderBy";
import TopicCard from "./TopicCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import ArticleCard from "../Homepage/ArticleCard";

class TopicsPage extends Component {
  state = {
    topics: null,
    topic: "",
    isLoading: true,
    articles: null,
    order: "desc",
    sort_by: "created_at",
    errStatus: null,
    errMsg: null
  };

  render() {
    const { articles, topics, isLoading, errStatus, errMsg } = this.state;

    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      //renders topics sub-navigation once fetched, then sorting features and articles after a topic is selected
      <>
        <nav className={styles.subnav}>
          <section className={styles.minHeight}>
            <TopicCard topics={topics} />
          </section>
        </nav>
        <div className={styles.minHeight}>
          {articles && (
            <>
              <div className={styles.forms}>
                <SortBy sortArticles={this.sortArticles} />
                <OrderBy orderArticles={this.orderArticles} />
              </div>
              {articles.map(article => {
                return (
                  <ArticleCard article={article} key={article.article_id} />
                );
              })}
            </>
          )}
        </div>
      </>
    );
  }

  //mounts a blank page with topics to select from initially
  componentDidMount() {
    const { topic } = this.props;
    if (topic) {
      this.setState(currentState => {
        const { order, sort_by } = currentState;
        api
          .getArticles({ order, sort_by, topic })
          .then(articles => this.fetchTopics({ articles }));
      });
    } else {
      this.fetchTopics();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;
    const { topic } = this.props;

    if (prevProps.topic !== topic) {
      this.setState(currentState => {
        currentState.topic = topic;
        this.fetchArticles();
      });
    }

    if (prevState.sort_by !== sort_by || prevState.order !== order) {
      this.fetchArticles();
    }
  }

  sortArticles = sort_by => {
    this.setState({ sort_by });
  };

  orderArticles = order => {
    this.setState({ order });
  };

  selectTopic = topic => {
    this.setState({ topic });
  };

  fetchArticles = () => {
    const { order, sort_by, topic } = this.state;
    return api
      .getArticles({ order, sort_by, topic })
      .then(articles => this.setState({ articles }))
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };

  fetchTopics = articles => {
    return api
      .getTopics()
      .then(topics => this.setState({ topics, isLoading: false, ...articles }))
      .catch(({ response }) =>
        this.setState({
          errStatus: response.status,
          errMsg: response.data.msg,
          isLoading: false
        })
      );
  };
}

export default TopicsPage;
