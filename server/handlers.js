

module.exports = {

  battlePairMaker: function(arrayOfObjects) {
    var battlePairs = [];
    for (var i = 0; i<arrayOfObjects.length; i++){
      for (var j = i+1; j<arrayOfObjects.length; j++){
        battlePairs.push([arrayOfObjects[i], arrayOfObjects[j]]);
      }
    }
    return battlePairs;
  },


  rankArray: function(arrayOfObjects) {
    var rankList = [];
    for (var i = 0; i<arrayOfObjects.length; i++){
      rankList.push([ arrayOfObjects[i].name, arrayOfObjects[i].wins + arrayOfObjects[i].losses ] );
    }
    return rankList;


  }

};
