// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



import React, { Component }from 'react';

class LoginView extends Component {

  render() {
    return (
      <div className=" login-container container">


        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">TrueScore</h1>
            <p className="lead">Crowd sourced sentiment</p>
          </div>
        </div>

      <div className="row">
        <div className="left-column-login col-xs-6 col-sm-6 col-lg-6">
          <h5>How it works</h5>
          <ol>
            <li className="selling-points">Choose between two people on various attributes</li>
            <li className="selling-points">Our advanced algorithm analyze your choices</li>
            <li className="selling-points">You see a list of your preferences</li>
          </ol>
          <div>
            <span>
              <a href="auth/facebook"><img className="btn-fb" src="/assets/fbButton.png" width="224" /></a>
            </span>
          </div>
        </div>
        <div className="right-column-login col-xs-6 col-sm-6 col-lg-6">
          <div>
            <h5>Example</h5>
            <img className="screenShot" src="/assets/compare_page.png"/>
          </div>
        </div>
      </div>

    </div>
    )
  }
}
export default LoginView;
