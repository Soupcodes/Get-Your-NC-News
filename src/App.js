import React from "react";
import styles from "./App.module.css";
import { Router, Link } from "@reach/router";
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
      <div className="App">
        <header className="App-header">
          <div className={styles.container}>
            
            <Navbar user={this.state.user} />
          </div>
        </header>

        {/* <section className={styles.minHeight}> */}
        <Router>
          <ArticlesHomepage path="/" />
          <ArticlesHomepage path="/articles" />
          <TrendingArticles path="/trending" sort_by={"comment_count"} />
          <ArticleById path="/articles/:article_id" user={this.state.user} />
          <TopicsList path="topics" />
          <TopicsList path="topics/:topic" />
          <UserProfilePage path="/user/:username" />
          <DefaultErrorPage default />
        </Router>
        {/* </section> */}

        <footer id={styles.footer}>
          <p className={styles.nowidth}>
            NC News &copy; 2019 | Designed by: Alan Tong
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
