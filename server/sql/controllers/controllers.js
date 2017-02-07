// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Neil Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var db = require('../db/db_index');
var getChoices = require('../cache/choices');
var getPrompts = require('../cache/prompts');

module.exports = {

  ////////////////////////
  //     Work Here     //
  ////////////////////////

  //Gets the Prompts from the db 
  prompts: {
    get: function (req, res) {
      //if there's a promptid
      if(req.params.id){

        db.Prompt.find({where:{id: req.params.id}})
        .then(function(prompt) {
          res.send(prompt);
        });

      } else { // if no prompt id

        getPrompts()
        .then(prompts => res.send(prompts));

      }
    },

    post: function (req, res) {
      const {text, sensitive } = req.body;
      db.Prompt.findOrCreate({where: {text: text}})
      .then(function(prompt) {
        res.status(201).send(prompt);
      });

    }
  },

  //Get All choices from the db
  allChoices: {
    get: function(req, res){
      
      getChoices()
      .then(choices => res.send(choices))
     
    }
  }
};
