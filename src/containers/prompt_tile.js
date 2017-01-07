import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrompt } from '../actions/actions';
//import { fetchPrompts } from '../actions/actions';

class PromptTile extends Component {

  render() {

    return (
        <div className ="prompt-tile"
        onClick={() => this.props.updatePrompt(this.props.prompt)}>
        	<img src={this.props.tileImage}/>
          <h3>{this.props.text}</h3>
        </div>
    );
  }
}

export default connect(null, { updatePrompt })(PromptTile);

//connection(state, action)(component)