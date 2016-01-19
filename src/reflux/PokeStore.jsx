var HTTP = require('../services/HttpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

// http://pokeapi.co/docs/#pokemon

var PokeStore = Reflux.createStore({
    listenables: [Actions],
    getAllPokemon: function(filter){
        HTTP.post('/pokemon', filter)
        .then(function(response){

        }.bind(this));
    }
});

module.exports = PokeStore;