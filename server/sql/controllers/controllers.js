var db = require('../db/db_index');

module.exports = {
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

  ////////////////////////
  //     Work Here     //
  ////////////////////////


  prompts: {
    get: function (req, res) {
      db.Prompt.findAll({include: [db.Prompt]})
        .then(function(prompts) {
          res.json(prompts);
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

  messages: {
    get: function (req, res) {
      db.Message.findAll({include: [db.User]})
        .then(function(messages) {
          res.json(messages);
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
