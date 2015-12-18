var express = require('express');
var app = express();
var request = require('request');
var Promise = require('promise')

function getWebsite() {
  return new Promise(function(resolve, reject) {
      request('https://www.google.com', function(err, data) {
        resolve(data);
      })  
  }); 
}

var thenAble = getWebsite();
thenAble.then(function(data) { console.log(data); })

app.listen(1337);
console.log('Server on 1337');