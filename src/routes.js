import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UserStats from './components/user_stats.js';
import CompareChoices from './containers/compare_choices';
import StatsListItem from './components/stats_list_item.js';
import StatsByPrompt from './containers/stats_by_prompt';
import LoginView from './components/login.js';
import PromptsContainer from './containers/prompts_container';
import Privacy from './components/privacy_policy';

import { store } from './index';

function requireAuth(nextState, replace) {
  if (!store.getState().currentUser.id) { //if !user, then redirect to #/#/login
    // console.log("state is", store.getState());
    replace({ nextPathname: nextState.location.pathname }, '/#/login')
  }

}

// onEnter={requireAuth}

export default (
  <Route path="/" component={App} >
    <IndexRoute component={LoginView} />
    <Route path="stats" component={StatsByPrompt}  onEnter={requireAuth} />
    <Route path="game" component={CompareChoices} onEnter={requireAuth} />
    <Route path= "login" component={LoginView} />
    <Route path= "home" component={PromptsContainer} />
    <Route path= "privacy" component={Privacy}  onEnter={requireAuth} />

  </Route>
);
