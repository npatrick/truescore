var db = require('../db/db_index');

module.exports = {
  dangerwipedatabase: {
    
    get: function(req, res){
      db.database.dropAllSchemas()
      .then(result => {
        db.User.sync();
        db.Choice.sync();
        db.Prompt.sync();
        db.Comparison.sync();

        res.send("All evidence has been destroyed, you have a fresh start.");
      });
    }
  }

};