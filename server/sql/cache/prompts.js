var db = require('../db/db_index');

let prompts;

const getPrompts = function(){
  return new Promise(function(resolve, reject){
    if (prompts){
      resolve(prompts);
    } else {
      db.Prompt.findAll()
      .then(prompts => {
        prompts = prompts;
        resolve(prompts);
      })
    }

  });
};

module.exports = getPrompts;