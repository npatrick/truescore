// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const db = require('../db/db_index');
const seedDatabase = require('./seedDatabase');
const stats = require('./stats');
const seedWinLoss = require('../../../docs/tests/winloss');
const getChoiceCount = require('./choice_count_cache');

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
      num = getChoiceCount();
     res.send(`${num}`);


    }

  }

};
