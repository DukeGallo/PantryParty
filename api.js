var express = require('express');                    //setting up router
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

    router.post('/', textParser, function(req,res) {    //bringing in API
      var input = req.body;
      var url = 'http://api.bigoven.com/recipes/?api_key=5CWa265SNXT70ACQbGJ2CFrpi1c6j85v&pg=1&rpp=10&any_kw=' + input;
      console.log(url);
      var options = {
        url: url,
        headers: {
          'Accept': 'application/json',                //accepting Json not XHTML      
          'Content-Type': 'application/json'
      }
  };

  request.get(options, function (error, response, body) {
      if (!error && res.statusCode == 200) {
        var data = JSON.parse(body);
        var ids = [];
        for (var i = 0; i < 6; i++) {
          ids.push(data.Results[i].RecipeID);
      }

      var recipeUrl = 'http://api.bigoven.com/recipe/' + ids[0] + '/?api_key=5CWa265SNXT70ACQbGJ2CFrpi1c6j85v';
      var recipeRequest = {
          url: recipeUrl,
          headers: {
                'Accept': 'application/json',                //accepting Json not XHTML      
                'Content-Type': 'application/json'
            }
        };
        request.get(recipeRequest, function(error, response, body) {
            console.log(body);
        });



    Promise.all([ recipeUrl ]).then(function(body) {
     console.log(body);
 });





    res.send(body);


    console.log('call has been made');

}
});
});

module.exports = router;