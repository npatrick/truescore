import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitDecision, fetchComparison } from '../actions/actions';
import Results from '../components/results.js';
  
class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {showResults: false}
  }
  submit(winnerId){
    this.props.submitDecision(winnerId);
    this.props.fetchComparison();
  }

  // renderUserStat () {
  //     if(this.props.name) {
  //       return (
  //         <Results
  //           average={Math.floor(this.props.average*100)} />
  //       );
  //     }
  // }


  render() {
    let overlay = {
      zIndex: 1,
      opacity: 0.4
    }
    return (
      <div className="choice-container">
        <h3>{this.props.name}</h3>
        <img
        onClick={() => {
          this.submit.bind(this)(this.props.id);
        }}
        src={this.props.imageUrl} />
       
      </div>
    );
  }

};


export default connect(null, { submitDecision, fetchComparison })(Choice);

