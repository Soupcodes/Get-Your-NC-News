import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import ArticlesHomepage from "./pages/Homepage/ArticlesHomepage";
import TrendingArticles from "./pages/Trending/TrendingArticles";
import SortArticles from "./pages/SortArticles/SortArticles";
import TopicsList from "./pages/TopicsList/TopicsList";
import UserProfile from "./pages/UserProfile/UserProfile";
import ArticleById from "./pages/ArticleById/ArticleByIdPage";

class App extends React.Component {
  state = {
    user: "jessjelly"
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar className="nav" user={this.state.user} />
        </header>

        <Router>
          <ArticlesHomepage path="/" />
          <TrendingArticles path="/trending" />
          <SortArticles path="/sort_articles_by/:sort_by" />
          <ArticleById path="/articles/:article_id" user={this.state.user} />
          <TopicsList path="topics" />
          <TopicsList path="topics/:topic" />
          <UserProfile path="/user/:username" />
        </Router>
      </div>
    );
  }
}

export default App;
