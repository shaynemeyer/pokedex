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
            if(pid <= 718){
              // we only have images for up to 718 so only include those pokemon.
              arr.push({"name": name,"pid": pid});
            }
        }

        // now sort the array by pokemon id, lowest to highest.
        var sortedArray = this.prepareArray(arr);

        this.setState({pokelist:sortedArray});
      }.bind(this));

    },
    prepareArray: function(arr) {
        var sortedArray = arr.sort(function(a,b){return a.pid-b.pid});
        var newArray = [];
        for(var i = 0, len = sortedArray.length; i < len; i++){
          var next = (i < (len - 1)) ? sortedArray[i+1] : sortedArray[0];
          var prev = (i > 0) ? sortedArray[i-1] : sortedArray[len-1];

          newArray.push({"name": sortedArray[i]["name"], "pid": sortedArray[i]["pid"], "next": next, "prev": prev});
        }

        return newArray;
    },
    render: function(){

        var listItems = this.state.pokelist.map(function(item){
            return <PokeListItem key={item.pid} pid={item.pid} name={item.name} next={item.next} prev={item.prev}/>;
        });
        return (
          <div>
          {listItems}
          </div>
        );
    }
});

module.exports = PokeList;
