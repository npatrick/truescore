
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

app.use('/', express.static(path.join(__dirname, '../client')));

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// ============TEMPORARY TO MOVE TO HANDLERS OR DB ====================//
  var arrayOfObjects = ["iceCream", "cheeseSteak", "fries", "Doner Kebab"];

  var battlePairs = [];
  var battlePairMaker = function() {
    for (var i = 0; i<arrayOfObjects.length; i++){
      for (var j = i+1; j<arrayOfObjects.length; j++){
        battlePairs.push([arrayOfObjects[i], arrayOfObjects[j]]);
      }
    }
    return battlePairs;
  };
  battlePairMaker(arrayOfObjects);
  console.log(battlePairs);

  var i = 0;



// hardcoded storage items for now
  var storage = {iceCream:0, cheeseSteak:0, fries:0, "Doner Kebab":0 };

// read storage object and return ranked list
  var rankedArray = function(objectWithValues) {
    var sortable = [];
      for (var object in storage) {
        sortable.push([object, storage[object]])
        sortable.sort(function(a, b) {
          return a[1] - b[1]
        })
      }
  return sortable;

  }

  // ============ END TEMPORARY TO MOVE TO HANDLERS OR DB ====================//

  app.get('/nextBattlePairs', (req, res) => {

    res.send(battlePairs[i]);
    i++;

  });

// receive results of most recent battle
app.post('/resultOfBattle', (req, res) => {

  if(req.body.results[0].left == 1 && req.body.results[1].right == -1){
    console.log("left wonnnnn!");
    storage[ battlePairs[i-1][0] ]++
    storage[ battlePairs[i-1][1] ]--
  } else {
    console.log("right wonnnn!");
    storage[ battlePairs[i-1][0] ]--
    storage[ battlePairs[i-1][1] ]++
  }
  console.log(storage);
});

app.get('/getRankList', (req, res) => {
  res.send(rankedArray(storage));
});

app.get('/showUserStats', (req, res) => {
  //tbd
});

// start server
app.listen(port);
console.log('Listening on port ' + port + '...');
