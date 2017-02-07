// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrompt, throttledFetchStatsByPrompt } from '../actions/actions';

class MiniPromptList extends Component {

  render() {
  	const miniPic = {
  		maxWidth: '100%',
  		height: 'auto',
  		display: 'inline',
  		'marginLeft': 'auto',
  		'marginRight': 'auto',
      borderRadius: '12px'
  	}

    return (
      <label className={this.props.onActive}
      	onClick={() => {
          this.props.updatePrompt(this.props.prompt);
          this.props.throttledFetchStatsByPrompt(this.props.prompt.id);
        }}>
      	<img className="mini-prompt-tile" style={miniPic} src={this.props.tileImage}/>
        <input type="radio" name="options" autoComplete="off" />
      </label>
    );
  }
}

export default connect(null, { updatePrompt, throttledFetchStatsByPrompt })(MiniPromptList);
