var db = require('../db/db_index');

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
