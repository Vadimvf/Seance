var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('./components/nav');

$(function(){

  ReactDOM.render(
    <Nav />, document.getElementById("seance")
  );

});
