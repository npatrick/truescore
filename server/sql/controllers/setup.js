const db = require('../db/db_index');
const animals = require('../../../docs/db_stubs/animals');
const seedDatabase = require('./seedDatabase');
const stats = require('./stats');


module.exports = {
  dangerwipedatabase: {

    get: function(req, res){
      db.database.dropAllSchemas()
      .then(result => {
        db.User.sync();
        db.Choice.sync();
        db.Prompt.sync();
        db.Comparison.sync();
        seedDatabase();
        res.send("All evidence has been destroyed, you have a fresh start.");
      });
    }
  },

  testroute: {
    get: function(req, res){


      // db.Comparison.count({where:{ winnerId: 1}})
      // .then(wins => {
      //   db.Comparison.count({where:{ loserId: 1}})
      //   .then(losses => res.send({wins, losses}));
      // });
      res.send(stats.winsAndLosses());



    }
  
  }

};