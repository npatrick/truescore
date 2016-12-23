
// configure server
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
var mongoose = require('mongoose');



// local folder imports
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

// ============TEMPORARY MONGOOSE DB TO REPLACE WITH SQL ====================//

mongoose.connect('mongodb://localhost/test');

var trueScoreSchema = mongoose.Schema({
    name: String,
    wins: Number,
    losses: Number,
    rankPosition: Number
});


var ItemOfJudgement = mongoose.model('ItemOfJudgement', trueScoreSchema);

var friesObject = new ItemOfJudgement({
  name: 'fries',
  wins: 0,
  losses: 0,
  rankPosition: 0
});

console.log(friesObject.name, friesObject.wins); // 'Silence'





// ============TEMPORARY TO MOVE TO HANDLERS OR DB ====================//
  var arrayOfObjects = ["iceCream", "cheeseSteak", "fries", "Doner Kebab"];

// hardcoded storage items for now
  var storage = {iceCream:0, cheeseSteak:0, fries:0, "Doner Kebab":0 };

  var battlePairs = handlers.battlePairMaker(arrayOfObjects);

  var i = 0;

  // ============ END TEMPORARY TO MOVE TO HANDLERS OR DB ====================//

  // ============ DB STUFF ====================//


    app.post('/drop', function(req, res){
      ItemOfJudgement.remove({}, function(err) {
        console.log('killed all records in db');
        res.send('killed all records in db');
      });
    });


    app.post('/addObjectOfJudgement', (req, res) => {
      console.log("someone's trying to add some stuff to the db");

         //add to model
         ItemOfJudgement.create({
             name: req.body.name,
             wins: req.body.wins,
             losses: req.body.losses,
             rankPosition: req.body.rankPosition
         }, function(err, data) {
             if (err) {
                 console.log(err);
             }
             res.send(data);
         });

         // show all db records
         ItemOfJudgement.find(function(err, itemsOfJudgement) {
           if (err) return console.error(err);
           console.log(itemsOfJudgement);
         });


    });




    // ============ END DB STUFF ====================//



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
