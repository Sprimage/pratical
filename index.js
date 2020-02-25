var http = require('http');
var express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');


const sequelize = new Sequelize({
  database: 'postgres',
  username: 'postgres',
  password: 'password',
  dialect: 'postgres',
});


sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

var app = express();

app.get('/', function(req, res){
	res.send('express app');
});


app.listen(process.env.PORT || 7200, function(){
	console.log('testapp is running at localhost:7200');
});
