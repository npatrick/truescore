import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPrompt } from '../actions/actions';
import StatsListItem from '../components/stats_list_item';
import UserList from '../components/user_list';

class PromptList extends Component {

  componentWillMount() {
    this.props.fetchPrompt();
  }

  renderStatsListItem () {
    console.log('WHAT I DONT KNOW on PromptList: ', this.props);
    return this.props.prompt.map(data => {
      return (
        <div>
          <div>
            <StatsListItem
              prompt="Shortest Hair"
              name={data[0]}
              average={Math.floor(data[1]*100)}
              key={data[0]} />
          </div>
        </div> 
      );
    });
  }

  render () {
    const textPos = {
      'text-align': 'center',
      'color': 'white'
    };
    return (
      <div>
        <br />
        <h2>Cohort Stats</h2>
        <br />
        <h4 style={textPos}>Who has a shorter hair?</h4>
        <br />
        <div className="statList-container">
          {this.renderStatsListItem.bind(this)()}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {prompt: state.prompt};
}

export default connect(mapStateToProps, { fetchPrompt })(PromptList);

