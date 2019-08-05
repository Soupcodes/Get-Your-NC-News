import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";

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
        {this.state.topics.map(topic => (
          <section key={topic.slug}>
            <Link
              to={`/topics/${topic.slug}`}
            >{`${topic.slug[0].toUpperCase()}${topic.slug.slice(1)}`}</Link>
          </section>
        ))}
        {this.state.articles && <ArticleList articles={this.state.articles} />}
      </section>
    );
  }

  componentDidMount() {
    api.getTopics().then(topics => this.setState({ topics, isLoading: false }));
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    console.log(prevProps, "PREV");
    if (prevProps.topic !== topic) {
      this.setState(currentState => {
        currentState.topic = topic;
        api
          .getArticles(currentState)
          .then(articles => this.setState({ articles }));
      });
    }
  }
}

export default TopicsList;
