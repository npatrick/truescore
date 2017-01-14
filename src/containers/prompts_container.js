// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, fetchUserData } from '../actions/actions';

import PromptTile from './prompt_tile';
import StatsByPrompt from './stats_by_prompt';
import UsersList from './users_list';

class PromptContainer extends  Component {

  componentWillMount() {

		//stop topfive's setInterval from over-writing stats you're viewing
    clearInterval(this.props.killSwitch.id);

    this.props.fetchPrompts();
    this.props.fetchUserData();
  }

	renderPrompts () {
		return this.props.prompts.map((prompt) => {
			return(
				<PromptTile
				prompt={prompt}
				{...prompt}
				key={prompt.id} />
			)
		});
	}


	render () {

    return (
			<div className="row container">
				<div className="col-md-6 col-s-12 list-group">
					<h3>Choose a category to vote!</h3>
					<ul>
						{this.renderPrompts.bind(this)()}
					</ul>
				</div>
				<div className="network-list col-md-4">
          <h5>Your Network (players)</h5>
          <UsersList />
        </div>
			</div>

    );
  }
}

function mapStateToProps (state) {
  return {
		prompts: state.prompts,
		killSwitch: state.killSwitch
	};
}


export default connect(mapStateToProps, { fetchPrompts, fetchUserData })(PromptContainer); // this makes actions available as props of the component
