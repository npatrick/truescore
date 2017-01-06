import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actions';

class UsersList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers () {
    return this.props.users.map(user => {
      const picSize = {
        height: '60px',
        width: '60px'
      };
      return (
          <img key={user.name} style={picSize} src={user.imageUrl} />
        )
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


export default connect(mapStateToProps, { fetchUsers })(UsersList); //currying {stateData, action ==> component}
