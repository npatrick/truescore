import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, fetchStatsByPromptById } from '../actions/actions'; //gets us promptsId, and stats by prompt

import TopFive from '../components/topFive'; //this is how we reference components from external

class TopFiveTilesContainer extends  Component {

  componentWillMount() {
    this.props.fetchStatsByPromptById(1);
    this.props.fetchStatsByPromptById(2);
    this.props.fetchStatsByPromptById(3);
  }

	renderTopFiveTiles () {

    return this.props.prompts.map( (prompt) => {
      console.log("this.props looks like", this.props);
        if (!this.props.statsByPromptId[prompt.id]) {
          return (<div>Loading...</div>)
        } else {
            return ( < TopFive prompt={prompt}
                        arrayOfNames={this.props.statsByPromptId[prompt.id]}
                      />
                    )
            }
          }
        );
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
           statsByPromptId: state.statsByPromptId
         };
}

export default connect(mapStateToProps, { fetchPrompts, fetchStatsByPromptById })(TopFiveTilesContainer); // this makes actions available as props of the component
