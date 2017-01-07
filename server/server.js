
// ============ setup ==============//
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var prompts = require('../docs/db_stubs/prompts.js');


// ============ stuff for authentication ==============//
var passport = require ('passport');
var cookieParser = require('cookie-parser'); //reads cookies
var session = require('express-session');


app.use(cookieParser());
app.use(cookieParser());
app.use(bodyParser());


// required for passport
app.use(session( {secret: 'heyyyy'})); // session secret?
app.use(passport.initialize()); // ??
app.use(passport.session()); // persistent session login

require('./routes.js')(app, passport); // what does this do?
require('./config/passport')(passport);


mongoose.connect('mongodb://localhost/test');

// ============ local folders ==============//
var handlers = require('./handlers.js');
var Model = require('./model.js');


// log every request to the console
app.use(morgan('dev'));

// serve static files

app.use(express.static(path.join(__dirname, '../client')));

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


////

app.post('/drop', function(req, res){
  Model.remove(function(err, p){
      if(err){
          throw err;
      } else{
          console.log('No Of Documents deleted:' + p);
      }
  });

  res.send('killed all records in db');
});


  app.post('/addObjectOfJudgement', (req, res) => {

       //add to model
       Model.create({
           name: req.body.name,
           imageUrl: req.body.imageUrl,
           promptHistory: [
                            {
                              prompt: req.body.promptHistory[0].prompt,
                              wins: 0,
                              losses: 0
                            },
                            {
                              prompt: req.body.promptHistory[1].prompt,
                              wins: 0,
                              losses: 0
                            }
                          ]

       }, function(err, data) {
           if (err) {
               console.log(err);
           }
           res.send(data);
       });

       // show all db records
       Model.find(function(err, itemsOfJudgement) {
         if (err) return console.error(err);
       });
  });


// ============ API Routes  ==============//

// moved these later
  var battleCount = 0
  var battlePairs;

  //serve up next battle  // prompst + tuple array of two objects
  app.get('/nextBattlePairs', (req, res) => {

    console.log("__Getting pair");

    if (battleCount === 0){
      console.log("getting first battle pair");


      Model.find(function(err, arrayOfObjects) {
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

// receive results of most recent battle //not working
app.post('/updateDBwithResultOfBattle', (req, res) => {
  //update winner
  console.log("___UPDATING db");

  Model.findOne({
    name: req.body.winner // finds the winner in the db
  }, function(err, object) {
    if (err) {console.log(err);}

    //find matching prompt
    for (var i = 0; i <object.promptHistory.length; i++){
      if(object.promptHistory[i].prompt === req.body.prompt){
        var index = i;
      }
    }
    // overwrite response at last entry in response array
    object.promptHistory[index].wins++;

    // update user in database and invoke grading function on user
    Model.update({name: req.body.winner}, {promptHistory: object.promptHistory}, err => err ? console.error(err) : null);

  });


  //update loser

  Model.findOne({
    name: req.body.loser // finds the loser in the db
  }, function(err, object) {
    if (err) {console.log(err);}

    //find matching prompt
    for (var i = 0; i <object.promptHistory.length; i++){
      if(object.promptHistory[i].prompt === req.body.prompt){
        var index = i;
      }
    }

    // overwrite response at last entry in response array
    object.promptHistory[index].losses++;

    // update user in database and invoke grading function on user
    Model.update({name: req.body.loser}, {promptHistory: object.promptHistory}, err => err ? console.error(err) : null);

  });

  res.send("congrats!");

});


app.get('/getRankList', (req, res) => {
  Model.find(function(err, itemsOfJudgement) {
    if (err) return console.error(err);

    var results = handlers.rankArray(itemsOfJudgement);
    res.send(results);
  });

});



//sends back an array of all names
app.get('/getAllObjectsOfComparison', (req, res) => {
  var arrayOfObjectNames =[];

  Model.find(function(err, arrayOfObjects) {
    if (err) return console.error(err);

    var arrayOfNames = handlers.getNames(arrayOfObjects)
    res.send(arrayOfNames);
  });

});

// serve up stats
app.get('/getStatsForObject', (req, res) => {

  //figure out phone number of request
  Model.findOne({
    name: req.body.name // finds the user in the db
  }, function(err, object) {
    if (err) {
      console.log(err);
    }
    res.send(object.promptHistory);
  //tbd
});
});

app.get('/getAllPrompts', (req, res) => {
  res.send(prompts);
});

// ============ PORT LISTENING  ==============//

// start server
app.listen(port);
console.log('Listening on port ' + port + '...');
