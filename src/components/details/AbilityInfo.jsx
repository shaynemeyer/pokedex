var React = require('react');

var AbilityInfo = React.createClass({

	render: function(){

		var abilities = this.props.abilities.map(function(item){
				return (<li key={item.resource_uri}>
				<a href="" className="moreInfo">
					<span className="attribute-value">{item.name}</span>
					<i className="fa fa-question-circle"></i>
				</a>
			</li>)
		});
		return(
      <div className="pokemon-ability-info color-bg color-lightblue">
        <div className="row">
          <div className="col-xs-6">
            <ul>
              <li>
                <span className="attribute-title">Height</span>
                <span className="attribute-value">{this.props.height}</span>
              </li>

              <li>
                <span className="attribute-title">Weight</span>
                <span className="attribute-value">{this.props.weight} lbs</span>
              </li>
            </ul>
          </div>

          <div className="col-xs-6">
            <ul>
              <li>
                <span className="attribute-title">Species</span>
                <span className="attribute-value">{this.props.species}</span>
              </li>
              <li>
                <span className="attribute-title">Abilities</span>

                <ul className="attribute-list">
										{abilities}
                </ul>

              </li>
            </ul>
          </div>
        </div>

      </div>
		);
	}
});

module.exports = AbilityInfo;
