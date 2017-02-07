// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttledSubmitDecision, throttledFetchComparison} from '../actions/actions';
import Results from '../components/results.js';
import _ from 'underscore';


class Choice extends Component {
  constructor(props) {
    console.log("is this firing?")
    super(props);
    this.throttledSubmit = _.throttle(this.submit.bind(this), 1000);

  }

  submit(winnerId){
    this.props.throttledSubmitDecision(winnerId);
    this.props.throttledFetchComparison();
    this.props.setIsFetchingToTrue();
  }

  componentWillMount(){
    this.props.setIsFetchingToFalse();
  }

  render() {
    let overlay = {
      zIndex: 1,
      opacity: 0.4
    }

    return (
      <div className="choice-container"
        onClick={() => this.throttledSubmit(this.props.id)} >
        <img src={this.props.imageUrl} />
        <h3>{this.props.name}</h3>
      </div>
    );
  }

};

export default connect(null, { throttledSubmitDecision, throttledFetchComparison })(Choice);
