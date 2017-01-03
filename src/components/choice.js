import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitDecision } from '../actions/actions';
  
class Choice extends Component {

  render() {

    return (
      <div className="choice-container">
        <h3>{this.props.name}</h3>
        <img
        onClick={() => this.props.submitDecision(this.props.name)}
        src={this.props.imageUrl} />
      </div>
    );
  }

};


export default connect(null, { submitDecision })(Choice);

