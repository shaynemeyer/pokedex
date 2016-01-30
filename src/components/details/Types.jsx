var React = require('react');

var Types = React.createClass({

	render: function(){
		var types = this.props.types.map(function(item){
			return (
				<li key={item.resource_uri} className={`background-color-${item.name}`}>
					<span className="capitalize">{item.name}</span>
				</li>);
		});
		return(
	        <div className="pokedex-pokemon-attributes">
	          	<div className="dtm-type">
		            <h3>Type</h3>
		            <ul>
									{types}
		            </ul>
	          	</div>
	        </div>
		);
	}
});

module.exports = Types;
