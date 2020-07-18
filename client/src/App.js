import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";

import TopBar from "./components/TopBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <TopBar />

        <Router>
          <Switch>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
