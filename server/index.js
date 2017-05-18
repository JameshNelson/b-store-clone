//needed moduels
const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      session = require('express-session'),
      stripe = require('stripe')("sk_test_zSZ6vxAjKpUA3mFA8ra2q0Y2"),
      app = module.exports = express(),
      port = 3000;

const mainCtrl = require('./controller/mainCtrl');

//test keys public
//pk_test_zpRONBjxlVGJMjgVWn0iIBIm
//private
//sk_test_zSZ6vxAjKpUA3mFA8ra2q0Y2

// creating setup for connection to a database
var massiveInst = massive.connectSync({
    connectionString: `postgress://${config.NAME}:${config.PASSWORD}@${config.ENDPOINT}:5432/${config.DBPORT}`
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

app.get('/store/starcraft2', function(req, res, next){
  db.run("select * from starcraft", function(err, result){
    res.send(result);
  })
});

app.get('/store/hearthstone', function(req, res, next){
  db.run('select * from hearthstone', function(err,result){
    res.send(result);
  })
});

app.get('/store/wow', function(req, res, next){
  db.run('select * from wow', function(err, result){
    res.send(result);
  })
})

app.get('/store/purchase', function(req, res, next){
  res.render('index',{ pk_test_zpRONBjxlVGJMjgVWn0iIBIm

  })
})

app.post('/charge', function(req, res, next){
  var token = req.body.stripeToken;
  var chargeAmount = req.body.chargeAmount;
  var charge = stripe.charges.create({
    amount: chargeAmount,
    currency: 'usd',
    source: token


  })
})



//post requests

//put requests

//delete requets

//start the server listening on port
app.listen(port, function() {
    console.log('Ship docked at port ' + port);
});
