var React = require('react');


var SortByFilter = React.createClass({

  render: function() {

    return (
      <select id="sortOrder" style={sortOrder}>
        <option value="noSort">Sort results by…</option>
        <option selected="" value="numberAsc">Lowest Number (First)</option>
        <option value="numberDesc">Highest Number (First)</option>
        <option value="nameAsc">A-Z</option>
        <option value="nameDesc">Z-A</option>
      </select>
      <div className="custom-select-menu" tabindex="0">
        <label className="styled-select button-black icon icon_pokeball selection-made">Sort results by…</label>
        <ul data-select-name="undefined">
          <li data-option-value="noSort" className="selected">Sort results by…</li>
          <li data-option-value="numberAsc" className="">Lowest Number (First)</li>
          <li data-option-value="numberDesc" className="">Highest Number (First)</li>
          <li data-option-value="nameAsc" className="">A-Z</li>
          <li data-option-value="nameDesc" className="">Z-A</li>
        </ul>
        <input type="hidden" name="undefined" value="noSort" />
      </div>
    );
  }
});

module.exports = SortByFilter;
