import React, { Component } from 'react';
import UserStats from './User_Stats.js';

export default class App extends Component {
  render() {
    return (
      <div>React simple started hey!
        <UserStats /> // Render test; need to be visited from a nav link later
      </div>
    );
  }
}
