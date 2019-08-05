import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navbar from "./pages/Homepage/Components/Navbar";
import ArticlesHomepage from "./pages/Homepage/ArticlesHomepage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar className="nav" />
        </header>

        <Router>
          <ArticlesHomepage path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
