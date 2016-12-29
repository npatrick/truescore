import React, { Component } from 'react';
import Choice from './choice.js'

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {catPhoto: "https://s-media-cache-ak0.pinimg.com/236x/9c/ee/56/9cee566e22a9f3eb79b6cbd22d31f242.jpg"};
  }

  render() {
    return (

      <div className="game-container">
        <h2 className="game-info">Sincerity</h2>
        <div className="game-comparison">
          <Choice catPhoto={this.state.catPhoto} />
          <Choice catPhoto={this.state.catPhoto} />
        </div>
      </div>
    




    );
  }

} 


export default Game