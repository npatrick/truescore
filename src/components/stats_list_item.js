// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Niel Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStatsByPrompt } from '../actions/actions';

class StatsListItem extends Component {

  render() {
    let numberAsPercent = this.props.average.toString() + "%";
    let actualPercentage = "percentage percentage-" + (this.props.average).toString();

    let barMaker = (function(style){
    let sheet = document.head.appendChild(style).sheet;
      return function(selector, css){
        let propText = Object.keys(css).map(function(p){
            return p+":"+css[p]
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
      }
    })(document.createElement("style"));

    return (
      <div>
        {this.props.name}
        <dd className={actualPercentage} style={barMaker(`.percentage-${this.props.average}:after`, {width: numberAsPercent})}>
          <span className="text">
            {(this.props.average + "%")}
          </span>
        </dd>
      </div>
    );
  }
};

export default connect(null, { fetchStatsByPrompt })(StatsListItem);
