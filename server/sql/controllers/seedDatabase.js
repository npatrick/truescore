const db = require('../db/db_index');
const prompts = require('../../../docs/db_stubs/prompts');
const people = require('../../../docs/db_stubs/people');

//One function to call them all
const seedDB = function(){
  seedPeople();
  seedPrompts();
};

//////////////////////////
//   Individual seeds   //
//////////////////////////


const seedPrompts = function(){
  prompts.forEach( ({text, title, sensitive, tileImage}) =>
    db.Prompt.create({text, title, sensitive, tileImage})
  );
};


const seedPeople = function(){
  people.forEach( ({name, imageUrl}) =>
    db.Choice.create({name, imageUrl})
  );
};




module.exports = seedDB;
