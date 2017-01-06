import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Game from './components/game.js';
import UserStats from './components/user_stats.js';
import CompareChoices from './containers/compare_choices';
import StatsListItem from './components/stats_list_item.js';
import PromptList from './containers/prompt_list';
import SignupView from './components/signup.js';
import LoginView from './components/login.js';
import PromptContainer from './containers/prompt_container';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={LoginView} />
    <Route path="stats" component={PromptList} />
    <Route path="game" component={CompareChoices} />
    <Route path="signup" component={SignupView} />
    <Route path= "login"component={LoginView} />
    <Route path= "home"component={PromptContainer} />

  </Route>
);
