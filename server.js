var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
User = require('./api/models/userModel'), //created model loading here

bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb',{useMongoClient:true}); 

mongoose.connect('mongodb://khalaspr:Pravin123@ds125126.mlab.com:25126/tododb',{useMongoClient:true});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
