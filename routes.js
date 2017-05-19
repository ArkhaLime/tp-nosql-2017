'use strict';

var PORT = 3000;

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var userController = require('./controllers/userController');


var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(methodOverride());


app.get("/user", userController.allUsers);
app.post("/user/search", userController.queryUser);
app.get("/user/:id", userController.getUser);
app.post("/user", userController.updateUser);

app.listen(PORT);
console.log("application is running, listening on port : "+PORT);