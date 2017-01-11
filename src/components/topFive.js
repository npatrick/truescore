import React, { Component } from 'react';


class TopFiveTile extends Component {

  rankList(){
    // create a blank array arrayOfResults
    var arrayOfResults = [];

    // loop over array located at this.props.arrayOfUserObjects

    this.props.arrayOfUserObjects.forEach(function(userObject){
      var userName = userObject.name;
      var battingAverage = (userObject.wins - userObject.losses) / (userObject.wins + userObject.losses)

      arrayOfResults.push([userName, battingAverage])
    });

    var sortedArray = arrayOfResults.sort(function(a,b){
      return [a[1]-b[1]]})
        .slice(0,5);

      return sortedArray;
  }



  render() {

    return (
      <div className ="promptRankedList">
        <h4>{this.props.prompt.text}</h4>
          <ol>
            {this.rankList().map( (user) => {
            return(<li>{user[0]}</li>) })
            }
          </ol>
      </div>
    );
  }
}

export default TopFiveTile;
