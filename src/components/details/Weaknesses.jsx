var React = require('react');
var HTTP = require('../../services/HttpService');

var Weaknesses = React.createClass({
	getInitialState: function(){
		return {weaknesses: []};
	},
	componentDidMount: function() {
		var weakness = [];
		var urls = [];
		this.props.types.map(function(item){
			urls.push({"resource_uri": item.resource_uri})
		});
		urls.map(function(item){
			HTTP.get(item.resource_uri)
			.then(function(data){
				data.weakness.map(function(items){
					//console.log(items.name);
					weakness.push({"name": items.name});
				});

				this.setState({weaknesses: weakness});

			}.bind(this));
		});
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
