var HTTP = require('../services/HttpService');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');



function extractPid(url){
  var pid = "";
  pid = url.replace('api/v1/pokemon/', "").replace("/", "");
  return pid;

};

function getTypes(pid){
  var arr = [{"name": "Grass"},{"name": "Poison"}];

  return arr;
}

var PokeStore = Reflux.createStore({
    listenables: [Actions],
    init: function(){
      //this.getPokeTypes();
    },
    getPokedex: function() {
        var pokedexUrl = 'api/v1/pokedex/1/';
        HTTP.get(pokedexUrl)
        .then(function(data){
          var arr = [];

          for(var pokemon in data.pokemon) {
              var name = data.pokemon[pokemon]["name"];
              var pid = extractPid(data.pokemon[pokemon]["resource_uri"]);
              if(pid <= 720){
                // we only have images for up to 720 so only include those pokemon.
                arr.push({"name": name,"pid": pid,"types": getTypes(pid)}); // todo: add fetch types.
              }
          }
          //console.log(arr);
          this.pokelist = arr;
          this.fireUpdate();
        }.bind(this));
    },
    getPokeTypes: function(pid) {
      HTTP.get('pokemon/' + pid + "/")
      .then(function(response) {

      }.bind(this));
    },
    fireUpdate: function() {
      this.trigger('change', this.pokelist);
    }
});

module.exports = PokeStore;
