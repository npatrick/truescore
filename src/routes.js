import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Game from './components/game.js';
import UserStats from './components/user_stats.js';


import App from './components/app';

export default (
  <Route path="/" component={APP} >
    <IndexRoute component={Game} />
    <Route path="stats" component={UserStats} />
  </Route>
);