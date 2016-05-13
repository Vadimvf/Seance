var React = require('react');
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var PropTypes = React.PropTypes;
var SearchStore = require('../../stores/search');
var SearchUtil = require('../../util/searchUtil');

var SearchBar = React.createClass({

    getInitialState: function() {
      return {
        searchParam: '',
        results: [],
        active: false
      };
    },

    componentDidMount: function() {
      this.searchListener = SearchStore.addListener(this._onSearch);
    },

    componentWillUnmount: function() {
      this.searchListener.remove();
    },

    _onSearch: function (){
      this.setState({
        results: SearchStore.all()
      });
    },

    handleChange: function(e){
      e.preventDefault();
      this.setState({
        searchParam: e.target.value
      });

      SearchUtil.search({query: e.target.value})
    },

    handleSubmit: function (e){
      e.preventDefault();
      SearchUtil.search({query: this.state.searchParam});
    },

    _createResultEl: function (){
      var articles = [];
      var authors = [];
      var articleHeader = null;
      var authorHeader = null;
      var klass = (this.state.active) ? "" : " hidden";

      var resultEls = this.state.results.map(function(result, idx) {
        if (result.type === "Article"){
          articles.push(_linkLi(result, idx))
        } else {
          authors.push(_linkLi(result, idx))
        }
      });

      if (articles.length > 0) {
        var articleList = (
          <ul>
            <li className="nav-tools-search--result-header">ARTICLES</li>
            {articles}
          </ul>
        )
      }

      if (authors.length > 0) {
        var authorList = (
          <ul>
            <li className="nav-tools-search--result-header">AUTHORS</li>
            {authors}
          </ul>
        )
      } else if (articles.length === 0 && this.state.active && this.state.searchParam.length > 0) {
        var authorList = (
          <ul>
            <li className="nav-tools-search--result-header">No Results Found</li>
          </ul>
        );
      } else {
        return;
      }

      return (
        <div onMouseOver={this.mousedOver}
             onMouseOut={this.mousedOut}
             className={"nav-tools-search--results" + klass}>
         {articleList}
         {authorList}
        </div>
      )

      function _resultPath(result){
        if (result.type === "Article"){
          return "articles/"
        } else {
          return "authors/"
        }
      }

      function _linkLi(result, idx){
        return (<li key={idx}>
          <Link to={_resultPath(result) + result.id}>
            {result.content}
          </Link>
        </li>);
      }
    },

    setActive: function(){
      this.setState({
        active: true
      });
    },

    setInactive: function(){
      this.setState({
        active: false
      });
    },

    blurred: function(){
      this.blur = true;
      if (!this.mouseOver) {
        this.setInactive();
        this.blur = false;
      }
    },

    mousedOver: function(){
      this.mouseOver = true;
    },

    mousedOut: function(){
      this.mouseOver = false;
      if (this.blur) {
        this.setInactive();
        this.blur = false;
      }
    },

    render: function() {
      let searchResults = this._createResultEl();

      return (
        <div className="group" >
          <form onSubmit={this.handleSubmit}>
            <img className="mobile-search-icon"></img>
            <img className="normal-search-icon"></img>
            <input type="text"
                   placeholder="Search Seance"
                   onChange={this.handleChange}
                   onFocus={this.setActive}
                   onBlur={this.blurred}
            />
          </form>
          {searchResults}
        </div>
      );
  }
});

module.exports = SearchBar;
