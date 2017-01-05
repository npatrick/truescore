const express = require ('express');
const db = require ('./db/db_index');

const morgan = require('morgan');
const parser = require('body-parser');

const router = require('./routes');

const app = express();

// set port to listen on
app.set('port', 8080);

//log and parse
app.use(morgan('dev'));
app.use(parser.json());

//set up API routes
app.use('/api', router);

//serve client files

app.use(express.static(__dirname+'/../../client'));

app.listen(app.get('port'), function(){
  console.log('Listening on', app.get('port'));
});
