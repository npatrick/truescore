import React, { Component } from 'react';
import { connect } from 'react-redux';


class TopFiveTile extends Component {

  rankList(){
    // create a blank array arrayOfResults
    let people = this.props.people.slice();



    people.forEach((person) => {
      var battingAverage = +person.wins / (+person.wins + +person.losses) || 0;
      person.battingAverage = battingAverage;
      person.imageUrl = this.props.users.filter(user => user.id === person.id)[0].imageUrl;

      console.log("PERSON IMAGE: ", person.imageUrl);

    });

      return people.sort((a, b) => b.battingAverage - a.battingAverage )
      .slice(0,5);
  }



  render() {

    return (
      <div className ="promptRankedList col-lg-3 col-md-4 col-sm-6">
        <h4>{this.props.prompt.title}</h4>
        <div>
          <ol>
            {this.rankList().map( (person, index) => 
              <li key={index}><img src={person.imageUrl} alt=""/>{person.name}</li> ) }
          </ol>
        </div>
          
      </div>
    );
  }
}

function mapStateToProps(state){
  return {users: state.users};
}

export default connect(mapStateToProps)(TopFiveTile);
