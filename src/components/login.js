import React, { Component }from 'react';

class LoginView extends Component {

  render() {
    return (
      <div id="loginform" className="login">
        <div className="panel panel-info">
          <div id="lform" className="col-md-8">
            <h4>Login</h4>
            <form className="" method="post"  id="contact_form">
              Username<input id="username" className="form-control" type="text" />
              <br />
              Password<input id="password"className="form-control" type="password" />
              <br />
              <button className="btn btn-info" type="submit">Login</button>
              <br /><br/>
              Don't have an account? -->
              <a href="#/signup">Signup</a><br/><br/>
              
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginView;