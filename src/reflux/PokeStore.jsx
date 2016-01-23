var HTTP = require('../services/HttpService');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

// http://pokeapi.co/docs/#pokemon
var pokedexUrl = "api/v1/pokedex/1/";
var pokemonUrl = "api/v1/pokemon/";

var PokeStore = Reflux.createStore({
    listenables: [Actions],
    getPokedex: function() {
        HTTP.get(pokedexUrl)
        .then(function(response){
          this.pokelist = response;
        }.bind(this));
    },
    getPokeTypes: function(pid) {
      HTTP.get(pokemonUrl + pid + "/")
      .then(function(response) {

      }.bind(this));
    }
});

module.exports = PokeStore;
