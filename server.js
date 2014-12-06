var bodyParser = require('body-parser');
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  mongoose = require('mongoose'),
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
var surveySchema = mongoose.Schema({
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

var Survey = mongoose.model('BeeSurveys', surveySchema);


//---ViewRoutes---
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/survey', function(req, res) {
  res.sendFile(__dirname + '/public/survey.html');
});

app.get('/data', function(req, res) {
  res.sendFile(__dirname + '/public/data.html');
});

//---DataRoutes

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/survey_submit', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send(req.body);
})

