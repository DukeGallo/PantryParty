document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }

  var keyword = document.getElementById('keyword').value;
  console.log(keyword);

  xhr.open('POST', 'http://localhost:1337/query', true);
  xhr.send(keyword);
}, false);

var recipe = document.getElementByTagName('span')[0,1,2,3,4,5];

document.getElementById('recipe-1-outside').addEventListener('load', function(e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200) {
      console.log(xhr.body);
    }
  }

