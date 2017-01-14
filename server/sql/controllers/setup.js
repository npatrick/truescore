const db = require('../db/db_index');
const seedDatabase = require('./seedDatabase');
const stats = require('./stats');
const seedWinLoss = require('../../../docs/tests/winloss');

//wipes the databases and uses the new datas
module.exports = {
  dangerwipedatabase: {

    get: function(req, res){
      db.database.dropAllSchemas()
      .then(result => {
        db.User.sync();

        db.Choice.sync();

        db.Prompt.sync()

        .then(() =>
          db.Comparison.sync()
          .then(() => {
            seedDatabase();
            res.send("Done");

          })
        );

      });
    }
  },

  seedwinloss: {

    get: function(req, res){
      seedWinLoss();
      res.send('comparisons seeded');
    }
  },

  testroute: {
    get: function(req, res){

      // db.database.query(`select winnerId, count(*) from comparisons
      // where promptId = 1 group by winnerId`)
      // .spread((results, metadata) => res.send(results))

      const derp = 1;


      db.database.query(`select c.id, c.name, w.wins, l.losses from
      choices as c left join
      (select winnerId, count(*) as wins from comparisons where promptId = ${derp} group by winnerId)
      as w on c.id = w.winnerId
      left join
      (select loserId, count(*) as losses from comparisons where promptId = ${derp} group by loserId)
      as l on c.id = l.loserId`)
      .spread((results, metadata) => res.send(results));



    }

  }

};
