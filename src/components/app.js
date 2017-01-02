import React, { Component } from 'react';

import Game from './game.js'
import UserStats from './user_stats.js';
import CompareChoices from '../containers/compare_choices';

export default class App extends Component {
  constructor (props){
    super(props);

    
  }


  render() {
    // Render test for UserStats; it must be visited from a nav link later
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
