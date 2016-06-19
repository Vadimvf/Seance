import React, { PropTypes } from 'react';

class EditInfo extends React.Component {
  static propTypes = {
    tempAuthor: PropTypes.object.isRequired,
  }
  handleChange = (fieldType, e) => {
    this.props.tempAuthor[fieldType] = e.target.value;
  }
  render() {
    const { fullname, username, email, bio } = this.props.tempAuthor;
    return (
      <form className="author-edit-form">
        <h2>
          <input
            autoFocus
            type="text"
            defaultValue={fullname}
            placeholder="Your Full Name"
            onChange={e => this.handleChange('fullname', e)}
          />
        </h2>
        <h3>
          <input
            type="text"
            defaultValue={username}
            placeholder="Your Username"
            onChange={e => this.handleChange('username', e)}
          />
        </h3>
        <h4>
          <input
            type="email"
            className="title"
            placeholder="Your Email"
            defaultValue={email}
            onChange={e => this.handleChange('email', e)}
          />
        </h4>
        <p>
          <textarea
            className="title"
            placeholder="Your Bio"
            defaultValue={bio}
            onChange={e => this.handleChange('bio', e)}
          />
        </p>
      </form>
    );
  }
}

export default EditInfo;
