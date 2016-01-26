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
                <span className="stat-info-value">45</span>
              </li>
              <li>
                <span className="stat-info-title">Attack</span>
                <span className="stat-info-value">49</span>
              </li>
              <li>
                <span className="stat-info-title">Defense</span>
                <span className="stat-info-value">49</span>
              </li>
            </ul>
          </div>

          <div className="col-xs-6">
            <ul>
              <li>
                <span className="stat-info-title">Special Attack</span>
                <span className="stat-info-value">65</span>
              </li>
              <li>
                <span className="stat-info-title">Special Defense</span>
                <span className="stat-info-value">65</span>
              </li>
              <li>
                <span className="stat-info-title">Speed</span>
                <span className="stat-info-value">45</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
		);
	}
});

module.exports = StatsInfo;
