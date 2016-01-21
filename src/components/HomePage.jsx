var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SortByFilter = require('./forms/SortByFilter.jsx');
var SortRandom = require('./forms/SortRandom.jsx');

// http://www.pokemon.com/us/pokedex/

var HomePage = React.createClass({
    render: function(){
      var titleStyle = {
        color: "#919191",
        fontSize:24
      }

      var sectionStyle = {
        background: "#FFF",
        padding: 10,
        marginLeft:50,
        marginRight: 50
      }

      var searchBar = {
        background: "#313131",
        height:200
      }

      var pokeResults = {
        background: "#FFF",
        marginLeft: 50,
        marginRight: 50,
        height: 700
      }

      var sortOrder = {
        display: "none"
      }
      
      var buttonRowStyle = {
        paddingTop:20  
      };

      return (
        <div>
          <section style={sectionStyle}>
            <div style={titleStyle}>Pokédex</div>
          </section>
          <section id="searchBar" style={searchBar}>

            
          </section>
          <section id="pokeResults" style={pokeResults}>
            <div className="row" style={buttonRowStyle}>
                
                <div className="col-sm-5 col-sm-offset-1">
                    <SortRandom />
                </div>
                <div className="col-sm-5 col-sm-offset-1">
                    <SortByFilter />
                </div>
            </div>
            
          </section>
        </div>
      );
    }
});

module.exports = HomePage;
