var React = require('react');


var SortByFilter = React.createClass({
    getInitialState: function(){
        return {showSortFilters: false, hover: false};
    },
    toggleHover: function(){
        this.setState({hover: !this.state.hover})
    },
    filterSelect: function(e){
      // change text 
      var filterText = e.target.text;
      document.getElementById("buttonText").innerHTML = filterText;
      
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
        
        var sortIconStyle = {
          fontSize: 24  
        };
        
        var sortIconSmallStyle = {
            fontSize: 22 ,
            paddingRight: 10
        };

        return (
            <div id="sortFilterBox" style={sortFilterBoxStyle} className="dropdown">
                
                <button style={buttonStyle} className="btn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span id="buttonText">Lowest Number (First)</span>
                    <i style={sortIconStyle} className="fa fa-sort pull-right"></i>
                </button>
                <ul style={sortItemsBox} className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a onClick={this.filterSelect} href="#">Sort results by…</a></li>
                    <li><a onClick={this.filterSelect} href="#">Lowest Number (First)</a></li>
                    <li><a onClick={this.filterSelect} href="#">Highest Number (First)</a></li>
                    <li><a onClick={this.filterSelect} href="#">A-Z</a></li>
                    <li><a onClick={this.filterSelect} href="#">Z-A</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = SortByFilter;

