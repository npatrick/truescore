const express = require ('express');
const db = require ('./db/db_index');

const morgan = require('morgan');
const parser = require('body-parser');

const router = require('./routes');

const PORT = process.env.PORT || 8080;

const app = express();


//log and parse 
app.use(morgan('dev'));
app.use(parser.json());

//set up API routes
app.use('/api', router);

//serve client files

app.use(express.static(__dirname+'/../../client'));

app.listen(PORT, function(){
  console.log('Listening on', PORT);
});
