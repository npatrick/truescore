import React, { Component } from 'react';
import UserStats from './user_stats.js';

import Game from './game.js'

export default class App extends Component {
  constructor (props){
    super(props);

    this.state = {catPhoto: "https://s-media-cache-ak0.pinimg.com/236x/9c/ee/56/9cee566e22a9f3eb79b6cbd22d31f242.jpg"};
  }


  render() {
    // Render test for UserStats; it must be visited from a nav link later
    return (
      <div>
        <Game catPhoto={this.state.catPhoto} />
        <UserStats />
      </div>
    );
  }
}
