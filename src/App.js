import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import React from "react";
import SearchPage from "./SearchPage";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
