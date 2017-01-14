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