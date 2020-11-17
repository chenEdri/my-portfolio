import React, { Component } from "react"
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {Home} from './pages/Home.jsx';


export class App extends Component {

  render() {

    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

