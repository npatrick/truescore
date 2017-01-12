import React, { Component } from 'react';


class TopFiveTile extends Component {

  rankList(){
    // create a blank array arrayOfResults
    var arrayOfResults = [];

    // loop over array located at this.props.arrayOfUserObjects

    this.props.arrayOfUserObjects.forEach(function(userObject){
      var userName = userObject.name;
      // add a "+" in front of a variable to type convert a potential "null" to 0;
      var battingAverage = +userObject.wins / (+userObject.wins + +userObject.losses) || 0;

      arrayOfResults.push([userName, battingAverage])
    });

    console.log("____arrayOfResults", arrayOfResults);

    var sortedArray = arrayOfResults.sort(function(a,b){ return b[1] - a[1] })
        .slice(0,5);

      return sortedArray;
  }



  render() {

    return (
      <div className ="promptRankedList">
        <h4>{this.props.prompt.title}</h4>
          <ol>
            {this.rankList().map( (user, index) => {
            return(<li key={index}>{user[0]}</li>) })
            }
          </ol>
      </div>
    );
  }
}

export default TopFiveTile;
