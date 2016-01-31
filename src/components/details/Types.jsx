var React = require('react');

var Types = React.createClass({

	render: function(){
		var types = this.props.types.map(function(item){
			return <button className={`btn background-color-${item.name} capitalize`}>{item.name}</button>;
		});
		return(
	        <div className="pokedex-pokemon-attributes">
	          	<div className="dtm-type">
		            <h3>Type</h3>
		            <div>
									{types}
		            </div>
	          	</div>
	        </div>
		);
	}
});

module.exports = Types;
