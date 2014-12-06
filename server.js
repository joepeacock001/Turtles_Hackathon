var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  mongoose = require('mongoose'),
  users = {};

server.listen(9030);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/survey', function(req, res) {
  res.sendFile(__dirname + '/public/survey.html');
});

app.get('/data', function(req, res) {
  res.sendFile(__dirname + '/public/data.html');
});