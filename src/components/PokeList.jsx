var React = require('react');
var Reflux = require('reflux');
var PokeListItem = require('./PokeListItem.jsx');
//var Actions = require('../reflux/Actions.jsx');
//var PokeStore = require('../reflux/PokeStore.jsx');
var HTTP = require('../services/HttpService');


function extractPid(url){
  var pid = "";
  pid = url.replace('api/v1/pokemon/', "").replace("/", "");
  return pid;

};

var PokeList = React.createClass({
    getInitialState: function(){
      return {pokelist:[]}
    },
    componentWillMount: function() {
      //Actions.getPokedex();
      var pokedexUrl = 'api/v1/pokedex/1/';
      HTTP.get(pokedexUrl)
      .then(function(data){
        var arr = [];

        for(var pokemon in data.pokemon) {
            var name = data.pokemon[pokemon]["name"];
            var pid = extractPid(data.pokemon[pokemon]["resource_uri"]);
            if(pid <= 720){
              // we only have images for up to 720 so only include those pokemon.
              arr.push({"name": name,"pid": pid}); // todo: add fetch types.
            }
        }
        this.setState({pokelist:arr});
      }.bind(this));

      var pokedexUrl = 'api/v1/pokedex/1/';
      HTTP.get(pokedexUrl)
      .then(function(data){
        var arr = [];

        for(var pokemon in data.pokemon) {
            var name = data.pokemon[pokemon]["name"];
            var pid = extractPid(data.pokemon[pokemon]["resource_uri"]);
            if(pid <= 720){
              // we only have images for up to 720 so only include those pokemon.
              arr.push({"name": name,"pid": pid,"types": []}); // todo: add fetch types.
            }
        }

        // now sort the array by pokemon id, lowest to highest.
        var sortedArray = arr.sort(function(a,b){return a.pid-b.pid});
        this.setState({pokelist:sortedArray});
      }.bind(this));

    },
    render: function(){
        var listItems = this.state.pokelist.map(function(item){
            return <PokeListItem key={item.pid} pid={item.pid} name={item.name} />;
        });
        return (
          <div>
            {listItems}
          </div>
        );
    }
});

module.exports = PokeList;
