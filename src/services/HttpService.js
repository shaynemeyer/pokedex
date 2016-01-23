var fetch = require('whatwg-fetch');
var baseUrl = 'http://pokeapi.co/';

var service = {
  get: function(url) {
    return fetch(baseUrl + url)
    .then(function(response){

      console.log(baseUrl + url);
      console.log(response.json());
      return response.json();
    })
    .catch(function(ex){
      console.log(ex);
    });
  }
};

module.exports = service;
