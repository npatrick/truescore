// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Niel Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, { Component } from 'react';


class TopFiveTile extends Component {

  rankList(){
    var arrayOfResults = [];

    this.props.arrayOfUserObjects.forEach(function(userObject){
      var userName = userObject.name;
      var battingAverage = +userObject.wins / (+userObject.wins + +userObject.losses) || 0;

      arrayOfResults.push([userName, battingAverage])
    });

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
