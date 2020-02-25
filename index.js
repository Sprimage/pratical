var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('express app');
});


app.listen(process.env.PORT || 3500, function(){
	console.log('testapp is running at localhost:8080');
});
