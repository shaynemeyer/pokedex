var React = require('react');

var Types = React.createClass({

	render: function(){
		return(
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
	        </div>
		);
	}
});

module.exports = Types;