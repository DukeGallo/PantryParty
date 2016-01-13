var express = require('express');                    
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

router.post('/', textParser, function(req,res) {
  var input = req.body;
  var url = 'http://api.bigoven.com/recipes/?api_key=5CWa265SNXT70ACQbGJ2CFrpi1c6j85v&pg=1&rpp=10&any_kw=' + input;
  console.log(url);
  var options = {
    url: url,
    headers: {
      'Accept': 'application/json',                     
      'Content-Type': 'application/json'
    }
  };

  request.get(options, function (error, response, body) {
    if (!error && res.statusCode == 200) {
      res.send(body);
      console.log('call has been made');
    }
  });
});

router.get('/:recipeID', function(req, res) {
  var recipeID = req.params.recipeID;
  var url = 'http://api.bigoven.com/recipe/' + recipeID + '/?api_key=5CWa265SNXT70ACQbGJ2CFrpi1c6j85v';
  var options = {
    url: url,
    headers: {
      'Accept': 'application/json',                     
      'Content-Type': 'application/json'
    }
  };

  request.get(options, function (error, response, body) {
    if (!error && res.statusCode == 200) {
      res.send(body);

    }
  });
});

module.exports = router;