import React, { Component } from "react";
import * as api from "../../api";
import styles from "./styles/TopicsPage.module.css";
import TopicsList from "./TopicsList";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";
import ArticlesByTopic from "./ArticlesByTopic";
import { Router } from "@reach/router";

class TopicsPage extends Component {
  state = {
    topics: null,
    isLoading: true,
    errStatus: null,
    errMsg: null
  };

  render() {
    const { topics, isLoading, errStatus, errMsg } = this.state;

    if (isLoading) return <LoadingSpinner />;
    if (errStatus)
      return <DefaultErrorPage errStatus={errStatus} errMsg={errMsg} />;

    return (
      <>
        <nav className={styles.subnav}>
          <section>
            <TopicsList topics={topics} />
          </section>
        </nav>
        <div className={styles.route}>
          <Router>
            <ArticlesByTopic path="/:topic" />
          </Router>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    return api
      .getTopics()
      .then(topics => this.setState({ topics, isLoading: false }))
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
