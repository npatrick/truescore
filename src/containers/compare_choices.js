// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchComparison } from '../actions/actions.js';
import Choice from './choice.js'


class CompareChoices extends Component {

  constructor(props) {
    super(props);
    this.state = {isFetching: false};
  }

 componentWillMount() {
   clearInterval(this.props.killSwitch.id);

   if(!this.props.comparison.choices.length){
     this.props.fetchComparison();
   }

 };


  setIsFetchingToTrue () {
    this.setState({isFetching: true});
  }

  setIsFetchingToFalse() {
    this.setState({isFetching: false});
  }

 renderChoices(){

   return this.props.comparison.choices.map(choice => {

     return (
       <Choice
         name={choice.name}
         id={choice.id}
         imageUrl={choice.imageUrl}
         key={choice.id}
         isFetching={this.state.isFetching}
         setIsFetchingToFalse={this.setIsFetchingToFalse.bind(this)}
         setIsFetchingToTrue={this.setIsFetchingToTrue.bind(this)} />
     );
   });
 }

 render () {

   return (
     <div className="game-container">
       <h3 className="game-info">{this.props.prompt.text ? this.props.prompt.text : 'Loading...'}</h3>
       <div>{this.state.isFetching ? <img className="spinner" src="/assets/spinner.gif" /> : "" }</div>
       <div className="game-comparison">
         {this.renderChoices.bind(this)()}
       </div>
     </div>
   );
 }
}

function mapStateToProps (state) {
 return {
   comparison: state.comparison,
   prompt: state.prompt,
   killSwitch: state.killSwitch
 };
}

export default connect(mapStateToProps, { fetchComparison })(CompareChoices);
