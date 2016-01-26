var React = require('react');


var SortRandom = React.createClass({
    onRandomize: function(e){
      console.log("randomized clicked");
    },
    render: function() {



        var sortRandomBoxStyle = {
           width: 300,
        };

        var buttonStyle = {
            color: "#FFF",
            background: "#30a7d7",
            fontWeight: "normal",
            width: 300,
            height: 40,
            fontSize:18,
            textAlign: "center",
            textShadow: "0 0 0 none"
        };

        var sortIconStyle = {
            fontSize: 22 ,
            paddingRight: 10
        };

        return (
            <div id="sortRandomBox">

                <button style={buttonStyle} className="btn" type="button" id="sortRandomBtn" onClick={this.onRandomize}>

                   <i style={sortIconStyle} className="fa fa-refresh"></i>
                    Surprise Me!
                </button>

            </div>
        );
    }
});

module.exports = SortRandom;
