var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var imageUrlBase = "http://pokeapi.co/media/img/";

var PokeListItem = React.createClass({
    render: function(){
      var abilities = this.props.types.map(function(item){
          return <span>{item.name}</span>;
      });
        var PanelWrapperStyle = {
          paddingLeft: 0,
          paddingRight: 0
        };

        var FigureStyle = {
          background: "#F2F2F2",
          display: "block",
          borderRadius: 5,
          width: "100%",
          textAlign: "center"
        };

        var ImageStyle = {
          padding: 10
        };

        var NotchStyle = {
          borderBottom: "2px solid #fff"
        };

        var PokemonInfoStyle = {
          clear: "both",
          paddingLeft: "7.2525%",
          marginTop: -50
        };

        var PokemonIdStyle = {
          fontFamily: "arial,sans-serif",
          color: "#919191",
          fontSize: "1.2em"
        };

        var NameStyle = {
          fontFamily: "arial,sans-serif",
          color: "#313131",
          textTransform: "none",
          marginBottom: 5
        };

        var AbilitiesStyle = {

        };

        return (
            <div className="panel panel-default col-xs-3" style={PanelWrapperStyle}>
              <Link to={`/pokemon/${this.props.pid}`}>
                <div className="panel-heading">
                  <figure style={FigureStyle}>
                    <img src={`${imageUrlBase}${this.props.pid}.png`} width="75%" style={ImageStyle} />
                  </figure>
                </div>
                <div className="panel-body">


                  <span style={NotchStyle}></span>
                  <div className="pokemon-info" style={PokemonInfoStyle}>
                    <p className="pokemon-id" style={PokemonIdStyle}>
                    # {this.props.pid}
                    </p>
                    <h3 style={NameStyle}>{this.props.name}</h3>
                    <div className="abilities" style={AbilitiesStyle}>
                      {abilities}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
        );
    }
});

module.exports = PokeListItem;
