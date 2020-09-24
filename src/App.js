import React from "react";
import LoginForm from "./components/LoginForm/loginForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
