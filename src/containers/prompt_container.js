import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrompts } from '../actions/actions';

import PromptTile from './prompt_tile'

class PromptContainer extends  Component {

  componentWillMount() {
    this.props.fetchPrompts();
  }

	renderPrompts () {
    console.log('PROMPT CONTAINER OUTSIDE: ', this.props);
		return this.props.prompt.map((prompt) => {
      console.log('MAPPING PROMPT: ', prompt);
			return(
				<PromptTile
				imageUrl={prompt.tileimage}
				query={prompt.text}
				backgroundimg = {prompt.backgroundImg}/>
			)
		});
	}


	render () {
    return (
      	<div class="prompt-container">
        	{this.renderPrompts.bind(this)()}
      	</div>

    );
  }
}

function mapStateToProps (state) {
  return {prompt: state.prompt};
}


export default connect(mapStateToProps, { fetchPrompts })(PromptContainer);