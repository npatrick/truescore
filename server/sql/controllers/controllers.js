var db = require('../db/db_index');

module.exports = {

  ////////////////////////
  //     Work Here     //
  ////////////////////////


  prompts: {
    get: function (req, res) {
      let derp = "";
      db.Prompt.findAll()
      .then(function(prompts) {
        res.send(prompts);
      });
    },
    post: function (req, res) {
      const {text, sensitive } = req.body;
      db.Prompt.findOrCreate({where: {text: text}})
      .then(function(prompt) {
        res.status(201).send(prompt);
      });

    }
  },

  allChoices: {
    get: function(req, res){
      db.Choice.findAll()
      .then(choices => res.send(choices));
    }
  },


   /////////////
  //DON'T USE//
  /////////////
  users: {
    get: function (req, res) {
      db.User.findAll()
        .then(function(users) {
          res.json(users);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        // findOrCreate returns multiple resutls in an array
        // use spread to assign the array to function arguments
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
    }
  },

  messages: {
    get: function (req, res) {
      db.Message.findAll({include: [db.User]})
        .then(function(messages) {
          res.send(messages);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        // findOrCreate returns multiple resutls in an array
        // use spread to assign the array to function arguments
        .spread(function(user, created) {
          db.Message.create({
            userid: user.get('id'),
            text: req.body.message,
            roomname: req.body.roomname
          }).then(function(message) {
            res.sendStatus(201);
          });
        });
    }
  }
};
