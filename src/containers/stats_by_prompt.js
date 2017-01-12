import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStatsByPrompt, fetchPrompts } from '../actions/actions';
import StatsListItem from '../components/stats_list_item.js';
import UsersList from './users_list';
import MiniPromptListItem from '../components/mini_prompt_list_item';

class StatsByPrompt extends Component {

  componentWillMount() {
    if(!this.props.prompts.length){
      this.props.fetchPrompts();
    }
    this.props.fetchStatsByPrompt();
  }

  renderStatsListItem () {
    return this.props.statsByPrompt.map((user, index) => {
      const wins = +user.wins;
      const losses = +user.losses;
      const total = wins + losses;

      const average = total ? Math.floor(wins/total * 100) : 0;

      return (
        <StatsListItem
          key={user.id}
          name={user.name}
          average={average}
        />
      );
    });
  }

  renderPromptListItem () {
    let buttonActive = "btn btn-info active";
    return this.props.prompts.map(promptLoop => {
      if(promptLoop.id === this.props.prompt.id) {
        return (
            <MiniPromptListItem
              text={promptLoop.text}
              tileImage={promptLoop.tileImage}
              prompt={promptLoop} 
              onActive={buttonActive} />
        )
      } else {
        buttonActive = "btn btn-info";
        return (
            <MiniPromptListItem
              text={promptLoop.text}
              tileImage={promptLoop.tileImage}
              prompt={promptLoop}
              onActive={buttonActive} />
        )
      }
    });
  }

  render () {
    const textPos = {
      'color': 'black'
    };
    return (
      <div>
        <br />
        <h2 style={{textAlign: 'center'}}>Cohort Stats</h2>
        <br />
        <h6>Select a prompt:</h6>
        <br />
          <div className="row">
            <div className="btn-group" data-toggle="buttons">
              {this.renderPromptListItem.bind(this)()}
            </div>
          </div>
        <br />
        <h4 style={textPos}>{this.props.prompt.text}</h4>
        <br />
        <div className="network-list">
          <h5>Your Network (players)</h5>
          <UsersList />
        </div>
        <div className="statList-container">
          <dl>
            {this.renderStatsListItem.bind(this)()}
          </dl>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
<<<<<<< HEAD
=======
  console.log('Current STATE inside statsview: ', state.prompt);
>>>>>>> change prompt tile to button tiles with highlight
  return {statsByPrompt: state.statsByPrompt, prompt: state.prompt, prompts: state.prompts};
}

export default connect(mapStateToProps, { fetchPrompts, fetchStatsByPrompt })(StatsByPrompt);
