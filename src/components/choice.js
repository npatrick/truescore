import React, { Component } from 'react';

const Choice = props => {
  console.log("choice props: ", props);
  return (
    <div className="choice-container">
      <h3>{props.name}</h3>
      <img src={props.imageUrl} />
    </div>
  )
};

export default Choice;