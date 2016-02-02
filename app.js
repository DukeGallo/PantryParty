var express = require('express');
var app = express();
var foodApi = require('./api.js');

app.use('/',express.static('./public'));
app.use('/query', foodApi);
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/form.js', function(req, res) {
  res.sendFile(__dirname + './form.js');
});

var port = process.env.PORT || 3000;
app.listen(port);