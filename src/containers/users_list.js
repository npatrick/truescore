// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Niel Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actions';

class UsersList extends Component {

  componentWillMount() {
    if(!this.props.users.length){
      this.props.fetchUsers();
    }
  }

  renderUsers () {
    return this.props.users.map(user => {
      const picSize = {
        height: '45px',
        width: '60px',
        margin: '1em auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        'WebkitBorderRadius': '99em',
        'MozBorderRadius': '99em',
        borderRadius: '99em',
        border: '3px solid #eee',
        boxShadow: '0 3px 2px rgba(0, 0, 0, 0.3)'
      };
      return (
          <img className="network-images" key={user.name} style={picSize} src={user.imageUrl} />
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
