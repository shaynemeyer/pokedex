var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PokePic = require('./details/PokePic.jsx');
var Types = require('./details/Types.jsx');
var Weaknesses = require('./details/Weaknesses.jsx');
var Description = require('./details/Description.jsx');
var AbilityInfo = require('./details/AbilityInfo.jsx');
var StatsInfo = require('./details/StatsInfo.jsx');
var HTTP = require('../services/HttpService');

var PokePage = React.createClass({
    getInitialState: function(){
      return {pid: "",pokedata: []};
    },
    componentDidMount: function() {
      this.setState({pid: this.props.params.pid});
      var pokemonUrl = `api/v1/pokemon/${this.props.params.pid}/`;
      HTTP.get(pokemonUrl)
      .then(function(data){
        if (this.isMounted()) {
          this.setState({pokedata: [data]});
        }
      }.bind(this));
    },
    componentWillReceiveProps: function(nextProps){
      this.setState({pid: nextProps.params.pokeId});
    },
    render: function(){
        var WrapperStyle = {
          background: "#FFF",
          marginLeft: 50,
          marginRight: 50,
          minHeight: "900px",
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
        };

        var abilitiesInfo = this.state.pokedata.map(function(item){
          return <AbilityInfo height={item.height} weight={item.weight} species={item.species} abilities={item.abilities} />;
        });

        var statsInfo = this.state.pokedata.map(function(item){
          return <StatsInfo hp={item.hp} attack={item.attack} defense={item.defense} speed={item.speed} sp_atk={item.sp_atk} sp_def={item.sp_def}  />;
        });

        var pokename = this.state.pokedata.map(function(item){
          return <span style={PokeNameStyle}>{item.name}</span>;
        });

        var descriptions = this.state.pokedata.map(function(item){
          return <Description uri={item.descriptions[0]['resource_uri']}/>;
        });

        var types = this.state.pokedata.map(function(item){
          return <Types types={item.types}/>;
        });

        var weakenesses = this.state.pokedata.map(function(item){
          return <Weaknesses types={item.types}/>;
        });
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

                <Link to={`/pokemon/2`}>
                  <div className="pokedex-pokemon-pagination-wrapper pull-right">
                    <span style={PaginationPokeName} className="">Ivysaur</span>
                    <span style={PaginationPokeId} className="">#2</span>
                    <i className="fa fa-chevron-circle-right margin-left" style={PaginationArrow}></i>
                  </div>
                </Link>
              </section>
              <div className="poke-detail-wrapper" style={WrapperStyle}>
                <section id="poke-title" style={PokeTitle}>
                  {pokename}
                  <span style={PokeNumberStyle}>#{this.state.pid}</span>
                </section>

                <section id="pokemon-detail-section" style={PokeDetailWrapperStyle}>
                  <div className="col-xs-6">

                    <PokePic pid={this.state.pid} />

                    {types}

                    {weakenesses}

                  </div>
                  <div className="version-descriptions col-xs-6">

                    {descriptions}

                    {abilitiesInfo}

                    {statsInfo}

                  </div>
                </section>

                <section>
                  <Link to="/" className="btn btn-warning pull-right explore-more-button">Explore More Pokémon</Link>
                </section>
              </div>


            </div>
        );
    }
});

module.exports = PokePage;
