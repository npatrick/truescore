
// configure server
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
var handlers = require('./handlers.js');

// configure database
var morgan = require('morgan');

// log every request to the console
app.use(morgan('dev'));

// configure authentication

// serve static files

app.use('/', express.static(path.join(__dirname, '../public')));

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// ============TEMPORARY TO MOVE TO HANDLERS OR DB ====================//
  var arrayOfObjects = ["iceCream", "cheeseSteak", "fries", "Doner Kebab"];

// hardcoded storage items for now
  var storage = {iceCream:0, cheeseSteak:0, fries:0, "Doner Kebab":0 };

  var battlePairs = handlers.battlePairMaker(arrayOfObjects);

  var i = 0;

  // ============ END TEMPORARY TO MOVE TO HANDLERS OR DB ====================//


  app.get('/nextBattlePairs', (req, res) => {
    res.send(battlePairs[i]);
    i++;

  });

// receive results of most recent battle
app.post('/resultOfBattle', (req, res) => {

  if(req.body.results[0].left == 1 && req.body.results[1].right == -1){
    // console.log("left wonnnnn!");
    storage[ battlePairs[i-1][0] ]++
    storage[ battlePairs[i-1][1] ]--
  } else {
    // console.log("right wonnnn!");
    storage[ battlePairs[i-1][0] ]--
    storage[ battlePairs[i-1][1] ]++
  }
  console.log(storage);
});

app.get('/getRankList', (req, res) => {
  //get storage from 

  res.send(handlers.rankedArray(storage));
});

app.get('/showUserStats', (req, res) => {
  //tbd
});

// start server
app.listen(port);
console.log('Listening on port ' + port + '...');
