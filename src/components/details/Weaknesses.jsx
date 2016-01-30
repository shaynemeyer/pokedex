var React = require('react');

var Weaknesses = React.createClass({
	getInitialState: function(){
		return {weaknesses: []};
	},
	componentDidMount: function() {
		var weakness = [];

		this.props.types.map(function(item){
			console.log(item);
		});


		// HTTP.get(this.props.uri)
		// .then(function(data){
		// 	if (this.isMounted()) {
		// 		this.setState({description: data.description});
		// 	}
		// }.bind(this));
	},
	render: function(){
		var weaknesses = this.state.weaknesses.map(function(item){
			return (
				<li key={item.resource_uri} className={`background-color-${item.name}`}>
					<span className="capitalize">{item.name}</span>
				</li>);
		});
		return(
			<div className="dtm-weaknesses">
				<h3>Weaknesses</h3>
				<ul>
					{weaknesses}
				</ul>
			</div>
		);
	}
});

module.exports = Weaknesses;
