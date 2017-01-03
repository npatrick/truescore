var _ = require('underscore');

module.exports = {

  battlePairMaker: function(arrayOfObjects) {
    var battlePairs = [];
    for (var i = 0; i<arrayOfObjects.length; i++){
      for (var j = i+1; j<arrayOfObjects.length; j++){
        battlePairs.push({
                          prompt: "Who has shorter hair?",
                          battlePairs: [ arrayOfObjects[i], arrayOfObjects[j] ]
                        });
      }
    };

    return _.shuffle(battlePairs);
  },

  rankArray: function(arrayOfObjects) {
    var rankList = [];
    for (var i = 0; i<arrayOfObjects.length; i++){
      rankList.push([ arrayOfObjects[i].name, (arrayOfObjects[i].promptHistory[0].wins - arrayOfObjects[i].promptHistory[0].losses)/(arrayOfObjects[i].promptHistory[0].wins + arrayOfObjects[i].promptHistory[0].losses) ] );
    }
    return rankList.sort(function(a,b){return b[1]-a[1]});
  },

  getNames: function(arrayOfObjects) {
    var names = [];
    for (var i = 0; i<arrayOfObjects.length; i++){
      names.push(arrayOfObjects[i].name);
    }
    return names;
  }

};