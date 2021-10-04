import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Post";
import Posts from "./Posts";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
