//WIP DISREGARD

// module.exports = {
//
//   var arrayOfObjects = ["iceCream", "cheeseSteak", "fries", "Doner Kebab"];
//
//   var battlePairs = [];
//   var battlePairMaker = function() {
//     for (var i = 0; i<arrayOfObjects.length; i++){
//       for (var j = i+1; j<arrayOfObjects.length; j++){
//         battlePairs.push([arrayOfObjects[i], arrayOfObjects[j]]);
//       }
//     }
//     return battlePairs;
//   };
//   battlePairMaker(arrayOfObjects);
//   console.log(battlePairs);
//
//   var i = 0;
//
//
// // hardcoded storage items for now
//   var storage = {iceCream:0, cheeseSteak:0, fries:0, "Doner Kebab":0 };
//
// // read storage object and return ranked list
//   var rankedArray = function(objectWithValues) {
//     var sortable = [];
//       for (var object in storage) {
//         sortable.push([object, storage[object]])
//         sortable.sort(function(a, b) {
//           return a[1] - b[1]
//         })
//       }
//   return sortable;
//
//   }
// };
