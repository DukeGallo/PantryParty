var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();
 
var options = {
  url: 'http://api.bigoven.com/recipes/?api_key=5CWa265SNXT70ACQbGJ2CFrpi1c6j85v&any_kw=',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
  }
}
 
request(options, callback);

 
router.post('/', textParser, function(req,res) {
  var input = req.body;
  request.get('http://api.bigoven.com/recipes/?api_key=5CWa265SNXT70ACQbGJ2CFrpi1c6j85v&any_kw='+ input, function (error, res, body) {
    if (!error && res.statusCode == 200) {
      var description = JSON.parse(body);
       description = JSON.stringify(description.response.docs[0]);
       console.log(description);
       res.send(description);
    }
  });
});

module.exports = router;