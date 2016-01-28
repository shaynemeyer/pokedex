var React = require('react');

var StatsInfo = React.createClass({

	render: function(){
		return(
      <div className="pokemon-stats-info">
        <h3>Stats</h3>
        <div className="row">

          <div className="col-xs-6">
            <ul>
              <li>
                <span className="stat-info-title">HP</span>
                <span className="stat-info-value">{this.props.hp}</span>
              </li>
              <li>
                <span className="stat-info-title">Attack</span>
                <span className="stat-info-value">{this.props.attack}</span>
              </li>
              <li>
                <span className="stat-info-title">Defense</span>
                <span className="stat-info-value">{this.props.defense}</span>
              </li>
            </ul>
          </div>

          <div className="col-xs-6">
            <ul>
              <li>
                <span className="stat-info-title">Special Attack</span>
                <span className="stat-info-value">{this.props.sp_atk}</span>
              </li>
              <li>
                <span className="stat-info-title">Special Defense</span>
                <span className="stat-info-value">{this.props.sp_def}</span>
              </li>
              <li>
                <span className="stat-info-title">Speed</span>
                <span className="stat-info-value">{this.props.speed}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
		);
	}
});

module.exports = StatsInfo;
