import React from "react";
import styles from "./App.module.css";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import ArticlesHomepage from "./pages/Homepage/ArticlesHomepage";
import TrendingArticles from "./pages/Trending/TrendingArticles";
import TopicsList from "./pages/TopicsList/TopicsPage";
import UserProfilePage from "./pages/UserProfile/UserProfilePage";
import ArticleById from "./pages/ArticleById/ArticleByIdPage";
import DefaultErrorPage from "./components/DefaultErrorPage";

class App extends React.Component {
  state = {
    user: "jessjelly"
  };

  render() {
    return (
      <div className={styles.App}>
        <header>
          <div className={styles.container}>
            <Navbar user={this.state.user} />
          </div>
        </header>

        <Router>
          <ArticlesHomepage path="/" />
          <ArticlesHomepage path="/articles" />
          <TrendingArticles path="/trending" sort_by={"comment_count"} />
          <ArticleById path="/articles/:article_id" user={this.state.user} />
          <TopicsList path="topics" />
          <TopicsList path="topics" />
          <UserProfilePage path="/user/:username" />
          <DefaultErrorPage default />
        </Router>

        <div id={styles.footer}>
          <footer className={styles.nowidth}>
            <p>NC News &copy; 2019 | Designed by: Alan Tong</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
