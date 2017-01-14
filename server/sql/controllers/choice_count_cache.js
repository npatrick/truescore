var db = require('../db/db_index');

var numberOfChoices;

const getChoiceCount = function(){

  return new Promise(function(resolve, reject) {

    //if previously calculated, don't query db again
    if(numberOfChoices) {

      resolve(numberOfChoices);

    } else {//get count on initial request
      
      db.Choice.count()
      .then(count => {
        numberOfChoices = count;
        resolve(count)
      });

    }

  });

};



module.exports = getChoiceCount;