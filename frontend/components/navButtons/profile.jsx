import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
import SessionUtil from '../../util/sessionUtil';
import SessionStore from '../../stores/session';

class Profile extends React.Component {
  static contextTypes: {
    router: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  fetchProfile() {
    hashHistory.push('authors/profile');
  }
  logout = () => {
    function _redirectIfNotLoggedIn() {
      if (!SessionStore.currentAuthor().hasOwnProperty('id')) {
        hashHistory.push('');
      }
      SessionUtil.logout(() => {
        hashHistory.push('');
      });
    }
    SessionUtil.fetchCurrentAuthor(_redirectIfNotLoggedIn);
  }
  toggleActive = () => {
    this.setState({
      active: !this.state.active,
    });
  }
  render() {
    let klass = 'hidden';
    if (this.state.active) klass = '';
    return (
      <div>
        <button
          className="nav-tools--profile"
          onClick={this.fetchProfile}
          onMouseOver={this.toggleActive}
          onMouseOut={this.toggleActive}
        >
          <img className="avatar" alt="avatar" />
        </button>
        <div
          className={`nav-tools--profile-dropdown group ${klass}`}
        >
          <a onClick={this.fetchProfile}>Profile</a>
          <a onClick={this.logout}>Log out</a>
        </div>
      </div>
    );
  }
}

export default Profile;
