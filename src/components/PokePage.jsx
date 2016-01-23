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
                  <span style={PokeNameStyle}>Bulbasaur</span>
                  <span style={PokeNumberStyle}>#1</span>
                </section>

                <section id="pokemon-detail-section" style={PokeDetailWrapperStyle}>
                  <div className="col-xs-6">
                    <div className="pokedex-pokemon-profile">
                      <img src={`/images/Pokemon/hd/${this.state.pid}.png`} />
                    </div>

                    <div className="pokedex-pokemon-attributes">
                      <div className="dtm-type">
                        <h3>Type</h3>
                        <ul>
                          <li className="background-color-Grass">
                            <span>Grass</span>
                          </li>

                          <li className="background-color-Poison middle">
                            <span>Poison</span>
                          </li>

                        </ul>
                      </div>

                      <div className="dtm-weaknesses">
                        <h3>Weaknesses</h3>
                        <ul>

                          <li className="background-color-Fire first">
                            <span>Fire</span>
                          </li>

                          <li className="background-color-Flying middle">
                            <span>Flying</span>
                          </li>

                          <li className="background-color-Ice last">
                            <span>Ice</span>
                          </li>

                          <li className="background-color-Psychic first">
                            <span>Psychic</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="version-descriptions col-xs-6">
                    <p>
                    Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.
                    </p>

                    <div className="pokemon-ability-info color-bg color-lightblue">
                      <div className="row">
                        <div className="col-xs-6">
                          <ul>
                            <li>
                              <span className="attribute-title">Height</span>
                              <span className="attribute-value">2' 04"</span>
                            </li>

                            <li>
                              <span className="attribute-title">Weight</span>
                              <span className="attribute-value">15.2 lbs</span>
                            </li>

                            <li>
                              <span className="attribute-title">Gender</span>
                              <span className="attribute-value">
                                <i className="fa fa-mars"></i>
                                <i className="fa fa-venus"></i>
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="col-xs-6">
                          <ul>
                            <li>
                              <span className="attribute-title">Species</span>
                              <span className="attribute-value">Seed Pokemon</span>
                            </li>
                            <li>
                              <span className="attribute-title">Abilities</span>

                              <ul className="attribute-list">

                                <li>
                                  <a href="" className="moreInfo">
                                    <span className="attribute-value">Overgrow</span>
                                    <i className="fa fa-question-circle"></i>
                                  </a>
                                </li>

                              </ul>

                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>

                    <div className="pokemon-stats-info">
                      <h3>Stats</h3>
                      <div className="row">

                        <div className="col-xs-6">
                          <ul>
                            <li>
                              <span className="stat-info-title">HP</span>
                              <span className="stat-info-value">45</span>
                            </li>
                            <li>
                              <span className="stat-info-title">Attack</span>
                              <span className="stat-info-value">49</span>
                            </li>
                            <li>
                              <span className="stat-info-title">Defense</span>
                              <span className="stat-info-value">49</span>
                            </li>
                          </ul>
                        </div>

                        <div className="col-xs-6">
                          <ul>
                            <li>
                              <span className="stat-info-title">Special Attack</span>
                              <span className="stat-info-value">65</span>
                            </li>
                            <li>
                              <span className="stat-info-title">Special Defense</span>
                              <span className="stat-info-value">65</span>
                            </li>
                            <li>
                              <span className="stat-info-title">Speed</span>
                              <span className="stat-info-value">45</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
