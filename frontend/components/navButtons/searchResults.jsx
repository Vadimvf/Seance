import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import SearchStore from '../../stores/search';

class SearchResults extends React.Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      results: SearchStore.all(),
    };
  }
  componentDidMount() {
    this.searchListener = SearchStore.addListener(this.onResults);
  }
  componentWillUnmount = () => {
    this.searchListener.remove();
  }
  onResults = () => {
    this.setState({
      results: SearchStore.all(),
    });
  }
  createLinks(result, idx) {
    const resultPath = () => {
      if (result.type === 'Article') return 'articles/';
      return 'authors/';
    };
    return (
      <li key={idx}>
        <Link to={resultPath(result) + result.id}>
          {result.content}
        </Link>
      </li>);
  }
  createResultSubList(subList, type) {
    if (!!subList.length) {
      return (
        <ul>
          <li className="nav-tools-search--result-header">{type}</li>
          {subList}
        </ul>
      );
    }
    return null;
  }
  createNoResultsList() {
    return (
      <ul>
        <li className="nav-tools-search--result-header">No Results Found</li>
      </ul>
    );
  }
  resetResults() {
    this.articleList = null;
    this.authorList = null;
    this.noResults = null;
  }
  createResultEl = () => {
    const articles = [];
    const authors = [];
    const isResults = !!this.state.results.length;
    const isSearcParam = true;
    this.resetResults();
    if (!isResults && isSearcParam) {
      this.noResults = this.createNoResultsList();
      return;
    }
    this.state.results.forEach((result, idx) => {
      if (result.type === 'Article') {
        articles.push(this.createLinks(result, idx));
      } else {
        authors.push(this.createLinks(result, idx));
      }
    });
    this.articleList = this.createResultSubList(articles, 'ARTICLES');
    this.authorList = this.createResultSubList(authors, 'AUTHORS');
  }
  render() {
    const { isVisible, ...mouseFuncs } = this.props;
    const klass = (isVisible) ? '' : 'hidden';
    this.createResultEl();
    return (
      <div
        className={`nav-tools-search--results ${klass}`}
        { ...mouseFuncs }
      >
       {this.articleList}
       {this.authorList}
       {this.noResults}
      </div>
    );
  }
}

export default SearchResults;
