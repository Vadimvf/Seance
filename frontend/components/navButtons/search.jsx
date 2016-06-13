import React from 'react';

import SearchResults from './searchResults';
import SearchUtil from '../../util/searchUtil';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: '',
      results: [],
      active: false,
      mobileActive: false,
    };
  }
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
  mobileSearch = (e) => {
    e.preventDefault();
    this.setState({
      mobileActive: !this.state.mobileActive,
    });
  }
  render() {
    let isVisible = !!this.state.searchParam.length && this.state.active;
    let mobileKlass = 'mobile-search-icon';
    let mobileInput = '';
    if (this.state.mobileActive) {
      mobileKlass = 'mobile-search-exit';
      mobileInput = 'view';
    }
    return (
      <div className="group" >
        <form onSubmit={this.handleSubmit}>
          <img
            className="normal-search-icon"
            alt="Search Icon"
          />
          <img
            alt="Search Icon"
            className={mobileKlass}
            onClick={this.mobileSearch}
            onTouchEnd={this.mobileSearch}
          />
          <input
            type="text"
            className={`search-input ${mobileInput}`}
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
          isVisible={isVisible}
        />
      </div>
    );
  }
}

module.exports = SearchBar;
