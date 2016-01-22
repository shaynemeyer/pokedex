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
        var WrapperStyle = {
          background: "#FFF",
          marginLeft: 50,
          marginRight: 50,
          minHeight: "700px",
          marginTop:-16
        };

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
        };

        var PokeDetailWrapperStyle = {
          marginTop: 20
        }

        return (
            <div>
              <section id="poke-nav" className="pokemon-pagination">
                <Link style={PreviousStyle} to={`/pokemon/720`}>
                  <div className="pokedex-pokemon-pagination-wrapper pull-right">
                    <i className="fa fa-chevron-circle-left margin-right" style={PaginationArrow}></i>
                    <span style={PaginationPokeId} className="">#720</span>
                    <span style={PaginationPokeName} className="">Hoopa</span>
                  </div>
                </Link>

                <Link to={`/pokemon/720`}>
                  <div className="pokedex-pokemon-pagination-wrapper pull-right">
                    <span style={PaginationPokeName} className="">Ivysaur</span>
                    <span style={PaginationPokeId} className="">#2</span>
                    <i className="fa fa-chevron-circle-right margin-left" style={PaginationArrow}></i>
                  </div>
                </Link>
              </section>
              <div className="poke-detail-wrapper" style={WrapperStyle}>
                <section id="poke-title" style={PokeTitle}>
                  <span style={PokeNameStyle}>Bulbasaur</span>
                  <span style={PokeNumberStyle}>#1</span>
                </section>

                <section id="pokemon-detail-section" style={PokeDetailWrapperStyle}>
                  <div className="col-xs-6">
                    <img src={`/images/Pokemon/hd/1.png`} />
                  </div>
                  <div className="col-xs-6">
                    <p>
Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.
                    </p>
                  </div>
                </section>
              </div>
            </div>
        );
    }
});

module.exports = PokePage;
