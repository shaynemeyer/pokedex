var React = require('react');

var SearchPokemon = React.createClass({

	render: function(){
		return(
            <div id="search-box" className="form-inline">

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name or Number"/>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-warning" value="Search" id="search" />
              </div>
            </div>
		);
	}
});

module.exports = SearchPokemon;
