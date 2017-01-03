import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actionCreators';

class UsersList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers () {
    return this.props.users.map(user => {
      return <div>{user.name}</div>
    });
  }

  render() {

    return(
      <div>
        {this.renderUsers.bind(this)()}
      </div>
    );
  }

}

function mapStateToProps (state ) {
  return { users: state.users };
}


export default connect(mapStateToProps, { fetchUsers })(UsersList);