// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Niel Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CompareChoices from './containers/compare_choices';
import StatsByPrompt from './containers/stats_by_prompt';
import LoginView from './components/login.js';
import PromptsContainer from './containers/prompts_container';
import Navigation from './components/navigation';
import Footer from './components/footer';
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
    <Route path="stats" components={ {main: StatsByPrompt, navigation: Navigation, footer: Footer} } onEnter={requireAuth} />
    <Route path="game" components={ {main: CompareChoices, navigation: Navigation, footer: Footer} } onEnter={requireAuth} />
    <Route path= "login" component={LoginView} />
    <Route path= "home" components={ {main: PromptsContainer, navigation: Navigation, footer: Footer} } />
    <Route path= "topFive" components={ {main: TopFive, navigation: Navigation, footer: Footer} }  onEnter={requireAuth} />

  </Route>
);
