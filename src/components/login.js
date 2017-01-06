import React, { Component }from 'react';

class LoginView extends Component {

  render() {
    return (
      <div className="panel panel-info text-left">

        <div id="loginform" className="login">
          <h2>Login to TrueScore</h2>

          <div>
            <a href="/auth/facebook">
              <img className="btn-fb" src="/assets/fbButton.png"/>
            </a>
          </div>

          <br />

          <div>
            <a href="/auth/instagram">
              <img className="btn-fb" src="/assets/sign-in-with-instagram.png"/>
            </a>
          </div>

          <hr/>

          <div id="lform" className="col-md-8">
            <p>-or-</p>
            <form className="" method="post"  action="/login" id="contact_form">
              Username<input id="username" className="form-control" type="text" />
              <br />
              Password<input id="password" className="form-control" type="password" />
              <br />
              <button className="btn btn-info" type="submit">Login</button>
              <br />
              <br />
              Don't have an account? -->
              <a href="/#signup">Signup</a><br/><br/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginView;
