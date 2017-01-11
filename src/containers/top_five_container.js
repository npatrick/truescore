import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, fetchStatsByPromptById } from '../actions/actions'; //gets us promptsId, and stats by prompt

import TopFive from '../components/topFive'; //this is how we reference components from external

class TopFiveTilesContainer extends  Component {

  componentWillMount() {
    this.props.fetchPrompts(); // once invoked, adds to state
    this.props.fetchStatsByPromptById(1); // once invoked, adds to state
  }


	renderTopFiveTiles () {
    console.log("this should have our topFives", this.props);
			return(
				<TopFive
				prompt={this.props.prompts[0].text}
				arrayOfNames={this.props.topFives} />
			)
	}


	render () {

    return (
      	<div className="prompt-container">
        	{this.renderTopFiveTiles.bind(this)()}
      	</div>

    );
  }
}

function mapStateToProps (state) {
  return {
           prompts: state.prompts,
           topFives: state.topFives
         };
}

export default connect(mapStateToProps, { fetchPrompts, fetchStatsByPromptById })(TopFiveTilesContainer); // this makes actions available as props of the component
