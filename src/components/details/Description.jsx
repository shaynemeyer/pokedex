var React = require('react');
var HTTP = require('../../services/HttpService');

var Description = React.createClass({
	getInitialState: function(){
		return {description: ""};
	},
	componentDidMount: function() {
		HTTP.get(this.props.uri)
		.then(function(data){
			if (this.isMounted()) {
				this.setState({description: data.description});
			}
		}.bind(this));
	},
	render: function(){

		return(
			<p>
				{this.state.description}
			</p>
		);
	}
});

module.exports = Description;
