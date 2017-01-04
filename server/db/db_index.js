const Sequelize = require('sequelize');

const db = new Sequelize('', 'root', '') // DB, user, password

const User = db.define('user', {
  
});