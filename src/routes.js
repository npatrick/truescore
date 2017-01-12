import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CompareChoices from './containers/compare_choices';
import StatsByPrompt from './containers/stats_by_prompt';
import LoginView from './components/login.js';
import PromptsContainer from './containers/prompts_container';
import Navigation from './components/navigation';
import TopFive from './containers/top_five_container';

import { store } from './index';

function requireAuth(nextState, replace) {
  if (!store.getState().currentUser.id) { //if !user, then redirect to #/#/login
    replace({ nextPathname: nextState.location.pathname }, '/#/login')
  }
}

export default (
  <Route path="/" component={App} >
    <IndexRoute components={ {main: LoginView } } />
    <Route path="stats" components={ {main: StatsByPrompt, navigation: Navigation} } onEnter={requireAuth} />
    <Route path="game" components={ {main: CompareChoices, navigation: Navigation} } onEnter={requireAuth} />
    <Route path= "login" component={LoginView} />
    <Route path= "home" components={ {main: PromptsContainer, navigation: Navigation} } />
    <Route path= "topFive" components={ {main: TopFive, navigation: Navigation} }  onEnter={requireAuth} />

  </Route>
);
