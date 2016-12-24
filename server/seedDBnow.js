var fs = require('fs');
var request = require('request');
var path = require('path');


function populateDB(){

  request({ url:'http://localhost:3000/drop',
            method: "POST",
            json: false,
            body: "die",
          }, function(error,  response, body){
                 console.log(error, response, body);
             }
           );

var results = fs.readFile(path.join(__dirname, '../stubs.json'), function(err, results){
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

    });
}

//execute file
populateDB();
