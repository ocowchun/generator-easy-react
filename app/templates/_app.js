var React = require('react');

var Title = require('./components/title');

React.render(
  React.createElement(Title, {
  name: 'John Cena'
  }),
  document.getElementById('react')
);
