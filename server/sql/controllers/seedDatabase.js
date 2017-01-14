// Copyright <2017> <Michael Thelen, Bartek Rigngwelski, Niel Romana, Nikshala Velayutham>

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


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
