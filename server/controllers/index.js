var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({include:[db:user]})
      .then(function(messages){
        res.json(messages);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
      .spread(function(user, created){
        db.Message.create({
          userid: user.get('id'),
            text: req.body.message,
            roomname: req.body.roomname
        }).then(function(message){
          res.sendStatus(201);
        })
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
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
  }
};
