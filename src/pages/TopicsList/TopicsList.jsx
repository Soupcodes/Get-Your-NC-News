import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import styles from "./styles/TopicsList.module.css";
import SortBy from "../TopicsList/SortBy";
import OrderBy from "../TopicsList/OrderBy";
import Topic from "./Topic";

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
    const { sort_by, topic, order } = this.state;

    //Renders loading screen when fetching topicsList

    return this.state.isLoading ? (
      <p>Loading ......</p>
    ) : (
      //renders topics sub-navigation once fetched, then sorting features and articles after a topic is selected
      <section>
        <nav className={styles.subnav}>
          <Topic topics={this.state.topics} />
        </nav>
        {this.state.articles && (
          <>
            <SortBy
              sortArticles={this.sortArticles}
              topic={this.state.topic}
              order={order}
            />
            <OrderBy
              orderArticles={this.orderArticles}
              topic={topic}
              sort_by={sort_by}
            />
            <ArticleList articles={this.state.articles} />
          </>
        )}
      </section>
    );
  }

  //mounts a blank page with topics to select from initially
  componentDidMount() {
    console.log("MOUNTING");
    api.getTopics().then(topics => this.setState({ topics, isLoading: false }));
  }

  //updates the page view based on topic selected
  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.setState(currentState => {
        currentState.topic = topic;
        api
          .getArticles(currentState)
          .then(articles => this.setState({ articles }));
      });
    }
  }

  sortArticles = (articles, sort_by, order) => {
    this.setState({ articles, sort_by, order });
  };

  orderArticles = (articles, order, sort_by) => {
    this.setState({ articles, order, sort_by });
  };
}

export default TopicsList;
