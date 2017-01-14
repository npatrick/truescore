import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrompt, throttledFetchStatsByPrompt } from '../actions/actions';

class MiniPromptList extends Component {

  render() {
  	const miniPic = {
  		maxWidth: '100%',
  		height: 'auto',
  		display: 'inline',
  		'marginLeft': 'auto',
  		'marginRight': 'auto',
      borderRadius: '12px'

  	}

    return (
        <label className={this.props.onActive}
        	onClick={() => {
            this.props.updatePrompt(this.props.prompt);
            this.props.throttledFetchStatsByPrompt(this.props.prompt.id);
          }}>
        	<img className="mini-prompt-tile" style={miniPic} src={this.props.tileImage}/>
          <input type="radio" name="options" autoComplete="off" />
        </label>
    );
  }
}



export default connect(null, { updatePrompt, throttledFetchStatsByPrompt })(MiniPromptList);

//connection(state, action)(component)
