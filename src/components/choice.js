import React, { Component } from 'react';

const Choice = props => {
  return (
    <div className="choice-container">
      <h3>Mr. Meow</h3>
      <img src={props.catPhoto}/>
    </div>
  )
};

export default Choice;