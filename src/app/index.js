import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Feature from "../feature";
import Home from "../home";
import {Header} from './components'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path={process.env.REACT_APP_HOME} component={Home}/>
        <Route path={process.env.REACT_APP_FEATURE} component={Feature}/>
      </Switch>
    </Router>
  );
}

export default App;
