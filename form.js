function createCard(searchResponse) {
  var holder = document.getElementById('recipe-holder');
  holder.innerHTML = '';

  for (var i = 0; i < searchResponse.Results.length; i++) {

    var col = document.createElement('div');
    col.setAttribute('class', 'col s12 m4');

    var card = document.createElement('div');
    card.setAttribute('class', 'card');
    
    var cardImage = document.createElement('div');
    cardImage.setAttribute('class', 'card-image waves-effect waves-block waves-light');

    var cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');
    
    var activator = document.createElement('img');
    activator.setAttribute('class', 'activator');
    activator.setAttribute('src', searchResponse.Results[i].ImageURL);

    var cardTitle = document.createElement('span');
    cardTitle.setAttribute('class', 'card-title activator grey-text text-darken-4');
    cardTitle.textContent = searchResponse.Results[i].Title;

    var materialIcons = document.createElement('i');
    materialIcons.setAttribute('data-recipe', searchResponse.Results[i].RecipeID)
    materialIcons.setAttribute('class', 'material-icons right');
    materialIcons.textContent = 'more_vert';

    cardImage.appendChild(activator);
    cardTitle.appendChild(materialIcons);
    cardContent.appendChild(cardTitle);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    col.appendChild(card);
    holder.appendChild(col); 
  }
  holder.scrollIntoView();
}

function createModal(recipeResponse) {
  
  var body = document.body;

  var modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  modal.setAttribute('id', 'modal-' + recipeResponse.RecipeID);

  var modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content, row');

  var modalFooter = document.createElement('div');
  modalFooter.setAttribute('class', 'modal-footer');

  var modalHeader = document.createElement('h4');
  modalHeader.setAttribute('class', 'modal-header');
  modalHeader.textContent = recipeResponse.Title;

  var modalText = document.createElement('p');
  modalText.setAttribute('class', 'modal-text');
  modalText.textContent = recipeResponse.Instructions;
  
  var image = new Image(200,200); 
  image.setAttribute('class', 'col s6');
  image.src = recipeResponse.ImageURL;

  var list = document.createElement('ol');
  list.setAttribute('class', 'col s6');

  for (var i = 0; i < recipeResponse.Ingredients.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = recipeResponse.Ingredients[i].Name; 
    list.appendChild(listItem);
    console.log(listItem.textContent);
  }

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(list);
  modalContent.appendChild(image);
  modalContent.appendChild(modalText); 
  modal.appendChild(modalContent);
  modal.appendChild(modalFooter);
  body.appendChild(modal);

  modal.style.cssText = 'z-index: 1003; display:block; opacity: 1; transform: scaleZ(1); top: 10%; padding: 5%;';

  console.log(recipeResponse.ImageURL);
  // console.log(ingredientist.textContent);
}

document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();  
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      var recipes = JSON.parse(xhr.responseText);
      createCard(recipes);
    }
  };
  var keyword = document.getElementById('keyword').value;
  xhr.open('POST', '/query', true);
  xhr.send(keyword);
}, false);

var recipes = document.getElementById('recipe-holder');
recipes.addEventListener('click', function(theEvent) {
  var id = theEvent.target.getAttribute('data-recipe');
  console.log(id);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/query/' + id);
  xhr.send(recipes);
  xhr.onload = function() {
    if(xhr.status === 200) {
      var recipeIngredients = JSON.parse(xhr.responseText);
      createModal(recipeIngredients);
    
    }
  }
});