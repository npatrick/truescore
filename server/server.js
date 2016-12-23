
// configure server
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');



// configure database
var morgan = require('morgan');

// log every request to the console
app.use(morgan('dev'));

// configure authentication

// serve static files

app.use('/', express.static(path.join(__dirname, '../public')))

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
