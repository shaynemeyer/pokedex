var React = require('react');
var HTTP = require('../../services/HttpService');

var Weaknesses = React.createClass({
	getInitialState: function(){
		return {weaknesses: []};
	},
	componentDidMount: function() {
		var weaknessArr = [];
		var urls = [];
		this.props.types.map(function(item){
			urls.push({"resource_uri": item.resource_uri})
		});

		for(var url in urls) {
			var uri = urls[url].resource_uri;
			HTTP.get(uri)
			.then(function(data){
				for(var weak in data.weakness){
					var name = data.weakness[weak].name;
					if (!this.isDupe(this.state.weaknesses, name)) {
						this.addWeakness(name);
					}
				}
			}.bind(this));
		}
	},
	isDupe: function(arr, name){
		for(var i = 0; i < arr.length; i++){
			if(arr[i].name === name) {
				return true;
			}
		}
		return false;
	},
	addWeakness: function(name) {
		var newArray = this.state.weaknesses.slice();
		newArray.push({"name": name});
		this.setState({weaknesses:newArray});
	},
	render: function(){
		var weaknesses = this.state.weaknesses.map(function(item){
			return <button key={item.key} className={`btn background-color-${item.name} capitalize`}>{item.name}</button>;
		});
		return(
			<div className="dtm-weaknesses">
				<h3>Weaknesses</h3>
				<div>
					{weaknesses}
				</div>
			</div>
		);
	}
});

module.exports = Weaknesses;
