var React = require('react');


var BasePage = React.createClass({

    render: function(){

        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div>
                            {this.props.children}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = BasePage;
