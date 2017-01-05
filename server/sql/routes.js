var controller = require('./controllers/controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/prompts', controller.prompts.get);

router.post('/prompts', controller.prompts.post);


module.exports = router;
