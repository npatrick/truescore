// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStatsByPrompt, fetchPrompts } from '../actions/actions';
import StatsListItem from '../components/stats_list_item.js';
import UsersList from './users_list';
import MiniPromptListItem from '../components/mini_prompt_list_item';

class StatsByPrompt extends Component {

  componentWillMount() {

    //stop topfive's setInterval from over-writing stats you're viewing
    clearInterval(this.props.killSwitch.id);

    //in case you skipped the homepage, get prompts
    if(!this.props.prompts.length){
      this.props.fetchPrompts();
    }

    //get FRESH stats
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
          total={total}
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
              key={promptLoop.id}
              text={promptLoop.text}
              tileImage={promptLoop.tileImage}
              prompt={promptLoop}
              onActive={buttonActive} />
        )
      } else {
        buttonActive = "btn btn-info";
        return (
            <MiniPromptListItem
              key={promptLoop.id}
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

        <h6>Select a prompt:</h6>
        <div className="row prompt-buttons">
          <div className="btn-group" data-toggle="buttons">
            {this.renderPromptListItem.bind(this)()}
          </div>
        </div>




        <div className="row">

          <div className ="col-md-8">
            <h4 style={textPos}>{this.props.prompt.text}</h4>
            <div className="statList-container">
              <dl>
                {this.renderStatsListItem.bind(this)()}
              </dl>
            </div>
          </div>

          <div className ="col-md-4">

            <div className="network-list">
              <h5>Your Network (players)</h5>
              <UsersList />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    statsByPrompt: state.statsByPrompt.stats,
    prompt: state.prompt,
    prompts: state.prompts,
    killSwitch: state.killSwitch
  };
}

export default connect(mapStateToProps, { fetchPrompts, fetchStatsByPrompt })(StatsByPrompt);
