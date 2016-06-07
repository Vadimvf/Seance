import React from 'react';
// import { Link } from 'react-router';

// import SearchStore from '../../stores/search';
import SearchResults from './searchResults';
import SearchUtil from '../../util/searchUtil';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: '',
      results: [],
      active: false,
    };
  }

  // componentDidMount() {
  //   this.searchListener = SearchStore.addListener(this.onSearch);
  // }
  //
  // componentWillUnmount = () => {
  //   this.searchListener.remove();
  // }

  // onSearch = () => {
  //   this.setState({
  //     results: SearchStore.all(),
  //   });
  // }

  setActive = () => {
    this.setState({
      active: true,
    });
  }

  setInactive = () => {
    this.setState({
      active: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    SearchUtil.search({
      query: this.state.searchParam,
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      searchParam: e.target.value,
    });

    SearchUtil.search({
      query: e.target.value,
    });
  }

  // createLinks(result, idx) {
  //   const resultPath = () => {
  //     if (result.type === 'Article') return 'articles/';
  //     return 'authors/';
  //   };
  //
  //   return (
  //     <li key={idx}>
  //       <Link to={resultPath(result) + result.id}>
  //         {result.content}
  //       </Link>
  //     </li>);
  // }
  //
  // createResultSubList(subList, type) {
  //   if (!!subList.length) {
  //     return (
  //       <ul>
  //         <li className="nav-tools-search--result-header">{type}</li>
  //         {subList}
  //       </ul>
  //     );
  //   }
  //
  //   return null;
  // }
  //
  // createResultEl() {
  //   const articles = [];
  //   const authors = [];
  //   const klass = (this.state.active) ? '' : ' hidden';
  //   let noResults = null;
  //
  //
  //   this.state.results.forEach((result, idx) => {
  //     if (result.type === 'Article') {
  //       articles.push(this.createLinks(result, idx));
  //     } else {
  //       authors.push(this.createLinks(result, idx));
  //     }
  //   });
  //
  //   const articleList = this.createResultSubList(articles, 'ARTICLES');
  //   const authorList = this.createResultSubList(authors, 'AUTHORS');
  //
  //   if (!this.state.results.length && !!this.state.searchParam.length) {
  //     noResults = (
  //       <ul>
  //         <li className="nav-tools-search--result-header">No Results Found</li>
  //       </ul>
  //     );
  //   } else if (!this.state.results.length && !this.state.searchParam.length) {
  //     return null;
  //   }
  //
  //   return (
  //     <div
  //       onMouseOver={this.mousedOver}
  //       onMouseOut={this.mousedOut}
  //       className={`nav-tools-search--results ${klass}`}
  //     >
  //        {articleList}
  //        {authorList}
  //        {noResults}
  //     </div>
  //   );
  // }

  blurred = () => {
    this.blur = true;
    if (!this.mouseOver) {
      this.setInactive();
      this.blur = false;
    }
  }

  mousedOver = () => {
    this.mouseOver = true;
  }

  mousedOut = () => {
    this.mouseOver = false;
    if (this.blur) {
      this.setInactive();
      this.blur = false;
    }
  }

  mobileSearch(e) {
    e.preventDefault();
    const target = e.target;
    const id = e.target.parentElement.children[2].id;

    if (id === 'view') {
      target.parentElement.children[2].id = ' ';
      target.classList = 'mobile-search-icon';
    } else {
      target.parentElement.children[2].id = 'view';
      target.classList = 'mobile-search-exit';
    }
  }

  render() {
    // const searchResults = this.createResultEl();

    return (
      <div className="group" >
        <form onSubmit={this.handleSubmit}>
          <img
            className="normal-search-icon"
            alt="Search Icon"
          />
          <img
            alt="Search Icon"
            className="mobile-search-icon"
            onClick={this.mobileSearch}
            onTouchEnd={this.mobileSearch}
          />
          <input
            type="text"
            className="search-input"
            placeholder="Search Seance"
            autoComplete="off"
            onChange={this.handleChange}
            onFocus={this.setActive}
            onBlur={this.blurred}
          />
        </form>
        <SearchResults
          onMouseOver={this.mousedOver}
          onMouseOut={this.mousedOut}
          isVisible={!!this.state.searchParam.length}
        />
      </div>
    );
  }
}

module.exports = SearchBar;
