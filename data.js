'use strict'
var express = require('express');
var app = express();
var app1 = express();
var path = require('path');
var nodemailer = require('nodemailer');
var port =1337;
var port1 =1338;
var bodyParser = require('body-parser');
app.use(express.static("public"));
var cors = require('cors');

var dir = __dirname+'/public';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/rms2';
mongoose.connect(mongoDB);

var Schema1 = new mongoose.Schema({
  _id: String,
  email : String,
  password : String,
  repassword : String,
});

var Userdet = mongoose.model('Userdet', Schema1 );

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/register', function(req, res) {
  res.sendFile(path.join(dir+ '/reg.html'));
});

app.use('/index', function(req, res) {
  res.sendFile(path.join(dir+ '/index.html'));
});

app.use('/read', function(req, res) {
  res.sendFile(path.join(dir+ '/read.html'));
});

app.use('/login', function(req, res) {
  res.sendFile(path.join(dir+ '/login.html'));
});

app.use('/inven', function(req, res) {
  res.sendFile(path.join(dir+ '/inven.html'));
});

app.use('/logout', function(req, res) {
  res.sendFile(path.join(dir+ '/login.html'));
});

app.use('/wallet', function(req, res) {
  res.sendFile(path.join(dir+ '/wallet.html'));
});

var reg;

app.use('/regsuc', function(req, res) {
  reg = req.body;
  var myData = new Userdet(reg);
  myData.save()
  .then(item => {
    // res.send("item saved to database");
    console.log("Account Registered");
    res.sendFile(path.join(dir+ '/login.html'));
  })
  .catch(err => {
    res.status(400).send("Unable to save to datavase");
  });
});

app.use('/loguser', function(req, res) {
  Userdet.findOne({ _id:req.body._id,password:req.body.password}, function(err, userdet){

    if (userdet){
      res.sendFile(path.join(dir+ '/inven.html'));
    }
    else{
      res.status(401).send("Wrong username or password");
      res.sendFile(path.join(dir+ '/login.html'));
    }

});
});

app.listen(port);
console.log('Listening on port : '+port);
