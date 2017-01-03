var _ = require('underscore');

module.exports = {

  battlePairMaker: function(arrayOfObjects) {
    var battlePairs = [];
    for (var i = 0; i<arrayOfObjects.length; i++){
      for (var j = i+1; j<arrayOfObjects.length; j++){
        battlePairs.push({
                          prompt: "Who is cooler?",
                          battlePairs: [ arrayOfObjects[i], arrayOfObjects[j] ]
                        });
      }
    };
    return _.shuffle(battlePairs);
  },

  rankArray: function(arrayOfObjects) {
    var rankList = [];
    for (var i = 0; i<arrayOfObjects.length; i++){
      rankList.push([ arrayOfObjects[i].name, arrayOfObjects[i].wins + arrayOfObjects[i].losses ] );
    }
    return rankList;
  },

  getNames: function(arrayOfObjects) {
    var names = [];
    for (var i = 0; i<arrayOfObjects.length; i++){
      names.push(arrayOfObjects[i].name);
    }
    return names;
  }

};
