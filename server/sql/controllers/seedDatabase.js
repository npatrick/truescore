const db = require('../db/db_index');
const animals = require('../../../docs/db_stubs/animals');
const prompts = require('../../../docs/db_stubs/prompts');

//One function to call them all
const seedDB = function(){
  seedChoices();
  seedPrompts();
};


//////////////////////////
//   Individual seeds   //
//////////////////////////
const seedChoices = function(){
  animals.forEach( ({name, imageUrl}) =>
    db.Choice.create({name, imageUrl})
  );
};

const seedPrompts = function(){
  prompts.forEach( ({text, sensitive}) =>
    db.Prompt.create({text, sensitive})
  );
};








module.exports = seedDB;