const router = require('express').Router();
const controller = require('./controllers/controllers');
const setup = require('./controllers/setup');
const comparison = require('./controllers/comparison');

/////////////////////
//     Prompts     //
/////////////////////

//get data for all prompts
router.get('/prompts', controller.prompts.get);

//get data for single prompt
router.get('/prompts/:id', controller.prompts.get);

// create new prompt
router.post('/prompts', controller.prompts.post);



/////////////////////
//     Choices     //
/////////////////////

// return all choices in DB
router.get('/allChoices', controller.allChoices.get);



/////////////////////////
//     Comparisons     //
/////////////////////////

router.post('/comparison', comparison.post);

router.get('/comparison', comparison.get);

router.get('/comparison/all', comparison.getAll);



/////////////////////////
//     Dev/Testing     //
/////////////////////////

// to drop all tables, and re-initate them
router.get('/dangerwipedatabase', setup.dangerwipedatabase.get);

router.get('/testroute', setup.testroute.get);




module.exports = router;
