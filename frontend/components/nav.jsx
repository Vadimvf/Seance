import React from 'react';

import Logo from './navButtons/logo';
import NavLinks from './navButtons/navLinks';
import NavTools from './navButtons/navTools';
import SearchBar from './navButtons/search';
import NavConstants from '../constants/navConstants';
import NavStore from '../stores/navStore';
import NavWriteTools from './navButtons/navWriteTools';
import Profile from './navButtons/profile';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navType: NavConstants.DEFAULT,
    };
  }
  componentDidMount() {
    this.listener = NavStore.addListener(this.onChange);
  }
  componentWillUnmount = () => {
    this.listener.remove();
  }
  onChange = () => {
    this.setState({
      navType: NavStore.currentNavType(),
    });
  }
  setNavRenderOnType = () => {
    let navContent;
    switch (this.state.navType) {
      case NavConstants.DEFAULT:
        navContent = (
          <header className="nav group">
            <Logo />
            <NavLinks />
            <NavTools />
          </header>
        );
        break;
      case NavConstants.WRITE_TOOLS:
        navContent = (
          <header className="nav group">
            <Logo />
            <NavWriteTools />
          </header>
        );
        break;
      case NavConstants.ARTICLE_SHOW:
        navContent = (
          <header className="nav group">
            <Logo />
            <ul className="nav-tools">
              <li className="nav-tools-search">
                <SearchBar />
              </li>
              <li>
                <Profile />
              </li>
            </ul>
          </header>
        );
        break;
        // no default
    }
    return navContent;
  }
  render() {
    return this.setNavRenderOnType();
  }

}

export default NavBar;
