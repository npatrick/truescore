import React, { Component }from 'react';

class LoginView extends Component {

  render() {
    return (
      <div className="panel panel-info text-center">

        <div id="loginform" className="login">
          <h2>Login to TrueScore</h2>

          <div>
            <a href="/auth/facebook">
              <img className="btn-fb" src="/assets/fbButton.png"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginView;
