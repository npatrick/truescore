
// ============ setup ==============//
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');

// ============ local folders ==============//
var handlers = require('./handlers.js');

// log every request to the console
app.use(morgan('dev'));

// serve static files

app.use(express.static(path.join(__dirname, '../client')));

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/test');


// ============ db setup ==============//

var trueScoreSchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    wins: Number,
    losses: Number,
    rankPosition: Number
});

var ItemOfJudgement = mongoose.model('ItemOfJudgement', trueScoreSchema);



// ============ DB routes ====================//


  app.post('/drop', function(req, res){
    ItemOfJudgement.remove({}, function(err) {
      console.log('killed all records in db');
      res.send('killed all records in db');
    });
  });


  app.post('/addObjectOfJudgement', (req, res) => {

       //add to model
       ItemOfJudgement.create({
           name: req.body.name,
           imageUrl: req.body.imageUrl,
           wins: 0,
           losses: 0,
           rankPosition:0
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


// ============ API Routes  ==============//

// moved these later
  var battleCount = 0
  var battlePairs;

  //serve up next battle
  app.get('/nextBattlePairs', (req, res) => {

    if (battleCount === 0){

      ItemOfJudgement.find(function(err, arrayOfObjects) {
        if (err) return console.error(err);
        battlePairs = handlers.battlePairMaker(arrayOfObjects); // [{a:1},{b:2}]
        res.send(battlePairs[battleCount]);
        battleCount++;
      });

    } else {
      res.send(battlePairs[battleCount]);
      battleCount++;
    }
  });

// receive results of most recent battle
app.post('/updateDBwithResultOfBattle', (req, res) => {
  var winner;
  var loser;


  if(req.body.winner === "left"){
    winner = battlePairs[battleCount-1][0]
    loser = battlePairs[battleCount-1][1]

  } else {
    console.log("right won");
    winner = battlePairs[battleCount-1][1]
    loser = battlePairs[battleCount-1][0]
  }

  ItemOfJudgement.update({name: winner.name}, {wins: winner.wins++ }, err => err ? console.error(err) : null);
  ItemOfJudgement.update({name: loser.name}, {losses:loser.losses-- }, err => err ? console.error(err) : null);

  });

  app.get('/getRankList', (req, res) => {
    ItemOfJudgement.find(function(err, itemsOfJudgement) {
      if (err) return console.error(err);

      var results = handlers.rankArray(itemsOfJudgement);
      res.send(results);
    });

});


 // serve up stats
app.get('/showUserStats', (req, res) => {
  //tbd
});


// ============ PORT LISTENING  ==============//

// start server
app.listen(port);
console.log('Listening on port ' + port + '...');
