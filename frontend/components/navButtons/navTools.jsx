import React from 'react';
import { Link } from 'react-router';

import Profile from './profile';
import Login from './login';
import SearchBar from './search';
import SessionStore from '../../stores/session';

class NavTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: SessionStore.currentAuthor(),
    };
  }
  componentDidMount() {
    this.authorListener = SessionStore.addListener(this.onChange);
  }
  componentWillUnmount = () => {
    this.authorListener.remove();
  }
  onChange = () => {
    this.setState({
      author: SessionStore.currentAuthor(),
    });
  }
  render() {
    let userButton = <Login isWrite={false} />;
    let write = <Login isWrite />;
    if (this.state.author && this.state.author.hasOwnProperty('id')) {
      userButton = <Profile />;
      write = <Link to="articles/new" >Write a story</ Link>;
    }
    return (
      <ul className="nav-tools">
        <li className="nav-tools-search">
          <SearchBar />
        </li>
        <li className="nav-tools--write">
          {write}
        </li>
        <li>
          {userButton}
        </li>
      </ul>
    );
  }
}

export default NavTools;
