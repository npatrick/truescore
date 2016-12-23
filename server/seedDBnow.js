var fs = require('fs');
var request = require('request');

function populateDB(){

  request({ url:'http://localhost:3000/drop',
            method: "POST",
            json: false,
            body: "die",
          }, function(error,  response, body){
                 console.log(error, response, body);
             }
           );

//TODO: change this to be relative and change name to final stub file
var results = fs.readFile('/Users/bartekringwelski/Desktop/MKS/truescore/stubs_food.json', function(err, results){
  if(err) {
    console.log(err);
  }else {
    var dataFile = JSON.parse(results.toString());
    dataFile.forEach(function(objectOfJudgement){
        request({ url:'http://localhost:3000/addObjectOfJudgement',
                  method: "POST",
                  json: true,
                  body: objectOfJudgement
                }, function(error,  response, body){
                       console.log(error, response, body);
                   }
                 );
               });
             }

    }); // added ok.
} // closes entrire thing

populateDB();
