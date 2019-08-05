import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import styles from "./styles/TopicsList.module.css";
import SortBy from "../TopicsList/SortBy";
// import OrderBy from "../Trending/OrderBy";

class TopicsList extends Component {
  state = {
    topics: null,
    topic: "",
    isLoading: true,
    articles: null
  };

  render() {
    console.log(this.state.articles);
    return this.state.isLoading ? (
      <p>Loading ......</p>
    ) : (
      <section>
        <nav className={styles.subnav}>
          {this.state.topics.map(topic => (
            <section key={topic.slug}>
              <Link
                to={`/topics/${topic.slug}`}
              >{`${topic.slug[0].toUpperCase()}${topic.slug.slice(1)}`}</Link>
            </section>
          ))}
        </nav>
        {this.state.articles && (
          <>
            <SortBy
              sortArticles={this.sortArticles}
              topic={this.state.topic}
              className="sort"
            />
            {/* <OrderBy
              orderArticles={this.orderArticles}
              sort_by={this.state.sort_by}
              className="order"
            /> */}
            <ArticleList articles={this.state.articles} />
          </>
        )}
      </section>
    );
  }

  //mounts a blank page with topics to select from initially
  componentDidMount() {
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

  sortArticles = articles => {
    this.setState({ articles });
  };

  // orderArticles = articles => {
  //   this.setState({ articles });
  // };
}

export default TopicsList;
