document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();
document.getElementById('search-button').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
    }
});  

  var xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if(xhr.status === 200) {
      // console.log(xhr.responseText);
      var recipes = JSON.parse(xhr.responseText);
      var holder = document.getElementById('recipe-holder');
      holder.innerHTML = '';
      for (var i = 0; i < recipes.Results.length; i++) {
        
        // var searchResults = document.createElement('i');
        // searchResults.setAttribute('class', 'brown-text');
        
        var id = document.createElement('div');
        id.setAttribute('id', 'card');

        var col = document.createElement('div');
        col.setAttribute('class', 'col s12 m4');
        // col.textContent = recipes.Results[i].RecipeID + 
        // ' ' + recipes.Results[i].Title + ' ' 
        // + recipes.Results[i].ImageURL;
        
        var iconBlock = document.createElement('div');
        iconBlock.setAttribute('class', 'icon-block');
        
        var light = document.createElement('p');
        light.setAttribute('class', 'light');
        
        var card = document.createElement('div');
        card.setAttribute('class', 'card');
      
        var cardImage = document.createElement('div');
        cardImage.setAttribute('class', 'card-image waves-effect waves-block waves-light');
       
        var activator = document.createElement('img');
        activator.setAttribute('class', 'activator');
        activator.setAttribute('src', recipes.Results[i].ImageURL);

        var cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card-content');
       
        var cardTitle = document.createElement('span');
        cardTitle.setAttribute('class', 'card-title activator grey-text text-darken-4');
        cardTitle.textContent = recipes.Results[i].Title;
       
        var materialIcons = document.createElement('i');
        materialIcons.setAttribute('class', 'material-icons right');
        materialIcons.textContent = 'more_vert';

        cardTitle.appendChild(materialIcons);
        cardContent.appendChild(cardTitle);
        cardImage.appendChild(activator);
        card.appendChild(cardImage);
        card.appendChild(cardContent);
        light.appendChild(card);
        iconBlock.appendChild(light);
        col.appendChild(iconBlock);
        holder.appendChild(col);
      }
      document.getElementById('card').scrollIntoView();
      // document.getElementById('reveal').addEventListener('click', function(e) {
      //    e.preventDefault();

      //   var xhr = new XMLHttpRequest();

      //   xhr.onload = function() {
      //     if(xhr.status === 200) {
      //       var ingredients = JSON.parse(xhr.responseText);
      //       var list = document.getElementById('ingredients-list');
      //       for (var i = 0; i < ingredients.Results.length; i++) {

      //   var ingredientsList = document.createElement('p');
      //   ingredientsList.setAttribute('id', 'ingredients-list'); 
    }
  };

  var keyword = document.getElementById('keyword').value;
  console.log(keyword);

  xhr.open('POST', 'http://localhost:1337/query', true);
  xhr.send(keyword);
}, false);

