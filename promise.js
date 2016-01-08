// function get(url) {

//   var myPromise = new Promise(function(resolve, reject) {

//     var http = new XHMLHttpRequest();
//     http.open('GET', url);

//     http.onload = function() {
//       if (http.status == 200) {
//         resolve(recipeRequest + http.responseText);
//       } else {
//         reject(Error("do not load page show error" + http.statusText));
//       }
//     }


    rp('http://api.bigoven.com/recipes/?api_key=5CWa265SNXT70ACQbGJ2CFrpi1c6j85v&pg=1&rpp=10&any_kw=')
      .then(function() { 
        for (var i = 0; i < 6; i++) {
          ids.push(data.Results[i].RecipeID);
        });
            rp('http://api.bigoven.com/recipe/')
            .then('http://api.bigoven.com/recipe/' + ids[0] + '/?api_key=5CWa265SNXT70ACQbGJ2CFrpi1c6j85v')
              var data = JSON.parse(body);



    // rp(request for recipe search)
    //   .then(recipeResults)
    //     for(for each result)
    //       rp(request specific recipe with id)
    //         .then(data) 
    //           add result to object to be returned
    //           .send json







        // function getRecipie() {
        //   return new Promise(function(resolve, reject) {
        //     request('/', function(err, body) {
        //       resolve(body);
        //     });
        //   });
        // }

        // var thenAble = getRecipie();
        // thenAble.then(function(body) {
        //   console.log(body);
        // });

        // request.post(body);



        // var options = {
        //   uri: 'http://api.bigoven.com/recipe/',
        //   qs: {
        //       access_token: '5CWa265SNXT70ACQbGJ2CFrpi1c6j85v'
        //   },
        //   headers: {
        //       'User-Agent': 'Request-Promise'
        //   },
        //   json: true
        // };
     
        // rp(options);
        //   rp.then(function(repos, ) {
        //       console.log(body, repos.length);
        //   })
        //   .catch(function(err) {
        //   });

