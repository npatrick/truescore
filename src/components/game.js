import React, { Component } from 'react';
import Choice from './choice.js'

const Game = props => {
  let choices = [props.catPhoto, props.catPhoto].map((url, index) => <Choice catPhoto={url} />)
  return (

    <div className="game-container">
      <h2 className="game-info">Sincerity</h2>
      <div className="game-comparison">
        {choices}
      </div>
    </div>

  )

};


export default Game