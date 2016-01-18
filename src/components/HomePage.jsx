var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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

      return (
        <div>
          <section style={sectionStyle}>
            <div style={titleStyle}>Pokédex</div>
          </section>
          <section id="searchBar" style={searchBar}>


          </section>
          <section id="pokeResults" style={pokeResults}>

          </section>
        </div>
      );
    }
});

module.exports = HomePage;
