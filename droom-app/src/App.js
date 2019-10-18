import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Switch} from "react-router-dom";

import LogIn from "./components/Forms/LogIn";
import HomePage from "./components/private/HomePage";
import  PrivateRoute  from "./components/private/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={LogIn} />
        <PrivateRoute exact path="/homepage" component={HomePage}/>

      </div>
    </Router>
  );
}

export default App;
