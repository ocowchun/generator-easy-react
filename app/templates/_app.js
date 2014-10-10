var React = require('react');

var Title = require('./components/title');


React.renderComponent(Title({name:"hello joe!!"}),
	document.getElementById('react')
);