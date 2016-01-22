var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PokePage = React.createClass({
    getInitialState: function(){
      return {pokeId: ""};
    },
    componentDidMount: function() {
      this.setState({pid: this.props.params.pokeId});
    },
    componentWillReceiveProps: function(nextProps){
      this.setState({pid: nextProps.params.pokeId});
    },
    render: function(){
        var PreviousStyle = {
          borderRight: "4px solid #fff",
          margin: 0
        };

        var PaginationPokeId = {
          fontFamily: "Flexo-Bold,arial,sans-serif",
          color: "#fff",
          fontSize: "150%",
          lineHeight: "162.5%",
          textTransform: "none"
        };

        var PaginationPokeName = {
          color: "#616161",
          margin: "0 0.5em",
          fontSize: "150%",
          lineHeight: "162.5%",
          textTransform: "none"
        };

        var PaginationArrow = {
          fontSize:20,
          color: "#FFF"
        }

        var PokeTitle = {
          fontFamily: "Flexo-Medium,arial,sans-serif",
          color: "#212121",
          fontSize: "225%",
          marginTop: "0.5em",
          textAlign: "center",
          width: "100%",
          wordBreak: "break-word"
        };

        var PokeNameStyle = {

        };

        var PokeNumberStyle = {
          color: "#616161",
          marginLeft: "0.125em"
        }

        return (
            <div className="poke-detail-wrapper">
              <section id="poke-nav" className="pokemon-pagination">
                <Link style={PreviousStyle} to={`/pokemon/720`}>
                  <i className="fa fa-chevron-circle-left" style={PaginationArrow}></i>
                  <span style={PaginationPokeId} className="">#720</span>
                  <span style={PaginationPokeName} className="">Hoopa</span>
                </Link>

                <Link to={`/pokemon/720`}>

                  <span style={PaginationPokeId} className="">#2</span>
                  <span style={PaginationPokeName} className="">Ivysaur</span>
                  <i className="fa fa-chevron-circle-right" style={PaginationArrow}></i>
                </Link>
              </section>
              <section id="poke-title" style={PokeTitle}>
                <span style={PokeNameStyle}>Pokesaur</span>
                <span style={PokeNumberStyle}>#1</span>
              </section>
            </div>
        );
    }
});

module.exports = PokePage;
