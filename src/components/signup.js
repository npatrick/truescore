import React, { Component }from 'react';

class SignupView extends Component {

  render() {
    return (
      <div className="register">
        <div className="panel panel-info">
          <div className="col-md-8">
            <h3>Create Account</h3>
            <form className="" method="post"  id="contact_form">
              username<input className="form-control" type="text" />
              <br />
              password<input className="form-control" type="password" />
              <br />
              confirm password <input className="form-control" type="password" />
              <br />
              <button className="btn btn-info" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupView;