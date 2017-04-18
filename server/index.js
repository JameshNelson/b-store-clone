//needed moduels
const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      session = require('express-session'),
      app = module.exports = express(),
      port = 3000;

const mainCtrl = require('./controller/mainCtrl');

// creating setup for connection to a database
var massiveInst = massive.connectSync({
    connectionString: config.MASSIVE_URI
});
app.set('db', massiveInst);
var db = app.get('db');


//functions that run when handeling requets
app.use(bodyParser.json());
app.use(express.static('./dist'));//bug here
app.use(cors());
app.use(session({
    secret: config.SESSION_SECRET,
    saveUnitialized: false,
    resave: false
}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//get requests
app.get('/store/classic', function(req, res, next){
  db.run("select * from classic",function(err, result){
    res.send(result);
  })
});

app.get('/store/hots', function(req, res, next){
  db.run("select * from hots", function(err, result){
    res.send(result);
  })
});

app.get('/store/diablo3', function(req, res, next){
  db.run("select * from diablo_3", function(err, result){
    res.send(result);
  })
});

app.get('/store/overwatch', function(req, res, next){
  db.run("select * from overwatch", function(err, result){
    res.send(result);
  })
});


//post requests

//put requests

//delete requets

//start the server listening on port
app.listen(port, function() {
    console.log('Ship docked at port ' + port);
});
