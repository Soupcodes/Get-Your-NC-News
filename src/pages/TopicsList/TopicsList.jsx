import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import styles from "./styles/TopicsList.module.css";
import SortBy from "../TopicsList/SortBy";
import OrderBy from "../TopicsList/OrderBy";
import Topic from "./Topic";
import LoadingSpinner from "../../components/LoadingSpinner";

class TopicsList extends Component {
  state = {
    topics: null,
    topic: "",
    isLoading: true,
    articles: null,
    order: "desc",
    sort_by: "created_at"
  };

  render() {
    const { sort_by, topic, order, articles, topics } = this.state;

    //Renders loading screen when fetching topicsList

    return this.state.isLoading ? (
      <LoadingSpinner />
    ) : (
      //renders topics sub-navigation once fetched, then sorting features and articles after a topic is selected
      <section>
        <nav className={styles.subnav}>
          <Topic topics={topics} />
        </nav>
        {articles && (
          <>
            <div className="forms">
              <SortBy
                sortArticles={this.sortArticles}
                topic={topic}
                order={order}
              />
              <OrderBy
                orderArticles={this.orderArticles}
                topic={topic}
                sort_by={sort_by}
              />
            </div>
            <ArticleList articles={articles} />
          </>
        )}
      </section>
    );
  }

  //mounts a blank page with topics to select from initially
  componentDidMount() {
    const { topic } = this.props;
    if (topic) {
      this.setState(currentState => {
        currentState.topic = topic;
        api
          .getArticles(currentState)
          .then(articles => this.fetchTopics({ articles }));
      });
    } else {
      this.fetchTopics();
    }
  }

  //updates the page view based on topic selected
  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.setState(currentState => {
        currentState.topic = topic;
        this.fetchArticles();
      });
    }
  }

  sortArticles = (articles, sort_by, order) => {
    this.setState({ articles, sort_by, order });
  };

  orderArticles = (articles, order, sort_by) => {
    this.setState({ articles, order, sort_by });
  };

  fetchArticles = () => {
    return api
      .getArticles(this.state)
      .then(articles => this.setState({ articles }));
  };

  fetchTopics = articles => {
    return api
      .getTopics()
      .then(topics => this.setState({ topics, isLoading: false, ...articles }));
  };
}

export default TopicsList;
