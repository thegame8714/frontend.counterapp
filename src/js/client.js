import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

const app = document.getElementById("app");

import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Sync from "./pages/Sync";


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}/>
      <Route path="sync" component={Sync}/>
    </Route>
  </Router>
), app);
