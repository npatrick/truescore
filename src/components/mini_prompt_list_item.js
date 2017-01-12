import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrompt, throttledFetchStatsByPrompt } from '../actions/actions';

class MiniPromptList extends Component {

  render() {
  	const miniPic = {
  		height: '50px',
  		width: '50px',
  		display: 'block',
  		'marginLeft': 'auto',
  		'marginRight': 'auto'

  	}
    console.log('IS THERE ANYONE HERE??', this.props);

    return (
        <label className={this.props.onActive}
        	onClick={() => {
            this.props.updatePrompt(this.props.prompt);
            this.props.throttledFetchStatsByPrompt(this.props.prompt.id);
          }}>
        	<img className="miniPrompt" style={miniPic} src={this.props.tileImage}/>
          <input type="radio" name="options" autoComplete="off" />
        </label>
    );
  }
}



export default connect(null, { updatePrompt, throttledFetchStatsByPrompt })(MiniPromptList);

//connection(state, action)(component)
