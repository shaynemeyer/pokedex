var React = require('react');

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
        return (
            <h1>Hi, I'm Pokédex number {this.state.pid}</h1>
        );
    }
});

module.exports = PokePage;
