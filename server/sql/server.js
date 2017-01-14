// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


const express = require ('express');
const db = require ('./db/db_index');

const morgan = require('morgan');
const parser = require('body-parser');

const router = require('./routes');

const PORT = process.env.PORT || 8080;

const app = express();


// ============ stuff for authentication ==============//
const passport = require ('passport');
const cookieParser = require('cookie-parser'); //reads cookies
const session = require('express-session');

app.use(cookieParser());
app.use(parser());

// required for passport
app.use(session( {secret: 'heyyyy'})); // session secret?
app.use(passport.initialize()); // ??
app.use(passport.session()); // persistent session login

require('./authRoutes.js')(app, passport);
require('../config/passport.js')(passport);

// set port to listen on
app.set('port', 8080);

//log and parse
app.use(morgan('dev'));
app.use(parser.json());

//set up API routes
app.use('/api', router);

//serve client files

app.use(express.static(__dirname+'/../../client'));

app.listen(PORT, function(){
  console.log('Listening on', PORT);
});
