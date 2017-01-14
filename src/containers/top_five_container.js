// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, fetchStatsByPrompt, updateKillSwitch } from '../actions/actions'; //gets us promptsId, and stats by prompt

import TopFive from '../containers/topFive'; //this is how we reference components from external

class TopFiveTilesContainer extends  Component {

  componentWillMount() {

    this.getAllData();

  }

  getAllData() {
    this.props.prompts.forEach(prompt => this.props.fetchStatsByPrompt(prompt.id));
  }

  renderTopFiveTiles () {
    return this.props.prompts.map( (prompt) => {
        if(!this.props.allStats[prompt.id]) {
          return (<div key={prompt.id}>Loading...</div>)
        } else {
          return (
            <TopFive
              key={prompt.id}
              prompt={prompt}
              people={this.props.allStats[prompt.id]}
            />
          )
        }
    });
  }

  render () {

    return (
        <div className="top5-container row">
          <div className="col-md-10">
            <div className ="row">
              {this.renderTopFiveTiles.bind(this)()}
            </div>
          </div>

          <div className="col-md-2">
            <button
              onClick={() => this.getAllData()}
              type="button"
              className="btn btn-primary">Update
            </button>
          </div>
        </div>

    );
  }
}

function mapStateToProps (state) {
  return {
    prompts: state.prompts,
    statsByPromptId: state.statsByPromptId,
    allStats: state.allStats
  };
}

export default connect(mapStateToProps, { fetchPrompts, fetchStatsByPrompt, updateKillSwitch })(TopFiveTilesContainer); // this makes actions available as props of the component
