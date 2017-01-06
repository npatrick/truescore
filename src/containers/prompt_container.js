import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPrompts} from '../actions/actions';

import PromptTile from './prompt_tile'

class PromptContainer extends  Component {

	renderPrompts () {
		return this.props.prompts.map((prompt) => {
			return(
				<PromptTile
				imageUrl={prompt.image}
				query={prompt.query}
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


export default connect(null, { fetchPrompts })(PromptContainer);