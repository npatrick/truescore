import React, { Component }from 'react';

class LoginView extends Component {

  render() {
    return (
      <div className="login">
        <div className="panel panel-info">
          <div className="col-md-8">
            <h3>Login</h3>
            <form className="" method="post"  id="contact_form">
              username<input className="form-control" type="text" />
              <br />
              password<input className="form-control" type="password" />
              <br />
              <button className="btn btn-info" type="submit">Login</button>
              <br />
              <span>Don't have an account?</span>
              <br />
              <button className="btn btn-info" type="submit">Signup</button>
              
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginView;