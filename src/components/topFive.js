import React, { Component } from 'react';
// let array = ["thing a", "thing b"]

class TopFiveTile extends Component {
  render() {
    console.log("this.props from topfive", this.props.arrayOfNames)



    return (
      <div className ="promptRankedList">
        <h6>{this.props.prompt}</h6>
          <ol>
            {this.props.arrayOfNames.map( (name) => {
            return(<li>{name.name}</li>) })
            }
          </ol>
      </div>
    );
  }
}

export default TopFiveTile;
