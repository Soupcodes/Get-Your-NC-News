import React from "react";
import "./App.css";
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
          <div className="container">
            <div id="logo">
              <Link to="/">
                <img
                  src="https://t3.ftcdn.net/jpg/01/69/66/58/240_F_169665810_2qf9sivWVW0rEEzBQEXKThw1jBWD47Kx.jpg"
                  alt="fake-news"
                />
              </Link>
            </div>
            <Navbar id="globalNav" user={this.state.user} />
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
          <DefaultErrorPage path="/*" default />
        </Router>

        <footer>
          <p>NC News &copy; 2019 | Designed by: Alan Tong</p>
        </footer>
      </div>
    );
  }
}

export default App;
