
// configure server
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var app = express();

// configure database
var morgan = require('morgan');
var mongoose = require('mongoose');

// log every request to the console
app.use(morgan('dev'));

// configure authentication

// serve static files
app.use('/', express.static(); //to configure

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// serve up next battle pair for main screen
app.get('/nextBattlePairs', (req, res) => {
  // tbd
});

// receive results of most recent battle
app.post('/resultOfBattle', (req, res) => {
  // tbd
});

app.get('/showUserStats', (req, res) => {
  // tbd
});

app.get('/showRankList', (req, res) => {
  // tbd
});


// start server
app.listen(port);
console.log('Listening on port ' + port + '...');
