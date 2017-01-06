var db = require('../db/db_index');

module.exports = {
  get: function(req, res){
    const promptId = req.params.id || 1;
    //how many choices in db?
    db.Comparison.count().
    then(count => {
    
    //get 2 random, but different ids
    const choice1Id = randomId(count);
    let choice2Id = randomId(count);

    while (choice1Id === choice2Id ){
      choice2Id = randomId(count);
    }

    // get choices data from db
    db.Choice.findAll( {where: {id: [choice1Id, choice2Id] } } )
    .then(([choiceA, choiceB]) => {
    
      console.log("ChoiceA is ", choiceA.dataValues);

      db.Comparison.count({where: {
        winnerId: choiceA.id,
        promptId
      }})
      .then((wins)=> {
        choiceA.dataValues.wins = wins;
      });

      db.Comparison.count({where: {
        loserId: choiceA.id,
        promptId
      }})
      .then((losses)=> {
        choiceA.dataValues.losses = losses;
      });

      db.Comparison.count({where: {
        winnerId: choiceB.id,
        promptId
      }})
      .then((wins)=> {
        choiceB.dataValues.wins = wins;
      });

      db.Comparison.count({where: {
        loserId: choiceB.id,
        promptId
      }})
      .then((losses)=> {
        choiceB.dataValues.losses = losses;
        res.send([choiceA, choiceB]);
      });



      // choices[0].wins = cat1winner;
      // choices[0].losser = cat1loses;
      // choices[1].wins = cat2winner;
      // choices[1].losses = cat
      //res.send([choiceA, choiceB]);

    
    });


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


function randomId (itemsInSet){
  return Math.ceil( Math.random() * itemsInSet );
}