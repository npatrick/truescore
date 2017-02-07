import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStatsByPrompt, fetchPrompts } from '../actions/actions';
import StatsListItem from '../components/stats_list_item.js';
import UsersList from './users_list';
import MiniPromptList from '../components/mini_prompt_list';

class StatsByPrompt extends Component {

  componentWillMount() {
    this.props.fetchPrompts();
    this.props.fetchStatsByPrompt();
  }

  renderStatsListItem () {
    console.log('STATS BY PROMPT PROPS HEAH: ', this.props);
    return this.props.statsByPrompt.map(user => {
      const wins = user.wins;
      const losses = user.losses;
      const total = wins + losses;

      const average = total ? Math.floor(wins/total * 100) : 0;

      return (
        <div>
          <div>
            <StatsListItem
              name={user.name}
              average={average}
              key={user.id} />
          </div>
        </div> 
      );
    });
  }

  renderPromptListItem () {
    return this.props.prompts.map(prompts => {
      return (
        <div>
          <MiniPromptList
            text={prompts.text}
            tileImage={prompts.tileImage} />
        </div>
        )
    });
  }

  render () {
    const textPos = {
      'color': 'black'
    };
    return (
      <div>
        <br />
        <h2>Cohort Stats</h2>
        <br />
          <div className="row">
            {this.renderPromptListItem.bind(this)()}
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
  console.log('BEEEEE FOOOO STATE: ', state);
  return {statsByPrompt: state.statsByPrompt, prompt: state.prompt, prompts: state.prompts};
}

export default connect(mapStateToProps, { fetchPrompts, fetchStatsByPrompt })(StatsByPrompt);

