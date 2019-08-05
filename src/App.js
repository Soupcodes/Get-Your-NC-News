import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navbar from "./pages/Homepage/Navbar";
import ArticlesHomepage from "./pages/Homepage/ArticlesHomepage";

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
          <ArticlesHomepage path="/articles" />
          <TrendingArticles path="/articles/trending" />
          {/* <UserProfile /> */}
        </Router>
      </div>
    );
  }
}

export default App;
