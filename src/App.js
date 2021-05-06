import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Reusables/Loader/Loader";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Forgot from "./components/Auth/Forgot";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Loader />
      <Switch>
        <div id="main-wrapper">
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset-password" component={Forgot} />
          <Route exact path="/" component={Dashboard} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;