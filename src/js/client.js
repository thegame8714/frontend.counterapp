import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import LayoutPage from "./pages/Layout";
const app = document.getElementById("app");

render((
  <Router history={browserHistory}>
    <Route path="/" component={LayoutPage}>
    </Route>
  </Router>
), app);
