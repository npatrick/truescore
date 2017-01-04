const Sequelize = require('sequelize');

const db = new Sequelize('truescore', 'root', 'test') // DB, user, password


/////////////////
//   Tables    //
/////////////////

const User = db.define('user', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
});

const Choice = db.define('choice', {
  fullName: Sequelize.STRING,
  imageUrl: Sequelize.STRING
});

const Prompt = db.define('prompt', {
  text: Sequelize.STRING,
  sensitive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
});

const Comparison = db.define('comparison', {});


///////////////////////
//   Relationships   //
///////////////////////

//Puts userId as foreign key on Comparison
//Then enables getComparisons on the User Model with the has many call
Comparison.belongsTo(User);
User.hasMany(Comparison);

Comparison.belongsTo(Prompt);
Prompt.hasMany(Comparison);

//puts choiceId on Comparison aliased as Winner
//then enables Choice.getWinner so collect all the comparisons it won
Comparison.belongsTo(Choice, {as: 'Winner'});
Choice.hasMany(Comparison, {as: 'Winner'});

Comparison.belongsTo(Choice, {as: 'Loser'});
Choice.hasMany(Comparison, {as: 'Loser'});




/////////////////////
//  Create Tables  //
/////////////////////
User.sync();
Choice.sync();
Prompt.sync();
Comparison.sync();





/////////////////////
//  Export Models  //
/////////////////////
exports.User = User;
exports.Choice = Choice;
exports.Prompt = Prompt;
exports.Comparison = Comparison;




