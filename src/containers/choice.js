import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitDecision, fetchComparison } from '../actions/actions';
  
class Choice extends Component {

  submit(winner){
    this.props.submitDecision(winner);
    this.props.fetchComparison();
  }

  render() {

    return (
      <div className="choice-container">
        <h3>{this.props.name}</h3>
        <img
        onClick={() => this.submit.bind(this)(this.props.name)}
        src={this.props.imageUrl} />
      </div>
    );
  }

};


export default connect(null, { submitDecision, fetchComparison })(Choice);

