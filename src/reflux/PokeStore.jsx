var HTTP = require('../services/HttpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

// http://pokeapi.co/docs/#pokemon
var pokedexUrl = "/pokedex/1/";

var PokeStore = Reflux.createStore({
    listenables: [Actions],
    getPokedex: function(filter){
        HTTP.post(pokedexUrl, filter)
        .then(function(response){

        }.bind(this));
    }
});

module.exports = PokeStore;
