$( document ).ready(function() {


//setup and storage
  var arrayOfObjects = ["iceCream", "cheeseSteak", "fries"];

//create array of battle pairs
  var battlePairs = [];
  var battlePairMaker = function() {
    for (var i = 0; i<arrayOfObjects.length; i++){
      for (var j = i+1; j<arrayOfObjects.length; j++){
        battlePairs.push([arrayOfObjects[i], arrayOfObjects[j]]);
      }
    }
  return battlePairs;
  };
  battlePairMaker(arrayOfObjects);
  console.log(battlePairs);


// hardcoded storage items for now
  var storage = {iceCream:0, cheeseSteak:0, fries:0};

// read storage object and return ranked list
  var rankedArray = function(objectWithValues) {
    var sortable = [];
      for (var object in storage) {
        sortable.push([object, storage[object]])
        sortable.sort(function(a, b) {
          return a[1] - b[1]
        })
      }
  return sortable;

  }






var i = 0;


  $('#divA').append(battlePairs[i][0]);
  $('#divB').append(battlePairs[i][1]);
  $('#currentRank').append(JSON.stringify(rankedArray()));

  $('#buttonA').on('click', function(){
    //change values in storage array
    storage[ battlePairs[i][0] ]++;
    storage[ battlePairs[i][1] ]--;
    if (i<battlePairs.length-1){
      i++;
    }

    //reset and load next items
    $('#divA').html("");
    $('#divA').append(battlePairs[i][0]);
    $('#divB').html("");
    $('#divB').append(battlePairs[i][1]);

    //reset and display current rank
    $('#currentRank').html("");
    $('#currentRank').append(JSON.stringify(rankedArray()));
  });




  $('#buttonB').on('click', function(){
    //change values in storage array
    storage[ battlePairs[i][0] ]--;
    storage[ battlePairs[i][1] ]++;

    if (i<battlePairs.length-1){
      i++;
    }

    //reset and load next items
    $('#divA').html("");
    $('#divA').append(battlePairs[i][0]);
    $('#divB').html("");
    $('#divB').append(battlePairs[i][1]);

    //reset and display current rank
    $('#currentRank').html("");
    $('#currentRank').append(JSON.stringify(rankedArray()));

  });



});
