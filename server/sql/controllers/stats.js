// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var db = require('../db/db_index');
//returns the win and loss percentage counts
module.exports = {
  winsAndLosses: function(choiceId, promptId){

    let wins, losses;

    db.Comparison.count({where: {
        winnerId: choiceId,
        promptId
      }})
      .then( wins => wins = wins );

      db.Comparison.count({where: {
        loserId: choiceId,
        promptId
      }})
      .then( wins => {
        losses = losses;
        return {wins, losses};
      });

  },
  //Returns win and loss count based on each prompt
  statsByPrompt: function(req, res){
    const { promptId } = req.params;

    db.database.query(`select c.id, c.name, w.wins, l.losses from
      choices as c left join
      (select winnerId, count(*) as wins from comparisons where promptId = ${promptId} group by winnerId)
      as w on c.id = w.winnerId
      left join
      (select loserId, count(*) as losses from comparisons where promptId = ${promptId} group by loserId)
      as l on c.id = l.loserId`)
    .spread( (stats, metadata) => res.send( {promptId, stats} ) );

  }
};
