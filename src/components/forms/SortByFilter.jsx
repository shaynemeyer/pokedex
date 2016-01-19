var React = require('react');


var SortByFilter = React.createClass({
    getInitialState: function(){
        return {showSortFilters: false, hover: false};
    },
    toggleHover: function(){
        this.setState({hover: !this.state.hover})
    },
    render: function() {

        var sortFiltersShow = {
            display: this.showSortFilters ? "block" : "none"
        };
        
        var sortFilterBoxStyle = {
           width: 300,
        };
        
        var sortItemsBox = {
          width: 300,
          backgroundColor: "#666"
          
        };
        
        var sortItemsLink = {
            color: "#eee"
        };
        
        var sortItemListItemStyle = {
            backgroundColor: this.state.hover ? "#000" : "#666"
        }
        
        var buttonStyle = {
            color: "#FFF",
            background: "#000",
            fontWeight: "normal",
            width: 300, 
            height: 40,
            fontSize:18,
            textAlign: "left",
            textShadow: "0 0 0 none"
        };

        return (
            <div id="sortFilterBox" style={sortFilterBoxStyle} className="dropdown">
                <button style={buttonStyle} className="btn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort results by…
                    <span className="caret pull-right"></span>
                </button>
                <ul style={sortItemsBox} className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Sort results by…</a></li>
                    <li><a href="#">Lowest Number (First)</a></li>
                    <li><a href="#">Highest Number (First)</a></li>
                    <li><a href="#">A-Z</a></li>
                    <li><a href="#">Z-A</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = SortByFilter;

