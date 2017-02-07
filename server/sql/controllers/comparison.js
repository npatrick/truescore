// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



var db = require('../db/db_index');
var colors = require('colors');
const getChoiceCount = require('../cache/choice_count');


module.exports = {
  get: function(req, res){

    const promptId = req.params.id || 1;
    //how many choices in db?

    getChoiceCount()
    .then(count => {


      //get 2 random, but different ids
      const choice1Id = randomId(count);
      let choice2Id = randomId(count);

      while (choice1Id === choice2Id ){
        choice2Id = randomId(count);
      }


      // get choices data from db
      db.Choice.findAll( {where: {id: [choice1Id, choice2Id] } } )
      .then( ([choiceA, choiceB]) => res.send([choiceA, choiceB])  );
    })

  },
  //gets All the comparisons from db
  getAll: function(req, res){

    db.Comparison.findAll()
    .then(comparisons => res.send(comparisons));

  },
  //post the win and loss to the db based on promptId
  post: function(req, res){

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
