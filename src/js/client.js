import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const app = document.getElementById("app");

import App      from "./App";

import About    from "./pages/About";
import Home     from "./pages/Home";
import Sync     from "./pages/Sync";
import Start    from "./pages/Start";
import Schedule from "./pages/Schedule";
import Edit     from "./pages/Edit";
import Practice from "./pages/Practice";


ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/"component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/sync" component={Sync}/>
      <Route path="/start" component={Start}/>
      <Route path="/schedule" component={Schedule}/>
      <Route path="/edit" component={Edit}/>
      <Route path="/practice" component={Practice}/>
      <Route path="*" component={Home}/>
    </Route>
  </Router>
), app);
