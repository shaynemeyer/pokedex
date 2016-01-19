var HTTP = require('../services/HttpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var EmailStore = Reflux.createStore({
    listenables: [Actions],
    getAllPokemon: function(filter){
        HTTP.post('/pokemon', filter)
        .then(function(response){

        }.bind(this));
    }
});

module.exports = EmailStore;