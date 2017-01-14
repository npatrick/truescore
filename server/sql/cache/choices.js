const db = require('../db/db_index');

let choices;

const getChoices = function(){

  return new Promise(function(resolve, reject) {

    //if previously calculated, don't query db again
    if(choices) {

      resolve(choices);

    } else {//get count on initial request
      
      db.Choice.findAll()
      .then(choices => {
        choices = choices;
        resolve(choices)
      });

    }

  });

};



module.exports = getChoices;