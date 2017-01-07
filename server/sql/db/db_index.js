const Sequelize = require('sequelize');

// mysql://b06fed5159e473:287381f7@us-cdbr-iron-east-04.cleardb.net/heroku_c10fc179039d016?reconnect=true


// const db = process.env.CLEARDB_DATABASE_URL ? 
//   new Sequelize(process.env.CLEARDB_DATABASE_URL) : 
//   new Sequelize('truescore', 'root', 'test', {
//     dialect: 'mysql',
//     port: 3306,
//     host: 'localhost'
//   }) // DB, user, password



if(process.env.CLEARDB_DATABASE_URL){

   var db = new Sequelize('truescore', 'root', 'test', {
      dialect: 'mysql',
      port: 3306,
      host: 'localhost'
    }) // DB, user, password

} else {

  var db = new Sequelize(process.env.CLEARDB_DATABASE_URL) // DB, user, password

}

  console.log("PROCESS.ENV", process.env.CLEARDB_DATABASE_URL);

/////////////////
//   Tables    //
/////////////////

const User = db.define('user', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  fbId: {
    type: Sequelize.STRING,
    unique: true
  },
  token: {
    type: Sequelize.STRING,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  minifbPhoto: {
    type: Sequelize.STRING,
    unique: true
  },
  bigfbPhoto: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  }
});

const Choice = db.define('choice', {
  name: Sequelize.STRING,
  imageUrl: Sequelize.STRING
});

const Prompt = db.define('prompt', {
  text: Sequelize.STRING,
  sensitive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
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
Comparison.belongsTo(Choice, {as: 'winner'});
//Choice.hasMany(Comparison, {as: 'winner'});

Comparison.belongsTo(Choice, {as: 'loser'});
//Choice.hasMany(Comparison, {as: 'loser'});




/////////////////////
//  Create Tables  //
/////////////////////

// add {force: true} to have syncs drop tables
User.sync();
Choice.sync();
Prompt.sync();
Comparison.sync();





/////////////////////
//  Export Models  //
/////////////////////
exports.database = db;
exports.User = User;
exports.Choice = Choice;
exports.Prompt = Prompt;
exports.Comparison = Comparison;
