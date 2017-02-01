import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const app = document.getElementById("app");

import App from "./App";

import About from "./pages/About";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Start from "./pages/Start";
import Schedule from "./pages/Schedule";
import Edit from "./pages/Edit";
import Practice from "./pages/Practice";

const data = [
  {
    id: 1,
    name: 'Practice Name 1',
    desc: 'Practice description',
    startDate: '19/10/2016',
    finishDate: '',
    updateDate: '19/10/2016',
    scheduleDate: '19/01/2017',
    repetitionTotal: 100,
    repetitionScheduled: 10,
    repetitionLast: 5,
    asa: 'asd',
    img: 'http://placehold.it/64x64'
  },
  {
    id: 2,
    name: 'Practice Name 2',
    desc: 'Practice description',
    startDate: '19/10/2016',
    finishDate: '',
    updateDate: '19/10/2016',
    scheduleDate: '19/01/2017',
    repetitionTotal: 200,
    repetitionScheduled: 20,
    repetitionLast: 12,
    img: 'http://placehold.it/64x64'
  },
  {
    id: 3,
    name: 'Practice Name 3',
    desc: 'Practice description',
    startDate: '19/10/2016',
    finishDate: '',
    updateDate: '19/10/2016',
    scheduleDate: '19/01/2017',
    repetitionTotal: 300,
    repetitionScheduled: 30,
    repetitionLast: 1,
    img: 'http://placehold.it/64x64'
  }
];

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home} data={data} />
      <Route path="/about" component={About} pageTitle="About page" />
      <Route path="/settings" component={Settings} />
      <Route path="/start" component={Start} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/edit" component={Edit} />
      <Route path="/practice/:id" component={Practice} data={data} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
), app);



