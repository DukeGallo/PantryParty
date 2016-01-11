var express = require('express');
var app = express();
var foodApi = require('./api.js');

app.use(express.static('./'));
app.use('/query', foodApi);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/form.js', function(req, res) {
  res.sendFile(__dirname + './form.js');
});

app.listen(1337);
console.log('Server for Pantry Party!');