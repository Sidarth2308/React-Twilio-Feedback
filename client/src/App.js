import React from 'react';
import {Feedback, Home} from "./components";
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/"  exact>
          <Home />
        </Route>
        <Route path="/feedback" exact >
          <Feedback />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
