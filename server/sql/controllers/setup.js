const db = require('../db/db_index');
const animals = require('../../../docs/db_stubs/animals');
const seedDatabase = require('./seedDatabase');


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
    get: function(req, res) {
      let names = [];
      animals.forEach(animal => {
        names.push(animal.name);
        db.Choice.create({
          fullName: animal.name,
          imageUrl: animal.imageUrl
        });
      });

      res.send(names);
    }
  }

};