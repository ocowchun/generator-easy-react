var React = require('react');
var titleTemplate = require('.././templates/title');

var Title = React.createClass({
  render: function() {
    return titleTemplate.call(this);;
  }
});

module.exports = Title;
