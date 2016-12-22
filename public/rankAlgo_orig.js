// inputs are a winner and loser

  var arrayOfObjects = ["iceCream", "cheeseSteak", "fries"];


  // create every combination of two items

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


var storage = {iceCream:0,
               cheeseSteak:0,
               fries:0
              };


var rankedArray = function(objectWithValues){

    var sortable = [];
    for (var object in storage)
        sortable.push([object, storage[object]])

    sortable.sort(function(a, b) {
        return a[1] - b[1]
})


return sortable;




}

for (var i =0; i < battlePairs.length; i++){
    var answer = prompt(
    `Which do you like more?
     ${battlePairs[i][0]}  or  ${battlePairs[i][1]}?
     Answer A or B`)
    console.log(answer
    );

    if (answer === 'A'){
     storage[ battlePairs[i][0] ]++;
     storage[ battlePairs[i][1] ]--;
     console.log(storage);
    } else {
     storage[ battlePairs[i][0] ]--;
     storage[ battlePairs[i][1] ]++;
    }

    console.log(rankedArray(storage));
   }



// cycle through array of battle paires
// prompt usear to type a or b

// if a increment left score by 1, decrement other score by 1
// show sorted array of prefence
