import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../Homepage/ArticleList";
import styles from "./styles/TopicsPage.module.css";
import SortBy from "../../components/SortBy";
import OrderBy from "../../components/OrderBy";
import TopicCard from "./TopicCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import DefaultErrorPage from "../../components/DefaultErrorPage";

class TopicsPage extends Component {
  state = {
    topics: null,
    topic: "",
    isLoading: true,
    order: "desc",
    sort_by: "created_at",
    errStatus: null,
    errMsg: null
  };

  render() {
    const { sort_by, order, topics, isLoading, errStatus, errMsg } = this.state;

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
        <div className="forms">
          <SortBy sortArticles={this.sortArticles} order={order} />
          <OrderBy orderArticles={this.orderArticles} sort_by={sort_by} />
        </div>
        <ArticleList sort_by={sort_by} order={order} />
      </>
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
    return api
      .getArticles(this.state)
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
