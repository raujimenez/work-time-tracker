import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";

import TopBar from "./components/TopBar";
import Signup from "./components/userCreation/Signup";
import Login from "./components/userCreation/Login";
import Dashboard from "./components/Dashboard";
import CreateTask from "./components/tasks/CreateTask";
import CreateTaskDevelopment from "./components/tasks/CreateTaskDevelopment";

function App() {
  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
      <Router>
        <TopBar />
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
            <Route path="/create-task" exact>
              <CreateTask />
            </Route>
            <Route path="/create-task/development" exact>
              <CreateTaskDevelopment /> 
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
