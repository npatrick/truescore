import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPrompts} from '../actions/actions';

class PromptTile extends Component {


  render() {

    return (
        <div className ="prompt-tile">
        	<img src={this.props.imageUrl}/>
          <div>{this.props.query}</div>
        </div>
    );
  }
}

export default connect(null, {fetchPrompts})(PromptTile);