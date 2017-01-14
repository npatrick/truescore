// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updatePrompt } from '../actions/actions';

class PromptTile extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  tileClick(){
    this.props.updatePrompt(this.props.prompt);
    this.context.router.push('/game')
  }


  render() {
    return (

        <li className ="list-group-item"
        onClick={ () => this.tileClick() }>
          <div className="media-left">
            <img className="media-left" src={this.props.tileImage}/>
          </div>
            <div className="media-body">
              <div className="media-heading">{this.props.title}</div>
            </div>
        </li>
    );
  }
}

export default connect(null, { updatePrompt })(PromptTile);
