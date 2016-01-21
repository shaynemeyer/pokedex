var React = require('react');
var PokeListItem = require('./PokeListItem.jsx');
var Actions = require('../reflux/Actions.jsx');

var pokeListData = [
  {
    "name": "Bulbasaur",
    "pid": "1",
    "types": [
      {
        "name": "Grass"
      },
      {
        "name": "Poison"
      }
    ]
  },
  {
    "name": "Ivysaur",
    "pid": "2",
    "types": [
      {
        "name": "Grass"
      },
      {
        "name": "Poison"
      }
    ]
  },
  {
    "name": "Venusaur",
    "pid": "3",
    "types": [
      {
        "name": "Grass"
      },
      {
        "name": "Poison"
      }
    ]
  }
  ,
  {
    "name": "Charmander",
    "pid": "4",
    "types": [
      {
        "name": "Fire"
      }
    ]
  },
  {
    "name": "Charmeleon",
    "pid": "5",
    "types": [
      {
        "name": "Fire"
      }
    ]
  },
  {
    "name": "Charizard",
    "pid": "6",
    "types": [
      {
        "name": "Fire"
      },
      {
        "name": "Flying"
      }
    ]
  },
  {
    "name": "Squirtle",
    "pid": "7",
    "types": [
      {
        "name": "Water"
      }
    ]
  },
  {
    "name": "Squirtle",
    "pid": "8",
    "types": [
      {
        "name": "Water"
      }
    ]
  }
];

var PokeList = React.createClass({
    getInitialState: function(){
      return {pokelist:pokeListData}
    },
    componentWillMount: function() {
      //Actions.getPokedex();
    },
    render: function(){
        var listItems = this.state.pokelist.map(function(item){
            return <PokeListItem key={item.pid} pid={item.pid} name={item.name} types={item.types} />;
        });
        return (
          <div>
            {listItems}
          </div>
        );
    }
});

module.exports = PokeList;
