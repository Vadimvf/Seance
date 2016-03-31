var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('./components/nav');
var util = require('./util/ArticleUtil');
var store = require('./stores/article');

$(function(){
  ReactDOM.render(
    <Nav />, document.getElementById("seance")
  );
});
