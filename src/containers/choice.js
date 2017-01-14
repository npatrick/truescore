// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttledSubmitDecision, throttledFetchComparison} from '../actions/actions';
import Results from '../components/results.js';

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {showResults: false}
  }

  submit(winnerId){
    this.props.throttledSubmitDecision(winnerId);
    this.props.throttledFetchComparison();
  }

  render() {
    let overlay = {
      zIndex: 1,
      opacity: 0.4
    }

    return (
      <div className="choice-container"
        onClick={() => this.submit.bind(this)(this.props.id) } >
        <h3>{this.props.name}</h3>
        <img src={this.props.imageUrl} />
      </div>
    );
  }

};

export default connect(null, { throttledSubmitDecision, throttledFetchComparison })(Choice);
