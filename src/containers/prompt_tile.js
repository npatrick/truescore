import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updatePrompt } from '../actions/actions';

//import { fetchPrompts } from '../actions/actions';

class PromptTile extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  tileClick(){
    this.props.updatePrompt(this.props.prompt);
    this.context.router.push('/game')
  }


  render() {

    console.log("from inside this.props", this.props);
    return (
        <div className ="prompt-tile"
        onClick={ () => this.tileClick()}>
        	<img src={this.props.tileImage}/>
          <h3>{this.props.title}</h3>
        </div>
    );
  }
}

export default connect(null, { updatePrompt })(PromptTile);

//connection(state, action)(component)
