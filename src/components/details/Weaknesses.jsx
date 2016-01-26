var React = require('react');

var Weaknesses = React.createClass({

	render: function(){
		return(
			<div className="dtm-weaknesses">
				<h3>Weaknesses</h3>
				<ul>

					<li className="background-color-Fire first">
					<span>Fire</span>
					</li>

					<li className="background-color-Flying middle">
					<span>Flying</span>
					</li>

					<li className="background-color-Ice last">
					<span>Ice</span>
					</li>

					<li className="background-color-Psychic first">
					<span>Psychic</span>
					</li>
				</ul>
			</div>
		);
	}
});

module.exports = Weaknesses;

