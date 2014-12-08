var bodyParser = require('body-parser');
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  mongoose = require('mongoose'),
  Baby = require('babyparse'),
  users = {};

server.listen(9030);
console.log('App running on port 9030');

// Connect to DB
mongoose.connect('mongodb://localhost/beesurvey', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to mongoDB');
  }
});

//---DB Models---
var Survey = mongoose.Schema({
  zip: String,
  totalHives: Number,
  hivesLost: [{
    year: Number,
    numberLost: Number
  }],
  comments: String,
  created: {
    type: Date,
    default: Date.now
  }
});

var Survey = mongoose.model('BeeSurveys', Survey);


//---ViewRoutes---
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/survey', function(req, res) {
  res.sendFile(__dirname + '/public/survey.html');
});

app.get('/vis', function(req, res) {
  res.sendFile(__dirname + '/public/vis.html');
});

app.get('/poc', function(req, res) {
  res.sendFile(__dirname + '/public/poc.html');
});

app.get('/docs', function(req, res) {
  res.sendFile(__dirname + '/public/api.html');
});

//---DataRoutes

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/api/survey_submit', urlencodedParser, function (req, res) {
  console.log(req.body);

  var newSurvey = new Survey({
        zip: req.body.zipcode,
        totalHives: req.body.totalhives,
        hivesLost: [
        {
          year: 2014,
          numberLost: req.body.hiveslost2014
        },
        {
          year: 2013,
          numberLost: req.body.hiveslost2013
        },
        {
          year: 2012,
          numberLost: req.body.hiveslost2012
        }
        ],
        comments: req.body.comments
      });
      newSurvey.save(function(err) {
        if (err) {
          throw err;
        }
      });

  res.sendFile(__dirname + '/public/success.html');
});

app.get('/api/survey_results', function (req, res) {
  var query = Survey.find({});
  query.exec(function (err, docs) {
    if (err) {
      throw err;
    } else {
      console.log(docs);
      //res.body = docs;
      res.send(docs)
    }
  });
});