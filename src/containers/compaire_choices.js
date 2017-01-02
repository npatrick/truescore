import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchChoices } from '../actions/actionCreators';

class CompareChoices extends Component {

  componentWillMount() {
    this.props.fetchChoices();
  }

  render () {

  }
}

mapStateToProps (state) {
  return {choices: state.choices};
}

export default connect(mapStateToProps)(CompareChoices);