import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Game from './components/game.js';
import UserStats from './components/user_stats.js';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Game} />
    <Route path="stats" component={UserStats} />
  </Route>
);