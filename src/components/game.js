////////////////////////
//
// DO NOT USE
//
// DO NOT USE
//
////////////////////////

import React, { Component } from 'react';
import Choice from '../containers/choice.js'

const Game = props => {
  let choices = [props.catPhoto, props.catPhoto].map((url, index) => <Choice catPhoto={url} />)
  return (

    <div className="game-container">
      <h2 className="game-info">This should be replaced by dynamic prompt</h2>
      <div className="game-comparison">
        {choices}
      </div>
    </div>

  )

};


export default Game


////////////////////////
//
// DO NOT USE
//
// DO NOT USE
//
////////////////////////
