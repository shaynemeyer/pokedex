var React = require('react');

var PokePic = React.createClass({

	render: function(){
		return(
        <div className="pokedex-pokemon-profile">
          <img src={`/images/Pokemon/hd/${this.props.pid}.png`} />
        </div>
		);
	}
});

module.exports = PokePic;