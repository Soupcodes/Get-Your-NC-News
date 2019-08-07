import React from "react";
import styles from "./App.module.css";
import { Router, Link } from "@reach/router";
import Navbar from "./components/Navbar";
import ArticlesHomepage from "./pages/Homepage/ArticlesHomepage";
import TrendingArticles from "./pages/Trending/TrendingArticles";
import SortArticles from "./pages/SortArticles/SortArticles";
import TopicsList from "./pages/TopicsList/TopicsPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import ArticleById from "./pages/ArticleById/ArticleByIdPage";
import DefaultErrorPage from "./components/DefaultErrorPage";

class App extends React.Component {
  state = {
    user: "jessjelly"
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link to="/">
                <span
                  className="iconify"
                  data-icon="emojione-monotone:newspaper"
                  data-inline="false"
                />
              </Link>
            </div>
            <Navbar className={styles.nav} user={this.state.user} />
          </div>
        </header>

        <Router>
          <ArticlesHomepage path="/" />
          <ArticlesHomepage path="/articles" />
          <TrendingArticles path="/trending" sort_by={"comment_count"} />
          <SortArticles path="/sort_articles_by/:sort_by" />
          <ArticleById path="/articles/:article_id" user={this.state.user} />
          <TopicsList path="topics" />
          <TopicsList path="topics/:topic" />
          <UserProfile path="/user/:username" />
          <DefaultErrorPage default />
        </Router>

        <footer>
          <p className={styles.nowidth}>
            NC News &copy; 2019 | Designed by: Alan Tong
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
