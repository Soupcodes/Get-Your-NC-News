import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api";

class TopicsList extends Component {
  state = {
    topics: null,
    isLoading: true
  };

  render() {
    return this.state.isLoading ? (
      <p>Loading ......</p>
    ) : (
      this.state.topics.map(topic => (
        <section key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
        </section>
      ))
    );
  }

  componentDidMount() {
    api.getTopics().then(topics => this.setState({ topics, isLoading: false }));
  }
}

export default TopicsList;
