import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';

class Profile extends React.Component {
  static contextTypes: {
    router: PropTypes.object.isRequired,
  }
  fetchProfile() {
    hashHistory.push('authors/profile');
  }
  render() {
    return (
      <button
        className="nav-tools--profile"
        onClick={this.fetchProfile}
      >
        <img className="avatar" alt="avatar" />
      </button>
    );
  }
}

export default Profile;
