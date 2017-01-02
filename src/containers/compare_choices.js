import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchChoices } from '../actions/actionCreators';
import Choice from '../components/choice.js'

class CompareChoices extends Component {

  componentWillMount() {
    this.props.fetchChoices();
  }

  renderChoices(){
    console.log("my choices: ", this.props.choices);
    return this.props.choices.map(choice => {
      console.log("current choice is ", choice);
      return (
        <Choice 
          name={choice.name}
          imageUrl={choice.imageUrl}
          key={choice.name} />
      );
    });
  }

  render () {

    return (
      <div className="game-container">
      <h4 className="game-info">Who's hair is longer?</h4>
      <button
        onClick={() => this.props.fetchChoices()}
        className="btn btn-secondary">
        Refresh
      </button>
      <div className="game-comparison">
        {this.renderChoices.bind(this)()}
      </div>
    </div>

    );
  }
}

function mapStateToProps (state) {
  return {choices: state.choices};
}

export default connect(mapStateToProps, { fetchChoices })(CompareChoices);