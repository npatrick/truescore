// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



var db = require('../db/db_index');
var colors = require('colors');

module.exports = {
  get: function(req, res){

    const promptId = req.params.id || 1;
    //how many choices in db?
    db.Choice.count().
    then(count => {

    //get 2 random, but different ids
    const choice1Id = randomId(count);
    let choice2Id = randomId(count);

    while (choice1Id === choice2Id ){
      choice2Id = randomId(count);
    }

    // get choices data from db
    db.Choice.findAll( {where: {id: [choice1Id, choice2Id] } } )
    .then(([choiceA, choiceB]) => res.send([choiceA, choiceB])

    // {
    //   db.Comparison.count({where: {
    //     winnerId: choiceA.id,
    //     promptId
    //   }})
    //   .then((wins)=> {


    //     console.log("ChoiceA Name: ", choiceA.name);
    //     console.log("ChoiceA wins: ", wins);



    //     choiceA.dataValues.wins = wins; //set Choice A wins
    //   });

    //   db.Comparison.count({where: {
    //     loserId: choiceA.id,
    //     promptId
    //   }})
    //   .then((losses)=> {
    //     choiceA.dataValues.losses = losses; //set Choice A losses
    //   });

    //   db.Comparison.count({where: {
    //     winnerId: choiceB.id,
    //     promptId
    //   }})
    //   .then((wins)=> {
    //     choiceB.dataValues.wins = wins; //set Choice B wins
    //   });

    //   db.Comparison.count({where: {
    //     loserId: choiceB.id,
    //     promptId
    //   }})
    //   .then((losses)=> {
    //     choiceB.dataValues.losses = losses; //set Choice B losses
    //     res.send([choiceA, choiceB]);
    //   });
    // }

    );


    });
  },

  getAll: function(req, res){

    db.Comparison.findAll()
    .then(comparisons => res.send(comparisons));

  },

  post: function(req, res){
    console.log("____req.body: ", req.body);
    const {userId, promptId, winnerId, loserId} = req.body;
    db.Comparison.create({
      userId: userId,
      promptId: promptId,
      winnerId: winnerId,
      loserId: loserId
    })
    .then((thing) => res.sendStatus(201))
  }
}


function randomId (itemsInSet){
  const randId = Math.ceil( Math.random() * itemsInSet );
  return process.env.PROD ? (randId - 1) * 10 + 2 : randId ;
}
