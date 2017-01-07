import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchComparison } from '../actions/actions';

import Choice from './choice.js'

class CompareChoices extends Component {

  componentWillMount() {
    this.props.fetchComparison();
  }

  renderChoices(){

    return this.props.comparison.choices.map(choice => {
      let userWL = choice.wins/(choice.wins + choice.losses);
      return (
        <Choice 
          name={choice.name}
          imageUrl={choice.imageUrl}
          average={userWL}
          key={choice.id} />
      );
    });
  }

  render () {

    return (
      <div id="gamecontainer"className="game-container">
        <h3 id= "prompt"className="game-info">{this.props.comparison ? this.props.comparison.prompt : 'Loading...'}</h3>
        <div id="choices"className="game-comparison">
          {this.renderChoices.bind(this)()}
        </div>
      </div>

    );
  }
}

function mapStateToProps (state) {
  return {comparison: state.comparison};
}

export default connect(mapStateToProps, { fetchComparison })(CompareChoices);