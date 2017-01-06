var db = require('../db/db_index');

module.exports = {
  get: function(req, res){
    db.Comparison.count().
    then(count => {

    const choice1Index = randomIdx(count);
    let choice2Index = randomIdx(count);

    while (choice1Index === choice2Index ){
      choice2Index = randomIdx(count);
    }
    

    db.Choice.findAll( {where: {id: [choice1Index, choice2Index] } } )
    .then(choices => res.send(choices));


    });
  },
  getAll: function(req, res){
    db.Comparison.findAll()
    .then(comparisons => res.send(comparisons));
  },
  post: function(req, res){
    const {userid, promptid, winner, loser} = req.body;
    db.Comparison.create({
      userId: userid,
      promptId: promptid,
      winnerId: winner,
      loserId: loser
    })
    .then((thing) => res.send(thing))
  }
}


function randomIdx (itemsInSet){
  return Math.floor( Math.random() * itemsInSet )
}