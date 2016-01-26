var React = require('react');

var AbilityInfo = React.createClass({

	render: function(){
		return(
      <div className="pokemon-ability-info color-bg color-lightblue">
        <div className="row">
          <div className="col-xs-6">
            <ul>
              <li>
                <span className="attribute-title">Height</span>
                <span className="attribute-value">2' 04"</span>
              </li>

              <li>
                <span className="attribute-title">Weight</span>
                <span className="attribute-value">15.2 lbs</span>
              </li>
            </ul>
          </div>

          <div className="col-xs-6">
            <ul>
              <li>
                <span className="attribute-title">Species</span>
                <span className="attribute-value">Seed Pokemon</span>
              </li>
              <li>
                <span className="attribute-title">Abilities</span>

                <ul className="attribute-list">

                  <li>
                    <a href="" className="moreInfo">
                      <span className="attribute-value">Overgrow</span>
                      <i className="fa fa-question-circle"></i>
                    </a>
                  </li>

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
