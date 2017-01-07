import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStatsByPrompt } from '../actions/actions';
import StatsListItem from '../components/stats_list_item.js';
import UsersList from './users_list';

class StatsByPrompt extends Component {

  componentWillMount() {
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
              key={user.name} />
          </div>
        </div> 
      );
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
        <h4 style={textPos}>{}</h4>
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
  return {statsByPrompt: state.statsByPrompt};
}

export default connect(mapStateToProps, { fetchStatsByPrompt })(StatsByPrompt);

